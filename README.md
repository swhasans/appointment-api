# Appointment-API

## Introduction
Backend REST API for booking appointments with doctors. Built with JavaScript, Node.js, and MySQL

## Planning the API

###  URL endpoints for a Backend REST API for booking appointments with doctors:

GET https://www.ourapi.com/api/v1/appointments – This will retrieve a list of all appointments.

GET https://www.ourapi.com/api/v1/appointments/101 – This will retrieve the details of appointment 101.

POST https://www.ourapi.com/api/v1/appointments – This will create a new appointment.

PUT https://www.ourapi.com/api/v1/appointments/101 – This will update the details of appointment 101.

DELETE https://www.ourapi.com/api/v1/appointments/101 – This will delete appointment 101.

- In this example, we're using a RESTful API approach with endpoints that correspond to the standard CRUD operations (create, read, update, and delete). 
- We're using the "/api/v1" prefix to denote that this is the first version of the API, and we're specifying the resource being accessed (appointments). 
- By using a consistent and well-defined URL structure, we can make it easy for developers to interact with the API and build applications that consume it.

- A router and endpoints defined for a backend REST API used to manage the booking of appointments with doctors. 
- Each record will contain the following details:

1. an ID of the appointment
2. date and time of appointment
3. patient ID
4. doctor ID
5. appointment type (e.g., physical examination, follow-up, consultation)
