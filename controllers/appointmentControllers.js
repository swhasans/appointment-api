const fs = require("fs");
const Appointment = require("../models/appointment.js");
const appointmentsFilePath = "./routes/appointments.json";

// GET method (Fetches all appointments)
const getAllAppointment = (req, res) => {
    Appointment.find().sort({ appointment_sl_id: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

// GET method (Fetches a specific appointment by ID)
const getAppointment = (req, res) => {
    const appointment_sl_id = req.params.id;
    Appointment.findOne({ appointment_sl_id: appointment_sl_id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

// POST method (Creates a new appointment)
const createAppointment = (req, res) => {
    const appointment = new Appointment({
        doctor_id: req.body.doctor_id,
        patient_id: req.body.patient_id,
        duration: req.body.duration,
        reason: req.body.reason,
        status: req.body.status,
        appointment_sl_id: req.body.appointment_sl_id
    });

    appointment.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

// PUT method (Updates an existing appointment by ID)
const updateAppointment = (req, res) => {
    const appointment_sl_id = req.params.id;

    const updatedAppointmentData = {
        doctor_id: req.body.doctor_id,
        patient_id: req.body.patient_id,
        duration: req.body.duration,
        reason: req.body.reason,
        status: req.body.status,
        appointment_sl_id: req.body.appointment_sl_id
    };

    Appointment.findOneAndUpdate({ appointment_sl_id: appointment_sl_id }, updatedAppointmentData, { new: true })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

// DELETE method (Deletes an appointment by ID)
const deleteAppointment = (req, res) => {
    const appointment_sl_id = req.params.id;
    Appointment.findOneAndDelete({ appointment_sl_id: appointment_sl_id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    getAllAppointment,
    getAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment
};