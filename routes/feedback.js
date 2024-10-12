// routes/feedback.js
import express from 'express';
import Feedback from '../models/Feedback.js';

const router = express.Router();

router.post("/submit", async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'Error submitting feedback', details: error.message });
    }
});

export default router;
