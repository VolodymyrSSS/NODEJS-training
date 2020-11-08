const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;

// apply a middleware to look express into a static folder
app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});