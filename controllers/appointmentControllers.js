const fs = require("fs");
const Appointment = require("../models/appointment.js");
const appointmentsFilePath = "./routes/appointments.json";

//GET method (ALL!)
const getAllAppointment = (req, res, next) => {
    Appointment.find().sort({ createdAt: -1 })
               .then((result) => {
                    res.send(result);
               })
               .catch((err) =>{
                    console.log(err);
               }); 
};

// GET method
const getAppointment = (req, res, next) => {
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

// POST method
const createAppointment = (req, res, next) => {
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
        const updatedAppointmentsJSON = JSON.stringify(appointments);
        fs.writeFileSync(appointmentsFilePath, updatedAppointmentsJSON, "utf-8");
        res.status(201).json(newAppointment);
    } catch (e) {
        next(e);
    }
};


// PUT method
const updateAppointment = (req, res, next) => {
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

// DELETE method
const deleteAppointment = (req, res, next) => {
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

module.exports = {
    getAllAppointment, // Fetches all appointments
    getAppointment, // Fetches a specific appointment by ID
    createAppointment, // Creates a new appointment
    updateAppointment, // Updates an existing appointment by ID
    deleteAppointment // Deletes an appointment by ID
};
