const express = require('express');

const app = express();

let users = [];

// parse json
app.use(express.json());

// to get/see all users
app.get('/api/users', (req, res) => {
  console.log('GET /api/users');
  res.json({users});
});

// to add new user
app.post('/api/users', (req, res) => {
  console.log('POST /api/users');
  users.push(req.body);
  res.json({status: 'ok'});
});

// to delete user
app.delete('/api/users/:user_id', (req, res) => {
  console.log(`DELETE /api/users/${req.params.user_id}`);
  users = users.filter(user => user.id !== parseInt(req.params.user_id));
  res.json({status: 'ok'});
});

app.listen(8090), () => {
  console.log('Server started!');
}