const express = require("express"); // Import the Express module 
const morgan = require("morgan"); // Import the Morgan module for logging HTTP requests
const appointmentRoutes = require("./routes/appointmentRoutes.js"); // Import the appointmentRoutes module
const bodyParser = require('body-parser'); // Import the bodyParser module for parsing JSON request bodies
const mongoose = require("mongoose"); // Import the Mongoose module for MongoDB connection

// Express app
const app = express(); // Create an Express application
const port = 3000; // Specify the port number for the server

// Connect to MongoDB
const dbURI = "mongodb+srv://<username>:<password>@nodeexpressapp.bl1lxtc.mongodb.net/<database_name>?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // Connect to MongoDB using the provided URI and options
    .then((results) => {
        // Start the server and listen for requests on the specified port
        app.listen(port, "localhost", () => {
            console.log(`Listening for requests on port: ${port}`);
        });
    })
    .catch((err) => console.log(err))

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(morgan("dev")); // Log HTTP requests in the console using Morgan
app.use(bodyParser.json()); // Parse JSON request bodies

app.use('/', appointmentRoutes); // Use appointmentRoutes for handling routes starting with '/'

// Render the "404" view for any unmatched routes (404 Not Found)
app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});

// Render the "500" view for internal server errors (500 Internal Server Error)
app.use((req, res) => {
  res.status(500).render("500", { title: "Internal Server Error" });
});
