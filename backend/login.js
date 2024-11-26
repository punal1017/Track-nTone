const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a secure key

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user database (replace with a real database)
const users = [
  {
    email: 'user@example.com',
    password: bcrypt.hashSync('password123', 10), // Hashed password
  },
];

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide email and password.' });
  }

  // Check if user exists
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }

  // Generate a JWT token
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

  return res.status(200).json({ success: true, token });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
