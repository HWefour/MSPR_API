// models/userModel.js

const knex = require("../Config/Knex");
const bcrypt = require('bcrypt');

const signUp = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  return await knex('users').returning('*').insert({ ...user, password: hashedPassword });
};

const logIn = async (email) => {
  return await knex('users').where('email', email).first();
};

module.exports = { signUp, logIn };
