// const BMI = require('../Models/BMI');

// const calculateBMI = async (req, res) => {
//   const { height, weight } = req.body;

//   try {
//     const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
//     const newBMI = await BMI.create({ user: req.user.id, height, weight, bmi: bmiValue });

//     res.status(201).json(newBMI);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getBMI = async (req, res) => {
//   try {
//     const bmiRecords = await BMI.find({ user: req.user.id });
//     res.json(bmiRecords);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { calculateBMI, getBMI };


// controllers/bmiController.js

// controllers/bmiController.js
const BMI = require('../Models/BMI');

exports.calculateBMI = async (req, res) => {
    const { height, weight, user } = req.body;

    if (!height || !weight) {
        return res.status(400).json({ message: 'Height and weight are required' });
    }

    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);

    // Save the BMI record to MongoDB
    try {
        const newBMI = new BMI({
            user,
            height,
            weight,
            bmi: bmiValue
        });
        await newBMI.save();
        res.status(200).json({ bmi: bmiValue });
    } catch (error) {
        res.status(500).json({ message: 'Error saving BMI record', error });
    }
};

exports.getBMI = (req, res) => {
    res.status(200).json({ message: 'BMI API is working' });
};






















// exports.calculateBMI = (req, res) => {
//     const { height, weight } = req.body;
//     if (!height || !weight) {
//       return res.status(400).json({ message: 'Height and weight are required' });
//     }
    
//     const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
//     res.status(200).json({ bmi: bmiValue });
//   };
  
//   exports.getBMI = (req, res) => {
//     res.status(200).json({ message: 'BMI API is working' });
//   };
  