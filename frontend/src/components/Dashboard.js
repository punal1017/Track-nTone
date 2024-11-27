// // src/pages/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const [dashboardData, setDashboardData] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Check if the token exists in localStorage
//         const token = localStorage.getItem('token');
//         if (!token) {
//             navigate('/login'); // Redirect to login if no token found
//             return;
//         }

//         // Fetch the dashboard data
//         const fetchDashboardData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/dashboard', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${token}`, // Send the JWT token in the Authorization header
//                     },
//                 });

//                 const data = await response.json();

//                 if (response.ok) {
//                     setDashboardData(data); // Set the dashboard data in state
//                 } else {
//                     setError(data.message); // Set error message if any
//                 }
//             } catch (err) {
//                 setError('An error occurred while fetching data.');
//             }
//         };

//         fetchDashboardData();
//     }, [navigate]);

//     if (error) {
//         return <div style={styles.error}>{error}</div>;
//     }

//     if (!dashboardData) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.title}>Dashboard</h1>
//             <p style={styles.welcomeMessage}>
//                 Welcome back, {dashboardData.userName}!
//             </p>
//             <p style={styles.info}>
//                 User ID: {dashboardData.userId}
//             </p>
//             <p style={styles.info}>
//                 {dashboardData.message}
//             </p>
//             {/* Add any other data you want to show */}
//         </div>
//     );
// };

// const styles = {
//     container: {
//         margin: '30px auto',
//         padding: '40px',
//         maxWidth: '600px',
//         background: '#1f1f1f',
//         borderRadius: '15px',
//         boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
//         textAlign: 'center',
//         color: '#fff',
//     },
//     title: {
//         fontSize: '2rem',
//         marginBottom: '20px',
//     },
//     welcomeMessage: {
//         fontSize: '1.5rem',
//         marginBottom: '15px',
//     },
//     info: {
//         fontSize: '1.2rem',
//         marginBottom: '10px',
//     },
//     error: {
//         color: '#ff6b6b',
//         background: '#441010',
//         padding: '10px',
//         borderRadius: '5px',
//         marginBottom: '15px',
//         fontWeight: 'bold',
//     },
// };

// export default Dashboard;
