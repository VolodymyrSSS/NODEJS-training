const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakerService('./data/speakers.json');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

// to command Express to use ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// make Express to trust cookie being past through a reverse proxy
app.set('trust proxy', 1);

// to add cookie-session middleware to a lifecycle
app.use(cookieSession({
  name: 'session',
  keys: ['G444gggWWW673ql', 'n999fffNNN431Pu'], 
}));

// apply a middleware to look express into a static folder
app.use(express.static(path.join(__dirname, './static')));

// app.get('/', (request, response) => {
//   // response.sendFile(path.join(__dirname, './static/index.html'));
//   response.render('pages/index', { pageTitle: 'Welcome' });
// });

// app.get('/speakers', (request, response) => {
//   response.sendFile(path.join(__dirname, './static/speakers.html'));
// });

app.use('/', routes({
  feedbackService,
  speakersService
}));

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

// to install cookie-session
// npm install cookie-session
