const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController.js");

// Define a route for GET request to '/signup' and call the getSignUp function from the authController
router.get("/api/v1/users/signup", authController.getSignUp); 

// Define a route for POST request to '/signup' and call the postSignUp function from the authController
router.post("/api/v1/users/signup", authController.postSignUp); 

// Define a route for GET request to '/login' and call the getLogIn function from the authController
router.get("/api/v1/users/login", authController.getLogIn); 

// Define a route for POST request to '/login' and call the postLogIn function from the authController
router.post("/api/v1/users/login", authController.postLogIn);

// Define a route for GET request to '/logout' and call the getLogout function from the authController
router.get("/api/v1/users/logout", authController.getLogout);

module.exports = router; // Export the router module
