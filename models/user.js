const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//static method to login user
userSchema.static.login = async function (email, password) {
	const user = await this.findOne({ email: email });
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			return user;
		}
		throw Error("Incorrect Password");
	}
	throw Error("Incorrect Email");
};

const User = mongoose.model("user", userSchema);
module.exports = User;