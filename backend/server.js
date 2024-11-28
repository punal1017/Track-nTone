// // const express = require('express');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const connectDB = require('./Config/db'); // Adjust path as necessary
// // const { register, login } = require('./Controllers/authController');
// // const protect = require('./Middleware/authMiddleware');

// // dotenv.config();
// // connectDB();

// // const app = express();

// // // Middleware
// // app.use(express.json());
// // app.use(cors({ origin: 'http://localhost:3000' }))
// // // Routes
// // app.post('/api/register', register);
// // app.post('/api/login', login);
// // app.get('/api/protected', protect, (req, res) => {
// //     res.status(200).json({"message": "This is a protected route"});
// // });

// // // Starting the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./Config/db'); // Adjust path if needed
// const { register, login } = require('./Controllers/authController'); // Ensure correct import
// const protect = require('./Middleware/authMiddleware');

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({ origin: 'http://localhost:3000' }));

// // Routes
// app.post('/api/register', register);  // User registration route
// app.post('/api/login', login);        // User login route
// app.get('/api/protected', protect, (req, res) => { // Protected route for authorized users
//     res.status(200).json({ "message": "This is a protected route" });
// });


// // Optional: Logout Route (Clears the client-side token)
// app.post('/api/logout', (req, res) => {
//     // Clear the token in the client-side (handled by frontend)
//     res.json({ message: 'Logout successful, token cleared' });
// });

// // Starting the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db'); // Adjust path as necessary
const { register, login } = require('./Controllers/authController');
const protect = require('./Middleware/authMiddleware');
const { getDashboardData } = require('./Controllers/dashboardController'); // Import dashboard controller

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Routes
app.post('/api/register', register);  // User registration route
app.post('/api/login', login);        // User login route
app.get('/api/protected', protect, (req, res) => { // Protected route for authorized users
    res.status(200).json({ "message": "This is a protected route" });
});

// Dashboard route - only accessible by authenticated users
app.get('/api/dashboard', protect, getDashboardData); // Added dashboard route

// Optional: Logout Route (Clears the client-side token)
app.post('/api/logout', (req, res) => {
    // Clear the token in the client-side (handled by frontend)
    res.json({ message: 'Logout successful, token cleared' });
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
