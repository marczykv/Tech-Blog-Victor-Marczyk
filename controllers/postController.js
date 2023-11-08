const express = require('express');
const router = express.Router();
const { Post, Comment, User } = require('../models'); // Import models

// Route to render the homepage with existing blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }, Comment],
      order: [['created_at', 'DESC']],
    });
    res.render('home', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
