// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import BMICalculator from './components/BMICalculator';
// import CalorieCounter from './components/CalorieCounter';
// import RandomWorkout from './components/RandomWorkout';
// import Auth from './components/Auth';
// import Login from './components/Login';
// import ChatBox from './components/Chatbox'; // Importing Chatbox with consistent casing
// import './App.css';

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
//           <Route path="/chatbox" element={<ChatBox />} /> {/* Updated to match import */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BMICalculator from './components/BMICalculator';
import CalorieCounter from './components/CalorieCounter';
import RandomWorkout from './components/RandomWorkout';
import Auth from './components/Auth';
import Login from './components/Login';
import Register from './components/Register'; // Import Register
import ChatBox from './components/Chatbox'; // Ensure this import is correct
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/calories" element={<CalorieCounter />} />
          <Route path="/workout" element={<RandomWorkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} /> {/* Route for Login */}
          <Route path="/register" element={<Register />} /> {/* Route for Register */}
          <Route path="/chatbox" element={<ChatBox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
