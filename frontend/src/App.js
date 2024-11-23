// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import BMICalculator from './components/BMICalculator';
// import CalorieCounter from './components/CalorieCounter';
// import RandomWorkout from './components/RandomWorkout';
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
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BMICalculator from './components/BMICalculator';
import CalorieCounter from './components/CalorieCounter';
import RandomWorkout from './components/RandomWorkout';
import Login from './components/Login'; // Import Login component
// import Signup from './components/'; // Import Signup component
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
          <Route path="/login" element={<Login />} /> {/* New route for Login */}
             </Routes>
      </div>
    </Router>
  );
}

export default App;
