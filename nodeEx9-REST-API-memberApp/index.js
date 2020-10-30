const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect('mongodb://localhost:27017/lab_test_ex9_collection');

let UserSchema = mongoose.Schema({
  name: String,
  password: {
    type: String,
    required: true
  },
  notes: Array
});

const User = mongoose.model('user', UserSchema);

// switch on middleware which parse json
app.use(express.json());

app.get('/api/users', (req, res) => {
  User.find({}).exec()
  .then(users => {
    res.json({users});
  })
  .catch(err => {
    res.status(500).json({error: err.message})
  });
});

app.get('/api/users/:id', (req, res) => {
  User.findById(req.params.id).exec()
  .then(user => {
    if(!user) return res.status(400).json({status: 'User not found'});
    res.json({user});
  })
  .catch(err => {
    res.status(500).json({error: err.message})
  });
});

app.post('/api/users', (req, res) => {
  let user = new User({
    name: req.body.name,
    password: req.body.password,
    notes: []
  });
  user.save()
  .then(user => {
    res.json({user});
  })
  .catch(err => {
    res.status(500).json({error: err.message})
  });
});

app.put('/api/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {$Set: req.body}).exec()
  .then(user => {
    res.json({user});
  })
  .catch(err => {
    res.status(500).json({error: err.message})
  });
});

app.delete('/api/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id).exec()
  .then(user => {
    res.json({status: 'ok'});
  })
  .catch(err => {
    res.status(500).json({error: err.message})
  });
});

app.listen(8080);