const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');
const calorieRoutes = require('./Routes/calorieRoutes');
const bmiRoutes = require('./Routes/bmiRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/calories', calorieRoutes);
app.use('/api/bmi', bmiRoutes);

module.exports = app;
