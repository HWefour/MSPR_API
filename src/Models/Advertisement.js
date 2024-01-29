const knex = require ("../Config/Knex");


async function createAdvertisement(adv){
    return knex 
    .select("advertisement").insert(adv);
}

module.exports = createAdvertisement ;