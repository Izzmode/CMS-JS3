const Admin = require('../schemas/adminSchema')

const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

// Create token
exports.generateToken = (user) => {
  const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: '1d' })
  return token
}

// Verify token



// exports.verifyToken = (req, res, next) => {
//   try {
    
//     const token = req.headers.authorization.split(' ')[1]
//     req.userId = jwt.verify(token, secretKey)._id
//     // req.userData = jwt.verify(token, secretKey)
//     next();

//   } catch {
//     res.status(401).json({ message: 'Access restricted. You need to login.' })
//   }
// }

// exports.verifyToken = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, secretKey);
//     localStorage.setItem('token', token);
//     req.userId = decodedToken._id;
//     req.token = token; // Attach the token to the request object
//     next();
//   } catch {
//     res.status(401).json({ message: 'Access restricted. You need to login.' });
//   }
// };

// exports.checkAdmin = async (req, res, next) => {
//   try {
//     if (!req.userId) {
//       return res.status(401).json({
//         message: 'Access restricted. You need to login.',
//       });
//     }

//     const admin = await Admin.findOne({ adminId: req.userId }).exec();

//     if (!admin) {
//       return res.status(401).json({
//         message: 'You need to be an admin to perform this action.',
//       });
//     }

//     next();
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// exports.checkAdmin = async (req, res, next) => {

//   console.log(req.userId)
//   const admin = await Admin.findOne({ adminId: req.userId })


//   if(!admin) {
//     return res.status(401).json({
//       message: 'you need to be admin to be able to do this'
//     })
//   }

//   next()
// }


// exports.checkAdmin = (req, res, next) => {

//   Admin.find({ adminId: req.userId }, (err, admin)=> {
//     if(err || !admin ) {
//       return res.status(401).json({
//             message: 'you need to be admin to be able to do this'
//           })
//     }
//     next()
//   })

  // if(req.name){
  //   console.log(req.name)
  // }
  // if(!req.user){
  //   console.log('ingen')
  // }

 
  // console.log(req.user.admin)

  // if(!admin) {
  //   return res.status(401).json({
  //     message: 'you need to be admin to be able to do this'
  //   })
  // }

  


