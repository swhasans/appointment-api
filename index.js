const express = require("express"); // Import the Express module 
const morgan = require("morgan"); // Import the Morgan module for logging HTTP requests
const appointmentRoutes = require("./routes/appointmentRoutes.js"); // Import the blogRoutes module

// Express app
const app = express(); // Create an Express application
const port = 3000; // Specify the port number for the server

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(morgan("dev")); // Log HTTP requests in the console using Morgan

app.listen(port, "localhost", () => {
  console.log(`Listening for requests on port: ${port}`);
});

app.use('/', appointmentRoutes);

app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});