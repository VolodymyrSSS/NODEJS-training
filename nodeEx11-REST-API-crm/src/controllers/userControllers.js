import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../models/userModel';
import { response } from 'express';

const User = mongoose.model('User', UserSchema);

export const loginRequired = (req, res, next) => {
  if(req.user) {
    next();
  } else {
    return res.status(401).json({message: 'Unauthorized user!'});
  }
}

export const register = (req, res) => {
  const newUser = new User(req.body);
  newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
  newUser.save((err, user) => {
    if(err) {
      return res.status(400).send({message: err});
    } else {
      user.hashPassword = undefined; // to omit sending password back
      return res.json(user);
    }
  });
}

export const login = (req, res) => {
  User.findOne({ // find the user in database
    email: req.body.email // grab the email for comparing the database of user
  }, (err, user) => { // to check if there is an user
    if(err) throw err;
    if(!user) {
      res.status(401).json({message: 'Authentication failed. No user found'});
    } else if(user){
      // to check if the password being passed in request matches with one in the database
      if (!user.comparePassword(req.body.password, user.hashPassword)) { // if it doesn't
      res.status(401).json({message: 'Authentication failed. Wrong password'});
      } else {
        return res.json({token: jwt.sign({email: user.email, username: user.username, _id: user.id}, '44_secretWord_66')}); // send encoded token
      }
    }
  });
}