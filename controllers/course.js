import { instance } from "../index.js";
import TryCatch from "../middlewares/TryCatch.js";
import { Courses } from "../models/Courses.js";
import { Lecture } from "../models/Lecture.js";
import { Payment } from "../models/Payment.js";
import { User } from "../models/User.js";
import crypto from 'crypto';

export const getAllCourses= TryCatch(async(req,res)=>{
    const courses = await Courses.find();

    res.json({
        courses,
    })
});

export const getSingleCourse= TryCatch(async(req,res) => {
    const course= await Courses.findById(req.params.id);

    res.json({
        course,
    })
});

export const fetchLectures= TryCatch(async(req,res)=>{
    const courses=req.params.id
    const lectures= await Lecture.find({course:req.params.id})
    const user= await User.findById(req.user._id)
    console.log("1");
    console.log(user.subscription);
    if(user.role==="admin"){
        return res.status(200).json({lectures});
    }
    console.log(lectures.course);
    if(user.subscription.includes(lectures.course))
    {
        return res.status(400).json({
    message:"you have not subscribed to this course",
        });
    }

    res.json({lectures});
})

export const fetchLecture=TryCatch(async(req,res)=>{
    const lecture= await Lecture.findById(req.params.id);
    const user= await User.findById(req.user._id)

    if(user.role==="admin"){
        return res.status(200).json({lecture});
    }

    if(user.subscription.includes(req.params.id))
        return res.status(400).json({
    message:"you have not subscribed to this course",
        });

    res.json({lecture});
});

export const getMyCourses=TryCatch(async(req,res)=>{
    const courses=await Courses.find({_id:req.user.subscription})

    res.json({
        courses,
    })
});

export const checkout=TryCatch(
    async(req,res)=>{
       const user= await User.findById(req.user._id)
       
       const course=await Courses.findById(req.params.id);
       if(user.subscription.includes(course._id)){
        return res.status(400).json({
            message:"you already have this course",
        })
       }
       const options={
        amount:Number(course.price * 100),
        currency:"INR",
       };
       const order = await instance.orders.create(options);
       res.status(201).json({
        order,
        course,
       });
    }
)
console.log(process.env.KEY_SECRET);
export const paymentVerification =TryCatch( async(req,res)=>{
    const { razorpay_order_id,razorpay_payment_id, razorpay_signature}=req.body;
     const body =razorpay_order_id+"|"+razorpay_payment_id;
    //  console.log(process.env.KEY_SECRET);
     const expectedSignature=crypto.createHmac("sha256",process.env.KEY_SECRET)
     .update(body)
     .digest("hex");

     const isAuthentic=expectedSignature===razorpay_signature;
     if(isAuthentic){
        await Payment.create(
            {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            }
        )

        const user= await User.findById(req.user._id);
        const course= await Courses.findById(req.params.id);

         user.subscription.push(course._id)

         await user.save()

         res.status(200).json({
            message:"Course Purchased Successfully",
         })
    
     }
     else{
        return res.status(400).json({
            message:"Payment Failed"
        })
     }
}) 