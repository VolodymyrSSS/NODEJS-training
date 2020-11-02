const express = require('express');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config');
const authMiddleware = require('./authMiddleware');

const app = express();

const users = [
  {username: 'Marcus', password: '1q2w3e', id: 1},
  {username: 'Tommy', password: '4r5t6y', id: 2},
  {username: 'Olsen', password: '8i9o6y', id: 3},
  {username: 'Ron', password: '4r7u1q', id: 4},
  {username: 'Denis', password: '5tgf4r', id: 5}
];

// resource to access
const tracks = [
  {name: 'track 1', private: false},
  {name: 'track 2', private: true},
  {name: 'track 3', private: false},
  {name: 'track 4', private: true},
  {name: 'track 5', private: false},
  {name: 'track 6', private: true},
  {name: 'track 7', private: true},
  {name: 'track 8', private: false}
];

app.use(express.json());

// for encoding jwt: jwt.sign(payload, 'secret')
// for decoding jwt: jwt.verify(token, 'secret')

app.post('/api/login', (req, res) => {
  if(!req.body.username) {
    return res.status(400).json({status: "No username in body found"});
  }

  if(!req.body.password) {
    return res.status(400).json({status: "No password in body found"});
  }

  const [user] = users.filter(item => (item.username == req.body.username && item.password == req.body.password));

  if(!user) {
    return res.status(401).json({status: "Invalid login or password"});
  }

  const userJwt = jwt.sign(user, jwtSecret);

  res.json({status: 'success', jwt: userJwt});
});


app.get('/api/tracks/shared', (req, res) => {
  const publicTracks = tracks.filter(track => track.private == false);
  res.json({status: 'success', tracks: publicTracks});
});

app.get('/api/tracks/private', authMiddleware, (req, res) => {
  res.json({status: 'success', tracks});
});

app.listen(8090);