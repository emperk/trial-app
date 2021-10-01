const users = [
  { username: 'mozart', password: 'requiem' },
  { username: 'beethoven', password: 'furelise' }
]

exports.seed = async function (knex) {
  await knex('users').insert(users)
}