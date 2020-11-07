const mongoose = require('mongoose');

module.exports = mongoose.model('book', {
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});