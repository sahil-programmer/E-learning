import Feedback from '../models/Feedback';
// POST: Add new feedback
const createFeedback = async (req, res) => {
  const { name, email, feedbackMessage } = req.body;

  try {
    const feedback = new Feedback({
      name,
      email,
      feedbackMessage,
    });

    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again' });
  }
};

// GET: Fetch all feedback (admin use case)
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
};

module.exports = {
  createFeedback,
  getAllFeedback,
};
