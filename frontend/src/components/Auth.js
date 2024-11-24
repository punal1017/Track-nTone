import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup forms

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only used for Signup

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log('Login details:', { email, password });
      alert('Login functionality will be added soon.');
    } else {
      console.log('Signup details:', { name, email, password });
      alert('Signup functionality will be added soon.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button
          className={isLogin ? 'auth-tab active' : 'auth-tab'}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? 'auth-tab active' : 'auth-tab'}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="auth-field">
            <label className="auth-label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="auth-input"
            />
          </div>
        )}
        <div className="auth-field">
          <label className="auth-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="auth-input"
          />
        </div>
        <div className="auth-field">
          <label className="auth-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="auth-input"
          />
        </div>
        <button type="submit" className="auth-button">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Auth;
