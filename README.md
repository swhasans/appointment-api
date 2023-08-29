# Appointment - API

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Authentication & Authorization](#authentication--authorization)
4. [API Overview](#api-overview)
5. [Endpoints & Routes](#endpoints--routes)
6. [JSON Structure](#json-structure)
7. [Installation](#installation)
8. [Usage](#usage)
9. [Error Handling](#error-handling)
10. [Pending Tasks](#pending-tasks)
11. [License](#license)
12. [Acknowledgements](#acknowledgements)

## Introduction

Appointment - API is a backend REST API that enables users to book, update, retrieve, and delete appointments with doctors. Users need to be authenticated to access these features, ensuring that all appointment routes are secure.

## Technologies Used

    - JavaScript
    - Node.js (Runtime Environment)
    - Express (Node.js web application framework)
    - MongoDB (Database)
    - Mongoose (MongoDB Object Data Modeling library)
    - Docker*
    - Postman (API Platform for designing, building, testing, and iterating APIs)
    - JSON Web Token (authentication)
    - bcrypt (password hashing)
    - validator (email validation)

## Authentication & Authorization

Appointment - API uses JWT(JSON Web Tokens) for user authentication.Users need to be logged in to get a JWT token, which then allows them to access the appointment routes. If not logged in, users will need to sign up, after which a JWT token will be assigned to them.

Passwords stored in MongoDB are encrypted using the bcrypt library.A salt is generated and then passed, along with the original password, to produce a hashed version, ensuring the safety of user passwords.

Emails are validated during sign - up using the validator library, ensuring that users provide valid email addresses.

## API Overview

This API follows a RESTful approach, providing endpoints for the standard CRUD operations: create, read, update, and delete.The API is versioned with "/api/v1" as the prefix, and the resource being accessed is "appointments". By adhering to a well - defined URL structure, developers can easily interact with the API and build applications that consume it.

## Endpoints & Routes

### Appointment Endpoints

The following URL endpoints are available for the Appointment-API:

- **GET** <http://localhost:'PORT'/api/v1/appointments> - Retrieves a list of all appointments. (Requires JWT Authentication)
- **GET** <http://localhost:'PORT'/api/v1/appointments/:id> - Retrieves the details of a specific appointment. (Requires JWT Authentication)
- **POST** <http://localhost:'PORT'/api/v1/appointments> - Creates a new appointment. (Requires JWT Authentication)
- **PUT** <http://localhost:'PORT'/api/v1/appointments/:id> - Updates the details of a specific appointment. (Requires JWT Authentication)
- **DELETE** <http://localhost:'PORT'/api/v1/appointments/:id> - Deletes a specific appointment. (Requires JWT Authentication)

### User Authentication Routes

The AuthRoutes provide the following functionalities:

- **GET** <http://localhost:'PORT'/api/v1/users/signup> - Render the sign-up page.
- **GET** <http://localhost:'PORT'/api/v1/users/login> - Render the log-in page.
- **POST** <http://localhost:'PORT'/api/v1/users/signup> - Handle user sign-up and create a new user.
- **POST** <http://localhost:'PORT'/api/v1/users/login> - Handle user log-in.
- **GET** <http://localhost:'PORT'/api/v1/users/logout> - Handle user logout and invalidate the JWT token.

## JSON Structure

Each appointment record in the API follows the structure defined by the Mongoose schema:

```
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
```

Each user record in the API follows the structure defined by the Mongoose schema:

```
{
    email: String,
    password: String
}
```

## Installation

To use this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/appointment-api.git`
2. Install the dependencies: `npm install`
3. Set up the MongoDB database and configure the connection in the code.
4. Run the server: `npm start`

## Usage

Once the server is running, you can make HTTP requests to the defined endpoints using tools like Postman.The API allows you to manage appointments with doctors, including creating new appointments, updating existing ones, retrieving appointment details, and deleting appointments.

## Error Handling

The API is equipped with a `handleErrors` function that provides detailed error messages for specific error types, aiding in a smoother developer experience and efficient debugging.

## Pending Tasks

As the application continues to evolve, there are several tasks that are currently pending completion:

### Docker Integration

- [ ] **Dockerfile Creation**: Develop a Dockerfile to containerize the application.
- [ ] **Docker Image Building**: Build the Docker image from the created Dockerfile.
- [ ] **Local Docker Image Testing**: Ensure the Docker image runs correctly when executed locally.


## License

This project is licensed under the ISC license. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [How to Build a RESTful API in Node.js(with Express.js) by Kelly Arellano](https://rapidapi.com/blog/nodejs-express-rest-api-example/)
- [Node.js Crash Course Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
- [Node.js Auth Tutorial(JWT)](https://youtube.com/playlist?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp)

> **Note**
> : The features or components marked with an asterisk (*) are currently in development and will be available in future iterations of the API.
