const express = require('express');
const router = express.Router();
const { Comment } = require('../models'); // Import the Comment model

// Route to handle adding a comment
router.post('/add', async (req, res) => {
  try {
    const { text, post_id } = req.body;
    const user_id = req.session.user_id; // Assuming user is logged in
    const comment = await Comment.create({ text, post_id, user_id });
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
