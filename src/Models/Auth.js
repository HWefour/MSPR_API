const knex = require("express");

async function signIn(user){
    return knex("users").insert(user);
}

async function logIn(){
    
}


module.exports = {signIn};