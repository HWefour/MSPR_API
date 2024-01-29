const knex = require ("../Config/Knex");


async function createAdvertisement(adv){
    return knex("advertisement").insert(adv);
}

module.exports = {createAdvertisement} ;