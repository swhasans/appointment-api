const express = require("express"); // Import the Express module 
const morgan = require("morgan"); // Import the Morgan module for logging HTTP requests
const appointmentRoutes = require("./routes/appointmentRoutes.js"); // Import the appointmentRoutes module
const mongoose = require("mongoose"); // Import the Mongoose module for MongoDB connection
const authRoutes = require("./routes/authRoutes"); // Import the authentication routes
const cookieParser = require("cookie-parser");

// MongoDB Credentials
require("dotenv").config();
const DB_USERNAME = process.env.DB_USERNAME; // MongoDB username
const DB_USERPASS = process.env.DB_USERPASS; // MongoDB password
const DB_NAME = process.env.DB_NAME; // MongoDB database name
const DB_CLUSTERS = process.env.DB_CLUSTERS; //MongoDB cluster name

// Express app
const app = express(); // Create an Express application
const port = 3000; // Specify the port number for the server

// Connect to MongoDB
const dbURI = `mongodb+srv://${DB_USERNAME}:${DB_USERPASS}@${DB_CLUSTERS}.ghra5em.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // Connect to MongoDB using the provided URI and options
  .then((results) => {
    // Start the server and listen for requests on the specified port
    app.listen(port, "localhost", () => {
      console.log(`Connected to DB: '${DB_NAME}' | Listening for requests on port: '${port}'`);
    });
  })
  .catch((err) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(morgan("dev")); // Log HTTP requests in the console using Morgan
app.use(express.json()); // Parse JSON request bodies

app.use('/', appointmentRoutes); // Use appointmentRoutes for handling routes starting with '/'
app.use(authRoutes); // Use the authentication routes

//Cookies
app.get("/set-cookies", (req, res) => {
  res.cookie("newUser", false);
  res.cookie("isEmployee", true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.send("You got the cookie!");
});

app.get("/read-cookies", (req, res) => {

});

// Render the "404" view for any unmatched routes (404 Not Found)
app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});

// Render the "500" view for internal server errors (500 Internal Server Error)
app.use((req, res) => {
  res.status(500).render("500", { title: "Internal Server Error" });
});
