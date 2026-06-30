// backend/routes/auth.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user database
let users = [];
let loginAttempts = {}; // Track login attempts
let activeSessions = {}; // Track active sessions

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create user
    const user = {
      id: Date.now().toString(),
      username,
      email,
      password: hashedPassword
    };
    
    users.push(user);
    
    // Create token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
    
    res.status(201).json({
      token,
      user: { id: user.id, username: user.username, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const deviceFingerprint = req.deviceFingerprint;
    
    // Check login attempts
    if (loginAttempts[deviceFingerprint] >= 5) {
      return res.status(429).json({ 
        message: 'Too many login attempts. Please try again later.' 
      });
    }
    
    // Find user
    const user = users.find(user => user.email === email);
    if (!user) {
      loginAttempts[deviceFingerprint] = (loginAttempts[deviceFingerprint] || 0) + 1;
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      loginAttempts[deviceFingerprint] = (loginAttempts[deviceFingerprint] || 0) + 1;
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Reset login attempts
    loginAttempts[deviceFingerprint] = 0;
    
    // Create token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
    
    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email },
      message: 'Login successful'
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Simple logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

module.exports = router;