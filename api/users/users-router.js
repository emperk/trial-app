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



module.exports = router;