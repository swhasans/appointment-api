const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [(val) => {}, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [6, "Minimum password length is six characters"],
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;