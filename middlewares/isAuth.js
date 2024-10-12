import   jwt from 'jsonwebtoken';
import {User} from "../models/User.js"
 export const isAuth= async(req,res,next)=>{
    try{
        const token =req.headers.token;
        if(!token)
            res.status(403).json({
        message:"please login",
    });
    const decodeData= jwt.verify(token,process.env.Jwt_Secret);

    req.user= await User.findById(decodeData._id);
     next()
    }
    catch(e){
        res.status(500).json({
            message:"login required"
        })
    }
 }


 export const isAdmin=(req,res,next)=>{
    try{
if(req.user.role !== "admin") return res.status(403).json({
    message:"you are not admin",
});
next();
    }catch(e)
    {
        res.status(500).json({
            message:e.message,
        })
    }
 }