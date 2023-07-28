const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    
    //if jwt exists and is verified
    if(token){
        
    }
	next();
};