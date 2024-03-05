// routes/authRoutes.js
const express = require('express');
const router = express.Router();

const User = require('../database/db'); // Adjust the path as per your project structure




const loginMid = require('../middleware/AuthMid');

// Define authentication routes
router.post('/login',loginMid.authlogin, async (req, res) => {
    res.send("successfully login")
  

});

router.post('/register',loginMid.authregister,async (req, res) => {
    const {username,password} = req.body;

    const newUser = new User({ email: username, password });
        await newUser.save();
        res.status(201).send("User registered successfully");
});

module.exports = router;
