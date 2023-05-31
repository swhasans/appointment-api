const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointmentControllers.js");

// GET method to fetch all appointments
router.get("/api/v1/appointments", appointmentController.getAllAppointment);

// GET method to fetch a specific appointment by ID
router.get("/api/v1/appointments/:id", appointmentController.getAppointment);

// POST method to create a new appointment
router.post("/api/v1/appointments", appointmentController.createAppointment);

// PUT method to update an existing appointment by ID
router.put("/api/v1/appointments/:id", appointmentController.updateAppointment);

// DELETE method to delete an appointment by ID
router.delete("/api/v1/appointments/:id", appointmentController.deleteAppointment);

module.exports = router;
