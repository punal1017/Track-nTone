// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function Navbar() {
// //   return (
// //     <nav>
// //       <ul>
// //         <li><Link to="/">Home</Link></li>
// //         <li><Link to="/bmi">BMI Calculator</Link></li>
// //         <li><Link to="/calories">Calorie Counter</Link></li>
// //         <li><Link to="/workout">Random Workout</Link></li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/bmi">BMI Calculator</Link></li>
//         <li><Link to="/calories">Calorie Counter</Link></li>
//         <li><Link to="/workout">Random Workout</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/Chatbox">Chatbox</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    alert('You have logged out successfully');
    navigate('/'); // Use navigate to redirect to home after logout
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bmi">BMI Calculator</Link></li>
        <li><Link to="/calories">Calorie Counter</Link></li>
        <li><Link to="/workout">Random Workout</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/chatbox">Chatbox</Link></li>
        {/* Conditionally render Logout */}
        {localStorage.getItem('token') && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
