const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// BMI Calculation Endpoint
app.post('/api/calculate-bmi', (req, res) => {
  const { height, weight } = req.body;

  // Basic validation
  if (!height || !weight || isNaN(height) || isNaN(weight)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  // Calculate BMI
  const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);

  // Determine BMI category
  let category = '';
  if (bmiValue < 18.5) {
    category = 'Underweight';
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    category = 'Normal weight';
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // Send response back to frontend
  res.json({ bmi: bmiValue, category });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
