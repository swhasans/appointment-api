const jwt = require("jsonwebtoken");

/**
 * Middleware to check if the user is authenticated.
 * If a valid JWT token is found in cookies, the user is considered authenticated.
 * Otherwise, the user is redirected with a friendly message.
 */
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // Check if the JWT token exists
    if (token) {
        // Verify the provided token
        jwt.verify(token, "swhasan secret", (err, decodedToken) => {
            if (err) {
                // If token verification fails, log the error and redirect the user to the login page.
                console.log(`Token verification failed: ${err.message}`);
                res.send('You need to be logged in to access this. Please log in.');
            } else {
                // If token verification is successful, log the decoded token (optional) and proceed.
                console.log(`Decoded token: ${decodedToken}`);
                next();
            }
        });
    } else {
        // If no token is provided, redirect the user to the login page.
        res.send('No authentication token found. Please log in to continue.');
    }
};

module.exports = { requireAuth };