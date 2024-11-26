  // // import React, { useState, useEffect } from 'react';
  // // import '../App.css';

  // // function CalorieCounter() {
  // //   const [food, setFood] = useState('');
  // //   const [calories, setCalories] = useState('');
  // //   const [foodList, setFoodList] = useState([]);

  // //   // Load data from localStorage on component mount
  // //   useEffect(() => {
  // //     const savedFoodList = JSON.parse(localStorage.getItem('foodList')) || [];
  // //     setFoodList(savedFoodList);
  // //   }, []);

  // //   // Save data to localStorage whenever foodList changes
  // //   useEffect(() => {
  // //     localStorage.setItem('foodList', JSON.stringify(foodList));
  // //   }, [foodList]);

  // //   const addFood = async () => {
  // //     if (food && calories) {
  // //       const newFoodItem = { name: food, calories: parseInt(calories) };

  // //       // Send the food item to the backend to be saved in MongoDB
  // //       try {
  // //         const response = await fetch('http://localhost:5000/api/food', {
  // //           method: 'POST',
  // //           headers: {
  // //             'Content-Type': 'application/json',
  // //           },
  // //           body: JSON.stringify(newFoodItem),
  // //         });

  // //         if (response.ok) {
  // //           const savedFoodItem = await response.json();
  // //           setFoodList([...foodList, savedFoodItem]); // Add to the state if saved successfully
  // //           setFood('');
  // //           setCalories('');
  // //         } else {
  // //           console.error('Failed to add food item');
  // //         }
  // //       } catch (error) {
  // //         console.error('Error:', error);
  // //       }
  // //     }
  // //   };

  // //   const totalCalories = foodList.reduce((sum, item) => sum + item.calories, 0);

  // //   const getDietRecommendation = () => {
  // //     if (totalCalories < 1500) {
  // //       return "You're consuming fewer calories than recommended. Consider adding more nutrient-dense foods to your diet.";
  // //     } else if (totalCalories >= 1500 && totalCalories <= 2500) {
  // //       return "You're within the recommended calorie range. Keep up the good work!";
  // //     } else if (totalCalories > 2500) {
  // //       return "You might be consuming too many calories. Consider reducing portion sizes and focusing on balanced meals.";
  // //     }
  // //     return "";
  // //   };

  // //   return (
  // //     <div className="calorie-counter">
  // //       <h2>Calorie Counter</h2>
  // //       <input 
  // //         type="text" 
  // //         placeholder="Food" 
  // //         value={food} 
  // //         onChange={(e) => setFood(e.target.value)} 
  // //       />
  // //       <input 
  // //         type="number" 
  // //         placeholder="Calories" 
  // //         value={calories} 
  // //         onChange={(e) => setCalories(e.target.value)} 
  // //       />
  // //       <button onClick={addFood}>Add Food</button>
  // //       <table>
  // //         <thead>
  // //           <tr>
  // //             <th>Food</th>
  // //             <th>Calories</th>
  // //           </tr>
  // //         </thead>
  // //         <tbody>
  // //           {foodList.map((item, index) => (
  // //             <tr key={index}>
  // //               <td>{item.name}</td>
  // //               <td>{item.calories}</td>
  // //             </tr>
  // //           ))}
  // //         </tbody>
  // //       </table>
  // //       <p>Total Calories: {totalCalories}</p>
  // //       <div className="diet-recommendation">
  // //         <h3>Diet Recommendation</h3>
  // //         <p>{getDietRecommendation()}</p>
  // //       </div>
  // //     </div>
  // //   );
  // // }

  // // export default CalorieCounter;
  // import React, { useState, useEffect } from 'react';
  // import '../App.css';
  
  // function CalorieCounter() {
  //   const [food, setFood] = useState('');
  //   const [calories, setCalories] = useState('');
  //   const [foodList, setFoodList] = useState([]);
  
  //   // Load data from localStorage on component mount
  //   useEffect(() => {
  //     const savedFoodList = JSON.parse(localStorage.getItem('foodList')) || [];
  //     setFoodList(savedFoodList);
  //   }, []);
  
  //   // Save data to localStorage whenever foodList changes
  //   useEffect(() => {
  //     localStorage.setItem('foodList', JSON.stringify(foodList));
  //   }, [foodList]);
  
  //   const addFood = async () => {
  //     if (food && calories) {
  //       const newFoodItem = { name: food, calories: parseInt(calories) };
  
  //       // Get the token from localStorage or sessionStorage
  //       const token = localStorage.getItem('token'); // Adjust based on how you store it
  
  //       // Send the food item to the backend to be saved in MongoDB
  //       try {
  //         const response = await fetch('http://localhost:5000/api/food', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization': `Bearer ${token}`  // Include the token here
  //           },
  //           body: JSON.stringify(newFoodItem),
  //         });
  
  //         if (response.ok) {
  //           const savedFoodItem = await response.json();
  //           setFoodList([...foodList, savedFoodItem]); // Add to the state if saved successfully
  //           setFood('');
  //           setCalories('');
  //         } else {
  //           console.error('Failed to add food item');
  //         }
  //       } catch (error) {
  //         console.error('Error:', error);
  //       }
  //     }
  //   };
  
  //   const totalCalories = foodList.reduce((sum, item) => sum + item.calories, 0);
  
  //   const getDietRecommendation = () => {
  //     if (totalCalories < 1500) {
  //       return "You're consuming fewer calories than recommended. Consider adding more nutrient-dense foods to your diet.";
  //     } else if (totalCalories >= 1500 && totalCalories <= 2500) {
  //       return "You're within the recommended calorie range. Keep up the good work!";
  //     } else if (totalCalories > 2500) {
  //       return "You might be consuming too many calories. Consider reducing portion sizes and focusing on balanced meals.";
  //     }
  //     return "";
  //   };
  
  //   return (
  //     <div className="calorie-counter">
  //       <h2>Calorie Counter</h2>
  //       <input
  //         type="text"
  //         placeholder="Food"
  //         value={food}
  //         onChange={(e) => setFood(e.target.value)}
  //       />
  //       <input
  //         type="number"
  //         placeholder="Calories"
  //         value={calories}
  //         onChange={(e) => setCalories(e.target.value)}
  //       />
  //       <button onClick={addFood}>Add Food</button>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Food</th>
  //             <th>Calories</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {foodList.map((item, index) => (
  //             <tr key={index}>
  //               <td>{item.name}</td>
  //               <td>{item.calories}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //       <p>Total Calories: {totalCalories}</p>
  //       <div className="diet-recommendation">
  //         <h3>Diet Recommendation</h3>
  //         <p>{getDietRecommendation()}</p>
  //       </div>
  //     </div>
  //   );
  // }
  
  // export default CalorieCounter;
  



  import React, { useState, useEffect } from 'react';
