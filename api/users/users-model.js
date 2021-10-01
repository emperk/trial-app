const db = require('../../data/db-config');

const get = () => {
  return db('users');
}

const getById = (id) => {
  return db('users')
  .where({ id })
  .first()
}

const insert = (user) => {
  return db('users')
  .insert(user)
  .then(ids => {
    return getById(ids[0]);
  })
}

module.exports = {
  get,
  getById,
  insert
};