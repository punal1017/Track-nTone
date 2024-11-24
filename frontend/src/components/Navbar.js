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
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bmi">BMI Calculator</Link></li>
        <li><Link to="/calories">Calorie Counter</Link></li>
        <li><Link to="/workout">Random Workout</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
