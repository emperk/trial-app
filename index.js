require('dotenv').config()

const server = require('./api/server');
// const cors = require('cors');
const PORT = process.env.PORT || 8000;

// server.get('/api/works', (req, res) => {
//   res.json({
//     message: 'the api is working!'
//   })
// })

server.use('*', (req, res) => {
  res.send(`<h1>Work in Progress!</h1>`)
})

server.listen(PORT, () => {
  console.log(`*** listening on port: ${PORT} ***`)
})