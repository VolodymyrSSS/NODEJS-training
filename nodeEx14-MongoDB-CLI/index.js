//   CLI for MongoDB:
// enter MongoDB - mongo
// to create db 'lab_ex14_2' and go instance - use lab_ex14_2
// to create collection 'user' - db.createCollection('users')
// to see all collections in the db - show collections
// to create a document or insert info/field into document - db.users.insert({"name": "Dominique", "password": "2w3e4r"})
// to find document by field 'name' - db.lab_ex14_2.find({name: "Dominique"})
// to see all documents in the collection 'users' - db.users.find({})
// to update document in the collection - db.users.update({name: "Dominique"}, {$set: {skill: "js"}})
// to delete the document by field 'password' - db.users.remove({password: "2w3e4r"})
// to delete all documents in the collection 'users' - db.users.remove({}, {multi: true})

const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect('mongodb://localhost:27017/use');

let UserSchema = mongoose.Schema({
  name: String,
  password: {
    type: String,
    required: true
  },
  notes: Array
});

// simultaneously create a collection 'user(s)"
const User = mongoose.model('user', UserSchema);

// create a new user
// const sampleUser = new User({name: "Kitty", password: "1q2w3e", notes: []});

// save the user
// sampleUser.save()
// .then(data => {
//   console.log('saved', data);

  // to find by Id
  // User.findById('5fa0789dab3be0c47eb3b035').exec()
  //   .then(data => console.log(data))
  //   .catch(err => {
  //     console.log(err);
  //   })
// })
// .catch(err => {
//   console.log(err);
// });

app.get('/api/users', (req, res) => {
  User.find({}).exec()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({error: err.message})
    });
});

app.get('/api/users/:id', (req, res) => {
  User.findById(req.params.id).exec()
    .then(user => {
      res.json({user})
    })
    .catch(err => {
      res.status(500).json({error: err.message})
    });
});

// switch middleware to parse json
app.use(express.json());

app.post('/api/users', (req, res) => {
  let user = new User({
    name: req.body.name,
    password: req.body.password,
    notes: []
  });

  user.save()
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).json({error: err.message})
    });
});

app.put('/api/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}).exec()
    .then(user => {
      res.json({user})
    })
    .catch(err => {
      res.status(500).json({error: err.message})
    });
});

app.delete('/api/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id).exec()
    .then(() => {
      if(!user) return res.status(400).json({status: 'user not found'});
      res.json({status: "ok"})
    })
    .catch(err => {
      res.status(500).json({error: err.message})
    });
});

app.listen(8090);
