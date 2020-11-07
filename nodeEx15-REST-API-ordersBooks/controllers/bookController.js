const Book = require('../models/book');

module.exports.addBook = (request, response) => {
  const { title, price } = request.body;
  const book = new Book({title, price});
  book.save()
    .then(() => {
      response.json({status: 'success'});
    })
    .catch(err => {
      response.status(500).json({status: err.message});
    });
};