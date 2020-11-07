const express = require('express');
const router = express.Router();

const { addBook } = require('../controllers/bookController');

// to add book only by user
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/books', authMiddleware, addBook);

module.exports = router;