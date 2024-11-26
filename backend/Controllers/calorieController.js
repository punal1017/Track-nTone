// const Calorie = require('../Models/Calorie');

// const addFood = async (req, res) => {
//   const { food, calories } = req.body;

//   try {
//     const newFood = await Calorie.create({ user: req.user.id, food, calories });
//     res.status(201).json(newFood);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getCalories = async (req, res) => {
//   try {
//     const calories = await Calorie.find({ user: req.user.id });
//     res.json(calories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { addFood, getCalories };



const Calorie = require('../Models/Calorie');

const addFood = async (req, res) => {
  const { food, calories } = req.body;

  try {
    const newFood = await Calorie.create({ user: req.user.id, food, calories });
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCalories = async (req, res) => {
  try {
    const calories = await Calorie.find({ user: req.user.id });
    res.json(calories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addFood, getCalories };
