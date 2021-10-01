const express = require('express');
const usersRouter = require('./users/users-router');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', usersRouter)

server.use('*', (req, res) => {
  res.send(`<h1>Work in Progress</h1>`)
})

module.exports = server;