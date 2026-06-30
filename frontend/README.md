# Local Problem Solver

A community-driven platform for reporting and tracking local issues in real-time.

## Project Status
✅ Completed - Full Stack Web Application

## Features

- User registration and login with JWT authentication
- Report problems with location and description
- Vote on issues (upvote/downvote)
- Real-time notifications using Socket.io
- Role-based access (Citizen/Official/Admin)
- Interactive dashboard with live updates
- Responsive design for all devices

## Tech Stack

- Frontend: JavaScript (React.js), CSS3, HTML5
- Backend: JavaScript (Node.js, Express.js)
- Database: MongoDB
- Real-time: JavaScript (Socket.io)
- Authentication: JWT (JSON Web Tokens)
- Version Control: Git & GitHub

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed or MongoDB Atlas account

### Backend Setup
cd backend
npm install
npm start

```
Server runs on: http://localhost:5000

### Frontend Setup
```

cd frontend
npm install
npm start

```
App runs on: http://localhost:3000

## Environment Variables

Create a `.env` file in the backend folder:
```

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

```

## Author

**Maryam Khalid**
- GitHub: https://github.com/Maryam-Khalid-22

## License
All Rights Reserved - This project is for demonstration purposes only.