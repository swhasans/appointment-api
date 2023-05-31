const mongoose = require("mongoose"); // Import the Mongoose module
const Schema = mongoose.Schema; // Create a Schema object from Mongoose

// Define the blog schema
const appointmentSchema = new Schema({
    id: {
        type: Number,
        required: true // The title field is required
    },
    doctor_id: {
        type: Number,
        required: true // The snippet field is required
    },
    patient_id: {
        type: Number,
        required: true // The body field is required
    },
    appointment_time: {
        type: Date,
        required: true // The body field is required
    },
    duration: {
        type: Number,
        required: true // The body field is required
    },
    reason: {
        type: String,
        required: true // The body field is required
    },
    status: {
        type: String,
        required: true // The body field is required
    }
}, { timestamps: true }); // Enable timestamps for createdAt and updatedAt fields

const appointment = mongoose.model("appointment", appointmentSchema); // Create a Blog model from the schema
module.exports = appointment; // Export the Blog model for use in other files
