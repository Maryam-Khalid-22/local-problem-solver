// backend/middleware/security.js

const rateLimit = require('express-rate-limit');

// Rate limiting for login - only 5 tries every 15 minutes
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login requests per windowMs
  message: {
    message: 'Too many login attempts from this IP, please try again after 15 minutes'
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json(options.message);
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// General rate limiting - 100 requests every 15 minutes
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    message: 'Too many requests from this IP, please try again later'
  }
});

// SQL injection prevention - stops bad code attacks
const sqlInjectionPrevention = (req, res, next) => {
  const badWords = ['SELECT', 'INSERT', 'DELETE', 'UPDATE', 'DROP', 'UNION', 'OR', '1=1'];
  const bodyString = JSON.stringify(req.body).toUpperCase();
  
  for (const word of badWords) {
    if (bodyString.includes(word)) {
      return res.status(400).json({
        message: 'Invalid input detected'
      });
    }
  }
  next();
};

// Device fingerprinting - remembers which device is using which account
const deviceAuth = (req, res, next) => {
  req.deviceFingerprint = req.ip + req.headers['user-agent'];
  next();
};

// Single device per account - only one device can login at a time
const singleDeviceAuth = async (req, res, next) => {
  // This will be connected to your database later
  next();
};

module.exports = {
  loginLimiter,
  generalLimiter,
  sqlInjectionPrevention,
  deviceAuth,
  singleDeviceAuth
};