const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// GET method (Fetches signup page)
const getSignUp = (req, res) => {
    res.render('signup');
};

// GET method (Fetches a specific user by ID)
const getLogIn = (req, res) => {
    res.render('login');
};

// POST method (Creates a new user)
const postSignUp = (req, res) => {
    res.send('new signup');
};


const postLogIn = (req, res) => {
    res.send('user login');
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