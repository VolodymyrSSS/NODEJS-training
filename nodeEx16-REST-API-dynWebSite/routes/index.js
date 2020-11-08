const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    // response.sendFile(path.join(__dirname, './static/index.html'));
    response.render('pages/index', { pageTitle: 'Welcome' });
  });
  return router;
};

