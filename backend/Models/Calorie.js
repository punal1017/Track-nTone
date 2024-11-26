// const mongoose = require('mongoose');

// const FoodSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   calories: { type: Number, required: true },
// });

// const Food = mongoose.model('Food', FoodSchema);

// module.exports = Food;


const mongoose = require('mongoose');

const calorieSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  food: { type: String, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Calorie', calorieSchema);
