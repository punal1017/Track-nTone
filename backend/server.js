<<<<<<< HEAD
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Set up the server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for messages from the client
  socket.on('message', (message) => {
    console.log('Message received:', message);
    io.emit('message', message); // Broadcast the message to all clients
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
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
>>>>>>> 273a1fc12072b954ceed9a5e39d16c591897a599
});
