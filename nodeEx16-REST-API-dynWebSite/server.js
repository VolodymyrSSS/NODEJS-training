const express = require('express');

const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;

// to command Express to use ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// apply a middleware to look express into a static folder
app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  // response.sendFile(path.join(__dirname, './static/index.html'));
  response.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${PORT}`);
});

// to install eslint
// npm install -D eslint

// to apply directly eslint to code (create config file)
// npx eslint --init

// to install prettier
// npm install -D prettier eslint-config-prettier eslint-plugin-prettier

// template engine install; site https://ejs.co/
// npm install ejs
