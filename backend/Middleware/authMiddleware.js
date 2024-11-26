// // const jwt = require('jsonwebtoken');

// // const authMiddleware = (req, res, next) => {
// //   const token = req.header('Authorization');

// //   if (!token) {
// //     return res.status(401).json({ message: 'Authorization denied' });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded.id;
// //     next();
// //   } catch (error) {
// //     res.status(401).json({ message: 'Invalid token' });
// //   }
// // };

// // module.exports = authMiddleware;

// // const jwt = require('jsonwebtoken');
// // const User = require('../Models/User');

// // const protect = async (req, res, next) => {
// //   let token;

// //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// //     try {
// //       token = req.headers.authorization.split(' ')[1];
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //       req.user = await User.findById(decoded.id).select('-password');
// //       next();
// //     } catch (error) {
// //       res.status(401).json({ message: 'Not authorized, token failed' });
// //     }
// //   }

// //   if (!token) {
// //     res.status(401).json({ message: 'Not authorized, no token' });
// //   }
// // };

// // module.exports = protect;
// // middleware/authMiddleware.js











// // const protect = (req, res, next) => {
// //   // Mock authentication check, replace with your logic
// //   if (req.headers.authorization !== 'Bearer your-token') {
// //     return res.status(401).json({ message: 'Not authorized' });
// //   }
// //   next();
// // };

// // module.exports = protect;





// const jwt = require('jsonwebtoken');
// const User = require('../Models/User');

// const protect = async (req, res, next) => {
//   let token;
  
//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       token = req.headers.authorization.split(' ')[1]; // Extract token from "Bearer <token>"
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select('-password');
//       next();
//     } catch (error) {
//       res.status(401).json({ message: 'Not authorized, token failed' });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: 'Not authorized, no token' });
//   }
// };

// module.exports = protect;




const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

module.exports = protect;
