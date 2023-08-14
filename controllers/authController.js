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

    //incorrect email
    if (err.message === "Incorrect Email") {
        errors.email = "That email is not registered";
    }

    //incorrect password
    if (err.message === "Incorrect Password") {
        errors.password = "That password is incorrect";
    }
    return errors;
}

const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, "swhasan secret", {
        expiresIn: maxAge
    });
};

// GET method (Fetches signup page)
const getSignUp = (req, res) => {
    res.send('Sign Up Page 📝');
};

// GET method (Fetches a specific user by ID)
const getLogIn = (req, res) => {
    res.send('Log In Page 🔐');
};

// POST method (Creates a new user)
const postSignUp = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const error = handleErrors(err);
        res.status(400).send({ error });
    }
    console.log(`Email : ${email} & Password : ${password}`);
};

// POST method (User login)
const postLogIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

const getLogout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
};

module.exports = {
    getSignUp,
    getLogIn,
    postSignUp,
    postLogIn,
    getLogout
};