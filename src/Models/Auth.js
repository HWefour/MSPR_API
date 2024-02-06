const knex = require("../Config/Knex");
const bcrypt = require('bcrypt');

async function signUp(user) {
    return knex("users").insert({
        firstName: user.firstName,
        lastName: user.lastName,
        usersName: user.usersName,
        email: user.email,
        city: user.city,
        bio: user.bio,
        password: user.password,
        idRole: user.idRole
    });
}

const logIn = async (email) => {
  return await knex('users').where('email', email).first();
};

module.exports = { signUp, logIn };
