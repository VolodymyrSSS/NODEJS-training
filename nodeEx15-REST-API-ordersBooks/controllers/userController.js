module.exports.getUsers = (request, response) => {
  response.json({status: 'success', users: []});
};