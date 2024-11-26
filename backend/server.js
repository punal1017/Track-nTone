// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// // Set up the server
// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Handle socket connections
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Listen for messages from the client
//   socket.on('message', (message) => {
//     console.log('Message received:', message);
//     io.emit('message', message); // Broadcast the message to all clients
//   });

//   // Handle disconnect
//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db'); // Adjust path as necessary
const { register, login } = require('./Controllers/authController');
const protect = require('./Middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

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
