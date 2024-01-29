const knex = require("../Config/Knex");

async function getAllAdvertisement(){
    return knex
    .select(
        "advertisement.idAdvertisement",
        "title",
        "created_at",
        "updated_at",
        "city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "advertisement.description",
        "plant.name",
        "firstName",
        "lastName",
        "usersName",
        "bio"
    )
    .from("advertisement")
    .join("users", "users.idUser", "=", "advertisement.idUser")
    .join("plant" , "advertisement.idPlant" , "=" , "plant.idPlant")
    .orderBy("created_at" , "desc")
};

async function getAllAdvertisementById(id){
    return knex
    .select(
        "advertisement.idAdvertisement",
        "title",
        "created_at",
        "updated_at",
        "city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "description",
        "firstName",
        "lastName",
        "usersName",
        "bio"
    )
    .from("advertisement")
    .leftJoin("users", "users.idUser", "=", "advertisement.idUser")
    .where("idAdvertisement" , id)
};


module.exports = {
    getAllAdvertisement,
    getAllAdvertisementById
}