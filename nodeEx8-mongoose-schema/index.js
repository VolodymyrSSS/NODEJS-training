const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab_test_ex8');

let UserSchema = mongoose.Schema({
  name: String,
  password: {
    type: String,
    required: true
  },
  notes: Array
});

const User = mongoose.model('user', UserSchema);

const sampleUser = new User({name: "Modest", password: "123123123", notes: []});
const sampleUser2 = new User({name: "Timon", password: "654654654", notes: []});
const sampleUser3 = new User({name: "Zochan", password: "2323232323", notes: []});

sampleUser.save()
.then(data => {
  console.log('saved', data);
})
.catch(err => {
  console.log(err);
});

sampleUser2.save()
.then(data => {
  console.log('saved', data);
    // User.findById('5f93c8959260984931200ece').exec()
    // .then(data => console.log(data))
    // .catch(err =>{
    //   console.log(err);
    // })
})
.catch(err => {
  console.log(err);
});

sampleUser3.save()
.then(data => {
  console.log('saved', data);
})
.catch(err => {
  console.log(err);
});