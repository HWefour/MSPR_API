const knex = require("express");

async function signUp(user) {
    return knex("users").insert(user);
}

async function logIn() {

}
const logIn = async (email) => {
    return await knex('users').where('email', email).first();
};


module.exports = { signUp , logIn };