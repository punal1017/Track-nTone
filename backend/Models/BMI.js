// const mongoose = require('mongoose');

// const BMISchema = new mongoose.Schema({
//   height: { type: Number, required: true },
//   weight: { type: Number, required: true },
//   bmi: { type: String, required: true },
// });

// const BMI = mongoose.model('BMI', BMISchema);

// module.exports = BMI;


// const mongoose = require('mongoose');

// const bmiSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   height: { type: Number, required: true },
//   weight: { type: Number, required: true },
//   bmi: { type: Number, required: true },
//   date: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('BMI', bmiSchema);


// models/bmi.js
const mongoose = require('mongoose');

const bmiSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    bmi: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BMI', bmiSchema);
