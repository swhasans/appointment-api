const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// Handle Errors
const handleErrors = (err) => {
    console.timeLog(err.message, err.code);
    let errors = { email: "", password: "" };

    //duplicate error code
    if (err.code === 11000) {
        errors.email = "That email is already registered";
        return errors;
    }
    //validation errors
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

// GET method (Fetches signup page)
const getSignUp = (req, res) => {
    res.send('signup.ejs: This Is New User Sign Up Page');
};

// GET method (Fetches a specific user by ID)
const getLogIn = (req, res) => {
    res.send('login.ejs: This Is User Log In Page');
};

// POST method (Creates a new user)
const postSignUp = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (err) {
        handleErrors(err);
        res.status(400).send('Sorry, could not register user.');
    }
    console.log(`Email : ${email} & Password : ${password}`);
};

// POST method (User login)
const postLogIn = (req, res) => {
    const { email, password } = req.body;
    console.log(`Email : ${email} & Password : ${password}`);
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