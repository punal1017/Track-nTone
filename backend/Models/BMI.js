const mongoose = require('mongoose');

const BMISchema = new mongoose.Schema({
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  bmi: { type: String, required: true },
});

const BMI = mongoose.model('BMI', BMISchema);

module.exports = BMI;
