// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './components/Home';
// // import BMICalculator from './components/BMICalculator';
// // import CalorieCounter from './components/CalorieCounter';
// // import RandomWorkout from './components/RandomWorkout';
// // import Auth from './components/Auth';
// // import Login from './components/Login';
// // import ChatBox from './components/Chatbox'; // Importing Chatbox with consistent casing
// // import './App.css';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/bmi" element={<BMICalculator />} />
// //           <Route path="/calories" element={<CalorieCounter />} />
// //           <Route path="/workout" element={<RandomWorkout />} />
// //           <Route path="/auth" element={<Auth />} />
// //           <Route path="/login" element={<Login />} /> {/* Route for Login */}
// //           <Route path="/chatbox" element={<ChatBox />} /> {/* Updated to match import */}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import BMICalculator from './components/BMICalculator';
// import CalorieCounter from './components/CalorieCounter';
// import RandomWorkout from './components/RandomWorkout';
// import Auth from './components/Auth';
// import Login from './components/Login';
// import Register from './components/Register'; // Import Register
// import ChatBox from './components/Chatbox'; // Ensure this import is correct
// import './App.css';
// import Dashboard from './components/Dashboard'
// document.title = "TRACK N TONE";
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/bmi" element={<BMICalculator />} />
//           <Route path="/calories" element={<CalorieCounter />} />
//           <Route path="/workout" element={<RandomWorkout />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/login" element={<Login />} /> {/* Route for Login */}
//           <Route path="/register" element={<Register />} /> {/* Route for Register */}
//           <Route path="/chatbox" element={<ChatBox />} />
//           <Route path="/dashboard" element={<Dashboard />} />
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BMICalculator from './components/BMICalculator';
import CalorieCounter from './components/CalorieCounter';
import RandomWorkout from './components/RandomWorkout';
import Auth from './components/Auth';
import Login from './components/Login';
import Register from './components/Register';
import ChatBox from './components/Chatbox';
import Dashboard from './components/Dashboard';
import './App.css';

document.title = "TRACK N TONE";

// Helper function to check if a user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Check if a token exists in localStorage
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/calories" element={<CalorieCounter />} />
          <Route path="/workout" element={<RandomWorkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/login"
            element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/register"
            element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Register />}
          />
          <Route path="/chatbox" element={<ChatBox />} />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
