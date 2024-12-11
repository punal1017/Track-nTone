import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
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
import ReactGA from "react-ga4";

// Initialize Google Analytics with your Measurement ID
ReactGA.initialize("G-14012004");

// Custom hook to track route changes and send pageviews
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title,
    });
  }, [location]);
};

document.title = "TRACK N TONE";

// Helper function to check if a user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Check if a token exists in localStorage
};

// Wrapper component to apply page tracking
const PageTrackerWrapper = ({ children }) => {
  usePageTracking();
  return children;
};

function App() {
  return (
    <Router>
      <PageTrackerWrapper>
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
      </PageTrackerWrapper>
    </Router>
  );
}

export default App;
