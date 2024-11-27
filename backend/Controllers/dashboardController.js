// controllers/dashboardController.js
const getDashboardData = (req, res) => {
    // Mock data for the dashboard; you can modify it based on your needs.
    res.json({
        message: 'Welcome to your dashboard!',
        userId: req.user._id,  // From the JWT token (authenticated user)
        userName: req.user.name,
        // Add any other user-specific data here (e.g., user stats, goals, etc.)
    });
};

module.exports = { getDashboardData };
