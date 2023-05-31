const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointmentControllers.js");

//GET method (ALL!)
router.get("/api/v1/appointments", appointmentController.getAllAppointment);

// GET method
router.get("/api/v1/appointments/:id", appointmentController.getAppointment);

// POST method
router.post("/api/v1/appointments", appointmentController.createAppointment);

// PUT method
router.put("/api/v1/appointments/:id", appointmentController.updateAppointment);

// DELETE method
router.delete(appointmentController.deleteAppointment);

module.exports = router;