// const express = require('express');
// const { register, login } = require('../Controllers/authController');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);

// module.exports = router;


// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../Controllers/authController');
const { getDashboardData } = require('../controllers/dashboardController');
const protect = require('../Middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected route for the dashboard
router.get('/dashboard', protect, getDashboardData);

module.exports = router;
