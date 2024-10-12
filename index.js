import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';
import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';
import feedbackRoutes from './routes/feedback.js'
import Razorpay from 'razorpay';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

// Initialize Razorpay instance
export const instance = new Razorpay({
    key_id: process.env.KEY_ID,   // Ensure your environment variable is capitalized
    key_secret: process.env.KEY_SECRET,
});

// Middleware
app.use(cors()); // Use more restrictive CORS setup if needed
app.use("/uploads", express.static("uploads"));  // Serve static files from uploads

// Use either the environment variable PORT or default to 5000
const port = process.env.PORT || 5000;

// Connect to the database and start the server
connectDb().then(() => {
    app.listen(port, () => {
        console.log('Server is running on http://localhost:' + port);
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});

// Routes
app.get('/', (req, res) => {
    res.send("Server is up and running...");
});

// Define API routes
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", courseRoutes);
app.use('/api/feedback', feedbackRoutes);
