const mongoose = require("mongoose");
const {isEmail} = require("validator");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [6, "Minimum password length is six characters"],
    }
});

//fire a function after doc saved to db
userSchema.post("save", function (doc, next){
    console.log("The new user was created and saved", doc);
    next();
});

//fire a function before doc saved to db
userSchema.pre("save", function(next){
    console.log("The user about to be created and save", this);
    next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;