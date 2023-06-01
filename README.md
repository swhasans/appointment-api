# Appointment-API

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [API Overview](#api-overview)
4. [Endpoints](#endpoints)
5. [JSON Structure](#json-structure)
6. [Installation](#installation)
7. [Usage](#usage)
8. [License](#license)
9. [Acknowledgements](#acknowledgements)

## Introduction
Appointment-API is a backend REST API that enables users to book, update, retrieve, and delete appointments with doctors. With Appointment-API, users can easily schedule and manage their appointments with doctors in a convenient and efficient manner.

## Technologies Used
- JavaScript
- Node.js (Runtime Environment)
- Express (Node.js web application framework)
- MongoDB (Database)
- Mongoose (MongoDB Object Data Modeling library)
- Docker
- Postman (API Platform for designing, building, testing, and iterating APIs)

## API Overview
This API follows a RESTful approach, providing endpoints for the standard CRUD operations: create, read, update, and delete. The API is versioned with "/api/v1" as the prefix, and the resource being accessed is "appointments". By adhering to a well-defined URL structure, developers can easily interact with the API and build applications that consume it.

## Endpoints
The following URL endpoints are available for the Appointment-API:

- GET http://localhost:'PORT'/api/v1/appointments - Retrieves a list of all appointments.
- GET http://localhost:'PORT'/api/v1/appointments/:id - Retrieves the details of a specific appointment.
- POST http://localhost:'PORT'/api/v1/appointments - Creates a new appointment.
- PUT http://localhost:'PORT'/api/v1/appointments/:id - Updates the details of a specific appointment.
- DELETE http://localhost:'PORT'/api/v1/appointments/:id - Deletes a specific appointment.

## JSON Structure
Each appointment record in the API follows the structure defined by the Mongoose schema:
`
{
    appointment_sl_id: Number,
    doctor_id: Number,
    patient_id: Number,
    duration: Number,
    reason: String,
    status: String,
    createdAt: Date,
    updatedAt: Date
}
`
## Installation
To use this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/appointment-api.git`
2. Install the dependencies: `npm install`
3. Set up the MongoDB database and configure the connection in the code.
4. Run the server: `nodemon index.js`

## Usage
Once the server is running, you can make HTTP requests to the defined endpoints using tools like Postman. The API allows you to manage appointments with doctors, including creating new appointments, updating existing ones, retrieving appointment details, and deleting appointments.

## License
This project is licensed under the ISC license. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements
- [How to Build a RESTful API in Node.js (with Express.js) by Kelly Arellano](https://rapidapi.com/blog/nodejs-express-rest-api-example/)