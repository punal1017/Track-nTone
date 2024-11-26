// const express = require('express');
// const { addFood, getCalories } = require('../Controllers/calorieController');
// const protect = require('../Middleware/authMiddleware');

// const router = express.Router();

// router.post('/', protect, addFood);
// router.get('/', protect, getCalories);

// module.exports = router;



const express = require('express');
const { addFood, getCalories } = require('../Controllers/calorieController');
const protect = require('../Middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addFood);  // Add food (protected route)
router.get('/', protect, getCalories);  // Get all calories (protected route)

module.exports = router;
