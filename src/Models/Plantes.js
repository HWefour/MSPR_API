const knex = require("../Config/Knex");

async function getAllPlants() {
    return knex
    .select("*")
    .from("plant")
};

module.exports = {getAllPlants} ; 