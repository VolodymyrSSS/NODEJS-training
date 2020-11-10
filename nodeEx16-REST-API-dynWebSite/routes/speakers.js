const express = require('express');

const router = express.Router();

module.exports = (params) => {

  const { speakersService } = params;

  router.get('/', async(request, response) => {
    const speakers = await speakersService.getList();
    // return response.send('Speakers list');
    return response.json(speakers);
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
