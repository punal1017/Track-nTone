const Workout = require('../Models/Workout');
const Calorie = require('../Models/Calorie');

const dashboardController = async (req, res) => {
    try {
        const workoutStats = await Workout.find({ userId: req.user._id });
        const calorieRecords = await Calorie.find({ userId: req.user._id });

        res.status(200).json({
            message: `Welcome to your dashboard, ${req.user.name}!`,
            data: {
                userId: req.user._id,
                email: req.user.email,
                createdAt: req.user.createdAt,
                workoutStats,
                calorieRecords,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export the function for use in the route
module.exports = { getDashboardData: dashboardController };
