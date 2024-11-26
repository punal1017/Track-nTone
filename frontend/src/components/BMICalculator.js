import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/calculate-bmi', {
        height: parseFloat(height),
        weight: parseFloat(weight),
      });
      
      setBMI(response.data.bmi);
      setCategory(response.data.category);
    } catch (error) {
      console.error('Error calculating BMI:', error);
    }
  };

  return (
    <div className="bmi-calculator">
      <div className="bmi-inputs">
        <h2>BMI Calculator</h2>
        <input 
          type="number" 
          placeholder="Height (cm)" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Weight (kg)" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>

      {bmi && (
        <div className="bmi-output">
          <div className="bmi-circle">
            <p>{bmi}</p>
          </div>
          <p>{category}</p>
        </div>
      )}

      <h3>BMI Categories</h3>
      <ul>
        <li>Underweight: BMI &lt; 18.5</li>
        <li>Normal weight: BMI 18.5 - 24.9</li>
        <li>Overweight: BMI 25 - 29.9</li>
        <li>Obese: BMI ≥ 30</li>
      </ul>
    </div>
  );
}

export default BMICalculator;