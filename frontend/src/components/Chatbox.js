import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './Chatbox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [socket, setSocket] = useState(null);
  const [awaitingInput, setAwaitingInput] = useState(''); // Track user input like weight/height
  const [userDetails, setUserDetails] = useState({ weight: null, height: null }); // Store weight and height

  // Send message to the backend API for storing in MongoDB
  const sendMessageTobackend = async (message) => {
    try {
      await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });
    } catch (err) {
      console.error('Error sending message to backend:', err);
    }
  };

  // Send message to server and handle bot response
  const sendMessage = () => {
    if (inputMessage.trim() && username.trim()) {
      const message = { username, text: inputMessage };
      socket.emit('message', message); // Send user message to the server
      setMessages((prevMessages) => [...prevMessages, message]); // Update local message list
      sendMessageTobackend(message); // Send user message to the backend
      setInputMessage('');

      // Simulate bot reply after a delay
      setTimeout(() => {
        const botMessage = handleBotReply(inputMessage);
        const botResponse = { username: 'Bot', text: botMessage };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        sendMessageTobackend(botResponse); // Send bot message to the backend
      }, 1000); // Delay the bot reply by 1 second
    }
  };

  // Calculate BMI based on weight and height
  const calculateBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2);
  };

  // Recommend a diet plan based on BMI
  const recommendDietPlan = (bmi) => {
    if (bmi < 18.5) {
      return 'Your BMI indicates you are underweight. Follow a nutrient-rich diet plan to gain weight healthily.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Your BMI is normal. Maintain a balanced diet to stay healthy.';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Your BMI indicates overweight. Follow a calorie-controlled diet to reduce weight.';
    } else {
      return 'Your BMI indicates obesity. Focus on a low-calorie, nutrient-rich diet.';
    }
  };

  // Handle bot replies
  const handleBotReply = (message) => {
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
        const bmi = calculateBMI(userDetails.weight, height);
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
      return 'Hello! How can I assist you today?';
    } else if (message.includes('how are you')) {
      return 'I am doing well, thank you! How about you?';
    } else if (message.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return 'I am not sure how to respond to that. Can you try asking something else?';
    }
  };

  // Initialize socket connection and handle incoming messages
  useEffect(() => {
    const newSocket = io('http://localhost:8000'); // Your backend server URL
    setSocket(newSocket);

    newSocket.on('previousMessages', (prevMessages) => {
      setMessages(prevMessages);
    });

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

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
