const express = require('express');
const router = express.Router();

// @desc Landing page
// @route GET /
router.get('/',(req, res) => {
    res.render('home');
});

// @desc Login page
// @route GET /login
router.get('/login', (req, res) => {
  res.render('login', {
    layout: 'login',
  });
});

// @desc Signup page
// @route GET /auth/signup
router.get('/signup', (req, res) => {
  res.render('signup', {
    layout: 'login',
  });
});


// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


module.exports = router;
