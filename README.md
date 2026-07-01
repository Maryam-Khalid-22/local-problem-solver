```
# Local Problem Solver

A community-driven platform for reporting and tracking local issues in real-time.

---

## 📌 Project Overview

This is a full-stack web application that allows citizens to report local problems (like potholes, broken streetlights, garbage accumulation) and allows officials to track and resolve them. The platform uses real-time notifications to keep users updated.

---

## ✨ Features

- User registration and login with secure JWT authentication
- Report problems with title, description, location, and category
- Upvote and downvote on reported issues
- Real-time notifications using Socket.io
- Role-based access control (Citizen, Official, Admin)
- Interactive dashboard with live status updates
- Responsive design for mobile and desktop

---

## 🛠️ Tech Stack

### Frontend (User Interface)
- JavaScript (React.js)
- HTML5
- CSS3

### Backend (Server & Logic)
- JavaScript (Node.js)
- Express.js

### Database
- MongoDB (NoSQL database)

### Real-Time Communication
- JavaScript (Socket.io)

### Authentication
- JWT (JSON Web Tokens)

### Version Control
- Git & GitHub

---

## 📂 Project Structure

```

local-problem-solver/
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
└── README.md

```

---

## 🚀 Installation Guide

### Prerequisites
- Node.js installed on your computer
- MongoDB installed (or MongoDB Atlas account)

### Step 1: Clone the Repository
```

git clone https://github.com/Maryam-Khalid-22/local-problem-solver.git
cd local-problem-solver

```

### Step 2: Backend Setup
```

cd backend
npm install
npm start

```
Server runs on: http://localhost:5000

### Step 3: Frontend Setup
```

cd frontend
npm install
npm start

```
App runs on: http://localhost:3000

### Step 4: Environment Variables

Create a `.env` file in the `backend` folder with these variables:

```

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

```

**⚠️ Never share your `.env` file publicly!**

---

## 👤 User Roles

| Role | Permissions |
|------|-------------|
| **Citizen** | Report problems, vote, comment |
| **Official** | Update problem status, assign tasks |
| **Admin** | Manage users, all official permissions |

---

## 👩‍💻 Author

**Maryam Khalid**
- GitHub: https://github.com/Maryam-Khalid-22

---

## 📄 License

**All Rights Reserved** – This project is for educational and portfolio purposes only.
No part of this code may be copied, modified, or used without permission.
