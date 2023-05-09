const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const appointmentsFilePath = path.join(__dirname, "./appointments.json");

// GET method
const getAppointment = async (req, res, next) => {
  try {
    const data = fs.readFileSync(appointmentsFilePath);
    const appointments = JSON.parse(data);
    const appointment = appointments.find(
      (appointment) => appointment.id === Number(req.params.id)
    );
    if (!appointment) {
      const err = new Error("Appointment not found");
      err.status = 404;
      throw err;
    }
    res.json(appointment);
  } catch (e) {
    next(e);
  }
};

router.route("/api/v1/appointments/:id").get(getAppointment);

// POST method
const createAppointment = async (req, res, next) => {
  try {
    const data = fs.readFileSync(appointmentsFilePath);
    const appointments = JSON.parse(data);
    const newAppointment = {
      id: req.body.id,
      doctor_id: req.body.doctor_id,
      patient_id: req.body.patient_id,
      appointment_time: req.body.appointment_time,
      duration: req.body.duration,
      reason: req.body.reason,
      status: req.body.status,
    };
    appointments.push(newAppointment);
    fs.writeFileSync(appointmentsFilePath, JSON.stringify(appointments));
    res.status(201).json(newAppointment);
  } catch (e) {
    next(e);
  }
};

router.route("/api/v1/appointments").post(createAppointment);

// PUT method
const updateAppointment = async (req, res, next) => {
  try {
    const data = fs.readFileSync(appointmentsFilePath);
    const appointments = JSON.parse(data);
    const appointment = appointments.find(
      (appointment) => appointment.id === Number(req.params.id)
    );
    if (!appointment) {
      const err = new Error("Appointment not found");
      err.status = 404;
      throw err;
    }
    const updatedAppointmentData = {
      id: req.body.id,
      doctor_id: req.body.doctor_id,
      patient_id: req.body.patient_id,
      appointment_time: req.body.appointment_time,
      duration: req.body.duration,
      reason: req.body.reason,
      status: req.body.status,
    };
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === Number(req.params.id)) {
        return updatedAppointmentData;
      } else {
        return appointment;
      }
    });
    fs.writeFileSync(appointmentsFilePath, JSON.stringify(updatedAppointments));
    res.status(200).json(updatedAppointmentData);
  } catch (e) {
    next(e);
  }
};

router.route("/api/v1/appointments/:id").put(updateAppointment);

// DELETE method
const deleteAppointment = async (req, res, next) => {
  try {
    const data = fs.readFileSync(appointmentsFilePath);
    const appointments = JSON.parse(data);
    const appointment = appointments.find(
      (appointment) => appointment.id === Number(req.params.id)
    );
    if (!appointment) {
      const err = new Error("Appointment not found");
      err.status = 404;
      throw err;
    }
    const updatedAppointments = appointments
      .map((appointment) => {
        if (appointment.id === Number(req.params.id)) {
          return null;
        } else {
          return appointment;
        }
      })
      .filter((appointment) => appointment !== null);
    fs.writeFileSync(appointmentsFilePath, JSON.stringify(updatedAppointments));
    res.status(200).end();
    } catch (e) {
        next(e);
    }
};

router.route("/api/v1/stats/:id").delete(deleteAppointment);

module.exports = router;