import '../App.css';

function CalorieCounter() {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [foodList, setFoodList] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedFoodList = JSON.parse(localStorage.getItem('foodList')) || [];
    setFoodList(savedFoodList);
  }, []);

  // Save data to localStorage whenever foodList changes
  useEffect(() => {
    localStorage.setItem('foodList', JSON.stringify(foodList));
  }, [foodList]);

  const addFood = async () => {
    if (food && calories) {
      const newFoodItem = { name: food, calories: parseInt(calories) };

      const token = localStorage.getItem('token'); // Get JWT token from localStorage

      try {
        const response = await fetch('http://localhost:5000/api/food', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include token in Authorization header
          },
          body: JSON.stringify(newFoodItem),
        });

        if (response.ok) {
          const savedFoodItem = await response.json();
          setFoodList([...foodList, savedFoodItem]);
          setFood('');
          setCalories('');
        } else {
          console.error('Failed to add food item');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const totalCalories = foodList.reduce((sum, item) => sum + item.calories, 0);

  const getDietRecommendation = () => {
    if (totalCalories < 1500) {
      return "You're consuming fewer calories than recommended. Consider adding more nutrient-dense foods to your diet.";
    } else if (totalCalories >= 1500 && totalCalories <= 2500) {
      return "You're within the recommended calorie range. Keep up the good work!";
    } else if (totalCalories > 2500) {
      return "You might be consuming too many calories. Consider reducing portion sizes and focusing on balanced meals.";
    }
    return "";
  };

  return (
    <div className="calorie-counter">
      <h2>Calorie Counter</h2>
      <input
        type="text"
        placeholder="Food"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button onClick={addFood}>Add Food</button>

      <h3>Food List</h3>
      <ul>
        {foodList.map((item, index) => (
          <li key={index}>
            {item.name}: {item.calories} Calories
          </li>
        ))}
      </ul>

      <h3>Total Calories: {totalCalories}</h3>
      <h4>{getDietRecommendation()}</h4>
    </div>
  );
}

export default CalorieCounter;
