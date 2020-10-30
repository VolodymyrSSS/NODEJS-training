import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import data from './data/data.json';

const app = express();

const PORT = 3000;

// this is for public folder on path /
app.use(express.static('public'));
// this is for images folder on path images
app.use('/images', express.static('images'));
// this is method to use JSON
// app.use(express.json());
app.use(express.urlencoded({extended: true}));
// this is to add favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// this is for proxies - another server that pushes traffic to application
app.set('trust proxy', 'loopback');


app.get('/', (req, res) => {
  // get data first from MongoDB, than
  res.json(data);
});
// app.get('/item/:id', (req, res) => {
//   console.log(req.params.id);
//   let user = Number(req.params.id);
//   console.log(user);
//   console.log(data[user]);
//   res.send(data[user]);
// });
//if we want to get using specified category
// app.get('/item/:category/:id', (req, res) => {
//   let user = Number(req.params.category.id);
//   res.send(data[user]);
// });

// can get many req-data in a single call with the next
app.get('/item/:id', (req, res, next) => {
  // this is the middleware that pulls the data
  console.log(req.params.id);
  let user = Number(req.params.id);
  console.log(user);
  console.log(data[user]);
  // the middleware that uses the req object
  console.log(`Request from: ${req.originalUrl}`);
  console.log(`Request type: ${req.method}`);
  // everything above is middleware
  res.send(data[user]);
  next();
  }, (req, res) => 
      console.log('Did you get the right data?')
);

app.get('/item', (req, res) => {
  throw new Error();
  // res.redirect('http://www.linkedin.com') // redirect to another page/site
  // res.download('images/rocket.jpg'); // download the file as well change the route to images
  // res.send(`a get request with /item route on port ${PORT}`);
  // res.end(); // end the call right there!
});

app.post('/newItem', (req, res) => {
  console.log(req.body);
  res.send(req.body);
  // res.send(`a post request with /newItem route on port ${PORT}`);
});

app.put('/item', (req, res) => {
  res.send(`a put request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res) => {
  res.send(`a delete request with /item route on port ${PORT}`);
});

// sample of route chaining
// app.route('/item')
//   .get((req, res) => {
//     throw new Error();
//     res.send(`a get request with /item route on port ${PORT}`)
//   })
//   .put((req, res) =>
//     res.send(`a put request with /item route on port ${PORT}`)
//   )
//   .delete((req, res) =>
//     res.send(`a delete request with /item route on port ${PORT}`)
//   );

// JSON data - {"hello!": "JSON is cool"}
// URLEncoded data - hello!=

// Custom error handling function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Red alert !!!:   ${err.stack}`);
});

app.listen(PORT, () => {
  console.log(`Your server running on port ${PORT}`);
  // console.log(data);
});

// for debugging
// type in CLI: DEBUG=express:* node index.js