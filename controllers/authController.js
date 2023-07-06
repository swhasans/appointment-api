const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// GET method (Fetches signup page)
const getSignUp = (req, res) => {
    res.send('signup.ejs: This Is New User Sign Up Page');
};

// GET method (Fetches a specific user by ID)
const getLogIn = (req, res) => {
    res.send('login.ejs: This Is User Log In Page');
};

// POST method (Creates a new user)
const postSignUp = (req, res) => {
    res.send('new signup'); // Send a response for successful user signup
};

// POST method (User login)
const postLogIn = (req, res) => {
    res.send('user login'); // Send a response for successful user login
};
 
const getLogout = (req, res) => {
	
};

module.exports = {
    getSignUp,
    getLogIn,
    postSignUp,
    postLogIn,
    getLogout
};