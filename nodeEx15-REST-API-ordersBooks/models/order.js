const mongoose = require('mongoose');

module.exports = mongoose.model('order', {
  userId: {
    type: String,
    required: true
  },
  basket: {
    type: Array,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
});