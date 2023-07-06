const User = require("../models/user.js");

// GET method (Fetches signup page)
const getSignUp = (req, res) => {
    res.send('signup.ejs: This Is New User Sign Up Page');
};

// GET method (Fetches a specific user by ID)
const getLogIn = (req, res) => {
    res.send('login.ejs: This Is User Log In Page');
};

// POST method (Creates a new user)
const postSignUp = async(req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.create({email, password});
        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(400).send('Sorry, could not register user.');
    }
    console.log(`Email : ${email} & Password : ${password}`);
    res.send(`New Employee SignUp -> Email : ${email} & Password : ${password}`); // Send a response for successful user signup
};

// POST method (User login)
const postLogIn = (req, res) => {
    const {email, password} = req.body;
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