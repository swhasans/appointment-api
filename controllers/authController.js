const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

/**
 * Handle various errors that can occur during user authentication.
 * @param {Error} err - Error object
 * @returns {Object} errors - Detailed error messages for specific error types.
 */
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password: "" };

    // Handle duplicate email errors
    if (err.code === 11000) {
        errors.email = "That email is already registered";
        return errors;
    }

    // Handle validation errors
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    // Handle incorrect email errors
    if (err.message === "Incorrect Email") {
        errors.email = "That email is not registered";
    }

    // Handle incorrect password errors
    if (err.message === "Incorrect Password") {
        errors.password = "That password is incorrect";
    }

    return errors;
}

/**
 * Token expiration time.
 */
const maxAge = 1 * 24 * 60 * 60;

/**
 * Create JWT token for user authentication.
 * @param {String} id - User ID
 * @returns {String} - JWT token
 */
const createToken = (id) => {
    return jwt.sign({ id }, "swhasan secret", {
        expiresIn: maxAge
    });
};

/**
 * Render the sign-up page.
 */
const getSignUp = (req, res) => {
    res.send('Sign Up Page 📝');
};

/**
 * Render the log-in page.
 */
const getLogIn = (req, res) => {
    res.send('Log In Page 🔐');
};

/**
 * Handle user sign-up, create a new user.
 */
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

/**
 * Handle user log-in.
 */
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

/**
 * Handle user logout.
 * Invalidate the JWT token by setting its maxAge to a negligible value.
 */
const getLogout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.send("Successfully logged out. Redirecting to the login page 🍪❌");
};

module.exports = {
    getSignUp,
    getLogIn,
    postSignUp,
    postLogIn,
    getLogout
};
