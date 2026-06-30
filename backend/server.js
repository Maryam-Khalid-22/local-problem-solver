// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import security middleware
const {
  loginLimiter,
  generalLimiter,
  sqlInjectionPrevention,
  deviceAuth
} = require('./middleware/security');

const app = express();
const PORT = process.env.PORT || 5000;

// Basic security middleware
app.use(generalLimiter);
app.use(deviceAuth);
app.use(sqlInjectionPrevention);

// Other middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/localproblemsolver', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Apply login rate limiting to auth routes
app.use('/api/auth/login', loginLimiter);
app.use('/api/auth/register', loginLimiter);

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/problems', require('./routes/problems'));
app.use('/api/comments', require('./routes/comments'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Local Problem Solver API is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});