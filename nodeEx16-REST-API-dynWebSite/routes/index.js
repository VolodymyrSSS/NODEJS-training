const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    // response.sendFile(path.join(__dirname, './static/index.html'));
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());
  return router;
};

