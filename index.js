require('dotenv').config()

const server = require('./api/server');
const PORT = process.env.PORT || 8000;

server.use('*', (req, res) => {
  res.send(`<h1>Work in Progress!</h1>`)
})

server.listen(PORT, () => {
  console.log(`*** listening on port: ${PORT} ***`)
})