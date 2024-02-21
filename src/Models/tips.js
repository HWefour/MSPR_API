const knex = require("../Config/Knex");

async function getAllTips(){
    return knex("maintenanceTip").select("*")
}


async function postTips(tips){
    return knex("maintenaceTip").insert(tips);
}

module.exports = { getAllTips , postTips}