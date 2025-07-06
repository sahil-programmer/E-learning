# 🎓 E-Learning Platform — Backend (MERN Stack)

This is the **backend API** for a full-stack **E-Learning Platform** built using the **MERN (MongoDB, Express, React, Node.js)** stack. It supports **role-based access (Admin,Student)**, **course and lecture management**, **secure authentication**, **Razorpay payments**, and **OTP-based password reset** using **Nodemailer**.

---

## 🚀 Features

- 👤 JWT-based Authentication (Login/Register)
- 👮‍♂️ Role-Based Access (Admin, Professor, Student)
- 📚 Admin: Create/Edit/Delete Courses & Lectures
- 🎥 File Uploads (Videos, PDFs) with Multer
- 💳 Razorpay Payment Integration for Enrollment
- 🧑‍🎓 Students: Enroll in Courses, Track Progress
- 🛡️ Protected Routes (Auth & Role Middleware)
- 📩 Nodemailer: OTP-based Forgot Password Flow
- 📈 User Progress Tracking 
- 📦 Modular Folder Structure for Scalability

---

### ▶️ Run Server

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Start the server in development mode (with nodemon if configured)
npm run dev

# 3️⃣ For production
npm start



