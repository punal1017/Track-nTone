import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './Chatbox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [socket, setSocket] = useState(null);
  const [awaitingInput, setAwaitingInput] = useState(''); // Track pending user input like weight/height
  const [userDetails, setUserDetails] = useState({ weight: null, height: null }); // Store weight and height

  useEffect(() => {
    const newSocket = io('http://localhost:5000'); // Your backend server URL
    setSocket(newSocket);

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const calculateBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2); // BMI formula
  };

 
    const recommendDietPlan = (bmi) => {
      if (bmi < 18.5) {
        return `Your BMI indicates you are underweight. Here's a meal plan to help you gain weight healthily:
        - Breakfast: Scrambled eggs with whole-grain toast and avocado slices, a glass of whole milk.
        - Snack: Banana with peanut butter.

        - Lunch: Grilled chicken with quinoa and roasted vegetables, a side of Greek yogurt.
        - Snack: Handful of mixed nuts and a protein smoothie.

        - Dinner: Salmon with sweet potatoes and a spinach salad with olive oil dressing.
        - Dessert: Full-fat yogurt with honey and fresh berries.`;
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return `Your BMI is normal. Maintain a balanced diet to stay healthy:
        - Breakfast: Oatmeal topped with fresh fruits and a drizzle of honey, a boiled egg, and green tea.
        - Snack: Sliced apple with almond butter.

        - Lunch: Grilled fish with brown rice and steamed broccoli.
        - Snack: A handful of roasted chickpeas or trail mix.

        - Dinner: Chicken stir-fry with mixed vegetables and a side of whole-grain pasta.
        - Dessert: A small piece of dark chocolate or a fruit salad.`;

      } else if (bmi >= 25 && bmi < 29.9) {
        return `Your BMI indicates overweight. Here's a meal plan to help you lose weight:
        - Breakfast: Two boiled eggs with sautéed spinach and a slice of whole-grain bread.
        - Snack: A small bowl of mixed berries.

        - Lunch: Grilled chicken salad with lots of greens, cherry tomatoes, cucumber, and a vinaigrette dressing.
        - Snack: Carrot sticks with hummus.

        - Dinner: Baked salmon with roasted zucchini and quinoa.
        - Dessert: A small serving of Greek yogurt with cinnamon.`;
      } else {
        return `Your BMI indicates obesity. Focus on a low-calorie, nutrient-rich diet:
        - Breakfast: Vegetable omelet with a side of fresh fruit and herbal tea.
        - Snack: A handful of almonds or walnuts.
        
        - Lunch: Lentil soup with a side of mixed greens and a slice of whole-grain bread.
        - Snack: Cucumber and celery sticks with a low-fat yogurt dip.

        - Dinner: Grilled turkey breast with steamed broccoli and mashed cauliflower.
        - Dessert: A baked apple with a sprinkle of cinnamon.`;
      }
  };

  const handleBotReply = (message) => {
    let botReply = '';
    if (awaitingInput === 'weight') {
      const weight = parseFloat(message);
      if (!isNaN(weight) && weight > 0) {
        setUserDetails((prev) => ({ ...prev, weight }));
        setAwaitingInput('height');
        return 'Got it! Now, please tell me your height in meters (e.g., 1.75).';
      } else {
        return 'Please enter a valid weight.';
      }
    }

    if (awaitingInput === 'height') {
      const height = parseFloat(message);
      if (!isNaN(height) && height > 0) {
        const weight = userDetails.weight;
        const bmi = calculateBMI(weight, height);
        const dietPlan = recommendDietPlan(bmi);
        setUserDetails({ weight: null, height: null });
        setAwaitingInput('');
        return `Your BMI is ${bmi}. ${dietPlan}`;
      } else {
        return 'Please enter a valid height.';
      }
    }

    if (message.toLowerCase().includes('diet plan')) {
      setAwaitingInput('weight');
      return 'Sure! To recommend a diet plan, please tell me your weight in kilograms (e.g., 70).';
    }

    if (message.includes('hello') || message.includes('hi')) {
      botReply = 'Hello! How can I assist you today?';
    } else if (message.includes('how are you')) {
      botReply = 'I am doing well, thank you! How about you?';
    } else if (message.includes('bye')) {
      botReply = 'Goodbye! Have a great day!';
    } else {
      botReply = 'I am not sure how to respond to that. Can you try asking something else?';
    }
    return botReply;
  };

  const sendMessage = () => {
    if (inputMessage.trim() && username.trim()) {
      const message = { username, text: inputMessage };
      socket.emit('message', message); // Send user message to the server
      setMessages((prevMessages) => [...prevMessages, message]); // Update local message list
      setInputMessage('');

      // Simulate bot reply after a delay
      setTimeout(() => {
        const botMessage = handleBotReply(inputMessage);
        setMessages((prevMessages) => [...prevMessages, { username: 'Bot', text: botMessage }]);
      }, 1000); // Delay the bot reply by 1 second
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <h2 className="chatbox-title">Chat Room</h2>

        {/* Messages List */}
        <div className="chatbox-messages">
          {messages.map((msg, index) => (
            <div key={index} className="chatbox-message">
              <strong>{msg.username}:</strong> {msg.text}
            </div>
          ))}
        </div>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="chatbox-input"
        />
        <input
          type="text"
          placeholder="Type your message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="chatbox-input"
        />
        <button onClick={sendMessage} className="chatbox-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
