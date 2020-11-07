const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { secret } = require('../configs/auth');


module.exports.register = (request, response) => {
  const { username, password } = request.body;
  const user = new User({username, password});
  user.save()
    .then(() => {
      response.json({status: 'success', user: []});
    })
    .catch(err => {
      response.status(500).json({status: err.message});
    });
};


module.exports.login = (request, response) => {
  const { username, password } = request.body;
  User.findOne({username, password}).exec()
    .then(user => {
      if(!user) {
        return response.status(400).json({status: 'No user with such username or password found'});
      }
      response.json({status: 'success', token: jwt.sign(JSON.stringify(user), secret)});
    })
    .catch(err => {
      response.status(500).json({status: err.message});
    });
};

