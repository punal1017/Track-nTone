// // const jwt = require('jsonwebtoken');
// // const User = require('../Models/User');

// // const register = async (req, res) => {
// //   const { name, email, password } = req.body;

// //   try {
// //     const userExists = await User.findOne({ email });
// //     if (userExists) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     const user = await User.create({ name, email, password });
// //     const token = generateToken(user._id);

// //     res.status(201).json({ userId: user._id, token });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // const login = async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });

// //     if (user && (await user.matchPassword(password))) {
// //       const token = generateToken(user._id);
// //       res.json({ userId: user._id, token });
// //     } else {
// //       res.status(401).json({ message: 'Invalid email or password' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // const generateToken = (id) => {
// //   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// // };

// // module.exports = { register, login };





// const jwt = require('jsonwebtoken');
// const User = require('../Models/User');

// const register = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const user = await User.create({ name, email, password });
//     const token = generateToken(user._id);

//     res.status(201).json({ userId: user._id, token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {
//       const token = generateToken(user._id);
//       res.json({ userId: user._id, token });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };

// module.exports = { register, login };





const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, password });
        const token = generateToken(user._id);
        res.status(201).json({ userId: user._id, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user._id);
            res.json({ userId: user._id, token });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { register, login };
