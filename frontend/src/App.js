import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BMICalculator from './components/BMICalculator';
import CalorieCounter from './components/CalorieCounter';
import RandomWorkout from './components/RandomWorkout';
import Auth from './components/Auth';
import Login from './components/Login';
import ChatBox from './components/Chatbox'; // Updated casing for consistency

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
<<<<<<< HEAD
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbox" element={<ChatBox />} /> {/* Updated to match import */}
        </Routes>
=======

          <Route path="/login" element={<Login />} /> {/* Route for Login */}
          <Route path="/Chatbox" element={<ChatBox />} /> {/* Route for ChatBox */}
        </Routes>

          // 
            
>>>>>>> a3a8647df19a09a2704e9ea76fcfeb3d4f6810d5
      </div>
    </Router>
  );
}

export default App;
