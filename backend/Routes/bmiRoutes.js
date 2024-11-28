// routes/bmiRoutes.js
// const express = require('express');
// const { calculateBMI, getBMI } = require('../Controllers/bmiController');
// // const protect = require('../Middleware/authMiddleware');

// const router = express.Router();

// router.post('/', calculateBMI);  // POST route to calculate BMI
// router.get('/', getBMI);  // GET route to check API status

// module.exports = router;



// routes/bmiRoutes.js
const express = require('express');
const { calculateBMI, getBMI } = require('../Controllers/bmiController');

const router = express.Router();

router.post('/calculate', calculateBMI);
router.get('/', getBMI);

module.exports = router;
