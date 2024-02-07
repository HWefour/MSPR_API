const knex = require("knex");

async function getAllPlants() {
    return knex.Client("plant").select("*")
};

module.exports = getAllPlants ; 