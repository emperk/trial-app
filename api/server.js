const express = require('express');
const usersRouter = require('./users/users-router');

const server = express();

server.use(express.json());

server.use('/api', usersRouter)

server.use('*', (req, res) => {
  res.send(`<h1>Work in Progress!</h1>`)
})

module.exports = server;