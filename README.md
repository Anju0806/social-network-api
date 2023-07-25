# Social Network API using MongoDB and Express.js
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## Description

This is the backend API for a social network web application, built using Express.js and MongoDB. The API allows users to share their thoughts, react to friends' thoughts, and manage their friend list. MongoDB is used as the database to handle large amounts of unstructured data efficiently. The Mongoose ODM is utilized to define and interact with the MongoDB data models.

## Table of Contents

- Installation
- Usage
- API Routes
- Walkthrough Video
- Screenshots
- License
- Contributing
- Questions



## Installation

To install the required dependencies, run the following command:

    npm install

## Usage

To start the server and sync the Mongoose models to the MongoDB database, run:

    node server.js

## API Routes

- The API provides the following routes:

- GET /api/users: Get all users and their details.

- GET /api/users/:userId: Get a specific user and their details.

- POST /api/users: Create a new user.

- PUT /api/users/:userId: Update an existing user.

- DELETE /api/users/:userId: Delete a user and their associated thoughts.

- GET /api/thoughts: Get all thoughts and their details.

- GET /api/thoughts/:thoughtId: Get a specific thought and its details.

- POST /api/thoughts: Create a new thought for a user.

- PUT /api/thoughts/:thoughtId: Update an existing thought.

- DELETE /api/thoughts/:thoughtId: Delete a thought.

- POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.

- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction from a thought.

- POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.

- DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

## Walkthrough Video

Link to the Walkthrough Video: https://drive.google.com/file/d/1h4IEGlC7XmEx1wLSPQRe74aocaxq-oKP/view

## Screenshots
<img width="1440" alt="get-one-user" src="https://github.com/Anju0806/social-network-api/assets/126565826/e17d85b1-f33b-4740-bd41-181e7f805932">
<img width="1440" alt="getall-users" src="https://github.com/Anju0806/social-network-api/assets/126565826/e546327b-ffb3-4417-a9b3-28f7e74aeb62">
<img width="1440" alt="delete-user-associated-thoughts" src="https://github.com/Anju0806/social-network-api/assets/126565826/a005efc8-9d0e-4852-ba1c-d32efbff3bf3">
<img width="1440" alt="addi n remove friends" src="https://github.com/Anju0806/social-network-api/assets/126565826/d538f57f-30fc-4e8c-8236-79dc27c04840">
<img width="1440" alt="create thought" src="https://github.com/Anju0806/social-network-api/assets/126565826/4abdb251-52bd-49ec-96f4-dd0ccb467f25">
<img width="1440" alt="get all thoughts" src="https://github.com/Anju0806/social-network-api/assets/126565826/041fddae-4d12-4f12-b5c2-3e5b262d7c3d">
<img width="1440" alt="create reaction" src="https://github.com/Anju0806/social-network-api/assets/126565826/97f682a1-7c89-4462-a215-ef7245b41db2">


## License

This project is licensed under the terms of the MIT license.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull request.

## Questions

If you have any questions or need further assistance, please feel free to reach out.

Email: anjualfino@gmail.com




