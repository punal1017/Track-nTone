// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const foodRoutes = require('./routes/calorieRoutes');
// const bmiRoutes = require('./routes/bmiRoutes');
// const authRoutes = require('./routes/authRoutes');

// dotenv.config();

// // Initialize Express
// const app = express();

// // Connect to DB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/food', foodRoutes);
// app.use('/api/bmi', bmiRoutes);
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const app = require('./app');

// dotenv.config();

// connectDB();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const bmiRoutes = require('./Routes/bmiRoutes');

const app = express();

app.use(bodyParser.json());  // Middleware to parse incoming JSON data
app.use('/api/bmi', bmiRoutes);  // Use the BMI routes for API requests

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
