const express = require('express');

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

router.post('/register', async (req, res, next) => {
  
})



module.exports = router;