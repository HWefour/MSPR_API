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
        "description",
        "firstName",
        "lastName",
        "usersName",
        "bio"
    )
    .from("advertisement")
    .leftJoin("users", "users.idUser", "=", "advertisement.idUser")
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