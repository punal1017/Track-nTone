  // const express = require('express');
  // const cors = require('cors');
  // const dotenv = require('dotenv');
  // const connectDB = require('./Config/db'); // Ensure path matches your project structure
  // const { register, login } = require('./Controllers/authController');
  // const protect = require('./Middleware/authMiddleware');
  // const { getDashboardData } = require('./Controllers/dashboardController'); // Dashboard controller import
  // const mongoose = require('mongoose');
  // const User = require('./Models/User'); // Import the User model
  // const Message = require('./Models/Message'); // Import the Message model

  // dotenv.config(); // Load environment variables

  // // Initialize Express app
  // const app = express();

  // // Connect to MongoDB
  // mongoose.connect('mongodb://localhost:27017/Trackuser', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }).then(() => {
  //   console.log('MongoDB Connected!');
  // }).catch((err) => {
  //   console.error('MongoDB Connection Error:', err);
  // });

  // // Middleware
  // app.use(express.json()); // Parse incoming JSON requests
  // app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the React frontend

  // // Route to fetch all users
  // app.get('/api/users', async (req, res) => {
  //   try {
  //     const users = await User.find(); // Fetch all users from the database
  //     res.json(users);
  //   } catch (err) {
  //     res.status(500).json({ message: 'Error fetching users', error: err });
  //   }
  // });

  // // API endpoint to save messages to MongoDB
  // app.post('/api/messages', async (req, res) => {
  //   try {
  //     const newMessage = new Message(req.body); // Assuming the client sends { username, text }
  //     const savedMessage = await newMessage.save();
  //     res.status(201).json(savedMessage);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Error saving message to database' });
  //   }
  // });

  // // Routes for user registration and login
  // app.post('/api/register', register); // User registration route
  // app.post('/api/login', login); // User login route

  // // Protected route - Accessible only to authenticated users
  // app.get('/api/protected', protect, (req, res) => {
  //   res.status(200).json({ message: "This is a protected route" });
  // });

  // // Dashboard route - Accessible only by authenticated users
  // app.get('/api/dashboard', protect, getDashboardData);

  // // Logout route - Clears the token from the client-side (handled by frontend)
  // app.post('/api/logout', (req, res) => {
  //   res.status(200).json({ message: 'Logout successful, please clear the token on the client side.' });
  // });

  // // Global error handler (Optional)
  // app.use((err, req, res, next) => {
  //   console.error(err.stack);
  //   res.status(500).json({ error: 'Something went wrong!' });
  // });

  // // Start the server
  // const PORT = process.env.PORT || 5000;
  // app.listen(PORT, () => {
  //   console.log(`Server running on http://localhost:${PORT}`);
  // });
  const express = require('express');
  const cors = require('cors');
  const dotenv = require('dotenv');
  const mongoose = require('mongoose');
  const axios = require('axios'); // For sending requests to Google Analytics
  const connectDB = require('./Config/db'); // Ensure path matches your project structure
  const { register, login } = require('./Controllers/authController');
  const protect = require('./Middleware/authMiddleware');
  const { getDashboardData } = require('./Controllers/dashboardController');
  const User = require('./Models/User'); // Import the User model
  const Message = require('./Models/Message'); // Import the Message model
  
  dotenv.config(); // Load environment variables
  
  // Initialize Express app
  const app = express();
  
  // Google Analytics Measurement Protocol configuration
  const GA_TRACKING_ID = process.env.GA_TRACKING_ID || 'G-XXXXXXXXXX'; // Replace with your Measurement ID
  
  // Function to send events to Google Analytics
  const sendAnalyticsEvent = async (eventName, clientInfo) => {
    try {
      await axios.post('https://www.google-analytics.com/mp/collect', {
        client_id: clientInfo || 'backend-client', // Unique client ID, replace with actual user/client info if available
        events: [
          {
            name: eventName, // Name of the event
            params: {
              timestamp: Date.now(), // Optional: Add event-specific parameters
            },
          },
        ],
      }, {
        params: {
          api_secret: process.env.GA_API_SECRET, // Secret key from GA setup
          measurement_id: GA_TRACKING_ID,
        },
      });
    } catch (error) {
      console.error('Error sending event to Google Analytics:', error.message);
    }
  };
  
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost:27017/Trackuser', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB Connected!');
  }).catch((err) => {
    console.error('MongoDB Connection Error:', err);
  });
  
  // Middleware
  app.use(express.json()); // Parse incoming JSON requests
  app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the React frontend
  
  // Route to fetch all users
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from the database
      sendAnalyticsEvent('fetch_users', req.ip); // Send analytics event
      res.json(users);
    } catch (err) {
      sendAnalyticsEvent('fetch_users_error', req.ip); // Send error analytics event
      res.status(500).json({ message: 'Error fetching users', error: err });
    }
  });
  
  // API endpoint to save messages to MongoDB
  app.post('/api/messages', async (req, res) => {
    try {
      const newMessage = new Message(req.body); // Assuming the client sends { username, text }
      const savedMessage = await newMessage.save();
      sendAnalyticsEvent('message_sent', req.ip); // Track message sent
      res.status(201).json(savedMessage);
    } catch (error) {
      sendAnalyticsEvent('message_error', req.ip); // Track message error
      res.status(500).json({ error: 'Error saving message to database' });
    }
  });
  
  // Routes for user registration and login
  app.post('/api/register', async (req, res) => {
    sendAnalyticsEvent('user_registration_attempt', req.ip); // Track registration attempts
    await register(req, res);
  });
  app.post('/api/login', async (req, res) => {
    sendAnalyticsEvent('user_login_attempt', req.ip); // Track login attempts
    await login(req, res);
  });
  
  // Protected route - Accessible only to authenticated users
  app.get('/api/protected', protect, (req, res) => {
    sendAnalyticsEvent('access_protected', req.ip); // Track access to protected route
    res.status(200).json({ message: "This is a protected route" });
  });
  
  // Dashboard route - Accessible only by authenticated users
  app.get('/api/dashboard', protect, (req, res) => {
    sendAnalyticsEvent('dashboard_access', req.ip); // Track dashboard access
    getDashboardData(req, res);
  });
  
  // Logout route - Clears the token from the client-side (handled by frontend)
  app.post('/api/logout', (req, res) => {
    sendAnalyticsEvent('user_logout', req.ip); // Track logout event
    res.status(200).json({ message: 'Logout successful, please clear the token on the client side.' });
  });
  
  // Global error handler (Optional)
  app.use((err, req, res, next) => {
    console.error(err.stack);
    sendAnalyticsEvent('server_error', req.ip); // Track server errors
    res.status(500).json({ error: 'Something went wrong!' });
  });
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  