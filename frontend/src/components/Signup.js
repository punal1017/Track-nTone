import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill out all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        window.location.href = '/login'; // Redirect to login page
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.brandTitle}>Track n Tone</h1>
      <p style={styles.motivation}>Your fitness journey starts here.</p>
      <h2 style={styles.title}>Sign Up</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button} disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      <p style={styles.loginLink}>
        Already have an account? <a href="/login" style={styles.link}>Login</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    margin: '30px auto',
    padding: '40px',
    maxWidth: '600px',
    background: '#1f1f1f',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    color: '#fff',
  },
  brandTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#00ffcc',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
  },
  motivation: {
    fontSize: '1.2rem',
    marginBottom: '25px',
    fontStyle: 'italic',
    color: '#aaa',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  error: {
    color: '#ff6b6b',
    background: '#441010',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#ddd',
    fontSize: '1rem',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #555',
    background: '#333',
    color: '#fff',
    boxSizing: 'border-box',
  },
  button: {
    padding: '12px',
    fontSize: '1.2rem',
    color: '#1f1f1f',
    background: 'linear-gradient(135deg, #00ffcc, #007bff)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s, background 0.3s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
  },
  loginLink: {
    marginTop: '20px',
    color: '#aaa',
  },
  link: {
    color: '#00ffcc',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderBottom: '1px solid #00ffcc',
    transition: 'color 0.3s',
  },
};

export default Signup;
