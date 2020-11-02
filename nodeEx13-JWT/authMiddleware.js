const jwt = require('jsonwebtoken');
const {jwtSecret} = require('./config');

module.exports = (req, res, next) => {
  // existence in a header
  const authHeader = req.headers['authorization'];
  if(!authHeader) {
    res.status(401).json({status: 'No "authorization" header found'});
  }

  // the structure of a authorization header example:
  // JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik9sc2VuIiwicGFzc3dvcmQiOiI4aTlvNnkiLCJpZCI6MywiaWF0IjoxNjA0MzIyMzM2fQ.HD1CiEDy7LPRwMBJ4St5K1kE5UCAUHM6c8_2kWA1-sk

  const [, token] = authHeader.split(' ');

  try {
    jwt.verify(token, jwtSecret); // to decode JWT
    next();
  } catch (err) {
    res.status(401).json({status: 'Failed to decode JWT'});
  }
  
};