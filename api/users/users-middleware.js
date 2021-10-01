function validateUser(req, res, next) {
  const { username, password } = req.body
  if (!username || !username.trim() || !password || !password.trim()) {
    res.status(400).json({
      message: 'missing username and password'
    })
  } else {
    req.username = username.trim()
    req.password = password.trim()
    next()
  }
}

module.exports = {
  validateUser
}