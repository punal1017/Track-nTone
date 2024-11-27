const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db'); // Adjust path as necessary
const { register, login } = require('./Controllers/authController');
const protect = require('./Middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }))
// Routes
app.post('/api/register', register);
app.post('/api/login', login);
app.get('/api/protected', protect, (req, res) => {
    res.status(200).json({"message": "This is a protected route"});
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
