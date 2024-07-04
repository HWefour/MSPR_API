const knex = require("../Config/Knex");

async function getAllTips(){
    return knex("maintenanceTip").select("*")
}


async function postTips(tips){
    return knex("maintenanceTip").insert(tips);
}

async function tipsPlant(id){
    return knex("maintenanceTip").select("*").where("maintenanceTip.idPlant" , id);
}

module.exports = { getAllTips , postTips , tipsPlant}