const knex = require("../Config/Knex");

async function getAllTips(){
    return knex("maintenanceTip").select("*")
}


async function postTips(tips){
    return knex("maintenaceTip").insert(tips);
}

async function tipsPlant(id){
    return knex("maintenanceTips").select("*").where("idPlant" , id);
}

module.exports = { getAllTips , postTips , tipsPlant}