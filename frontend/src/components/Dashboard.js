import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve token
                const { data } = await axios.get('/api/auth/dashboard', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setDashboardData(data);
            } catch (error) {
                setError(error.response?.data?.message || 'Failed to fetch dashboard data');
            }
        };

        fetchDashboardData();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {dashboardData ? (
                <>
                    <p>{dashboardData.message}</p>
                    <ul>
                        <li>User ID: {dashboardData.data.userId}</li>
                        <li>Email: {dashboardData.data.email}</li>
                        <li>Joined: {new Date(dashboardData.data.createdAt).toLocaleDateString()}</li>
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
