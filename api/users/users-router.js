const express = require('express');
const { 
  validateUser,
} = require('./users-middleware')
const User = require('./users-model');

const router = express.Router();

router.get('/users', async (req, res, next) => {
  try {
    const users = await User.get()
    res.json(users)
  } catch (err) {
    next(err)
  }
});

router.post('/register', validateUser, (req, res, next) => {
  User.insert({ username: req.username, password: req.password })
    .then(newUser => {
      res.status(201).json(newUser)
    })
    .catch(next)
})

router.post('/login', (req, res, next) => {
  const user = req.body
  if (!user.username || !user.password) {
    res.status(400).json({
      message: 'Yikes! Invalid username & password!'
    })
  } else {
    User.getById(user)
      .then(() => {
        res.status(201).json({
          message: 'Welcome!'
        })
      })
      .catch(next)
  }
})

module.exports = router;