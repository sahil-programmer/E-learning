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

## 📁 Project Structure
---
e-learning/
│
├── database/# Connect database
├── controllers/ # Business logic (auth, course, user)
├── middleware/ # Auth & role protection
├── models/ # Mongoose schemas
├── routes/ # All Express routes (auth, admin, student)
├── uploads/ # Lecture videos/files (if stored locally)
├── .env # Environment variables
├── index.js # App entry point
└── README.md # You're here!

---

### ▶️ Run Server

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Start the server in development mode (with nodemon if configured)
npm run dev

# 3️⃣ For production
npm start



