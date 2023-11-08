const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Import the User model

// Route to render the signup page
router.get('/signup', (req, res) => {
  res.render('signup'); 
});

// Route to handle user signup
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.redirect('/');
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to render the login page
router.get('/login', (req, res) => {
  res.render('login'); 
});

// Route to handle user login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !user.checkPassword(password)) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.redirect('/');
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to handle user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect('/');
    });
  } else {
    res.status(400).json({ message: 'No user to log out' });
  }
});

module.exports = router;
