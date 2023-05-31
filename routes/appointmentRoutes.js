const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointmentControllers.js");

//GET method (ALL!)
router.route("/api/v1/appointments").get(appointmentController.getAllAppointment);

// GET method
router.route("/api/v1/appointments/:id").get(appointmentController.getAppointment);

// POST method
router.route("/api/v1/appointments").post(appointmentController.createAppointment);

// PUT method
router.route("/api/v1/appointments/:id").put(appointmentController.updateAppointment);

// DELETE method
router.route("/api/v1/appointments/:id").delete(appointmentController.deleteAppointment);

module.exports = router;