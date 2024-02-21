const knex = require("../Config/Knex");

async function getAllPlants() {
    return knex
    .select("*")
    .from("plant")
};

async function plantById(id){
    return knex 
    .select(
        "plant.idPlant",
        "image.url",
        "plant.name",
        "plant.description"
    )
    .from("users")
    .join("advertisement" , "users.idUser" ,"=" , "advertisement.idUser")
    .join("plant" , "advertisement.idPlant" ,"=" , "plant.idPlant")
    .join("image" , "advertisement.idAdvertisement" , "=" , "image.idAdvertisement")
    .where("plant.idPlant" , id)
}

module.exports = {getAllPlants , plantById} ; 