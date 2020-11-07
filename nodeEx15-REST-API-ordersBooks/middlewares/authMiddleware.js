// to verify access

const auth = require('../configs/auth');

const jwt = require('jsonwebtoken');

const { secret } = require('../configs/auth');

module.exports = (request, response, next) => {
  const authHeader = request.headers['authorization'];

  if(!authHeader) {
    return response.status(401).json({status: 'No authorization header found'});
  }

  const [, jwtToken] = authHeader.split(' ');

  try {
    request.user = jwt.verify(jwtToken, secret);
    next();
  } catch (err) {
      return response.status(401).json({status: 'Invalid JWT'});
  }
};