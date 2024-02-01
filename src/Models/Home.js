const knex = require("../Config/Knex");

async function getAllAdvertisement(){
    return knex
    .select(
        "advertisement.idAdvertisement",
        "title",
        "created_at",
        "city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "advertisement.description",
        "start_date",
        "end_date",
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

async function getAdvertisementByCity(city){
    return knex 
    .select(
        "advertismeent.idAdvertisement",
        "title",
        "created_at",
        "city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "advertisement.description",
        "start_date",
        "end_date",
        "plant.name",
        "firstName",
        "lastName",
        "usersName",
        "bio"
    )
    .from("advertisement")
    .from("advertisement")
    .join("users", "users.idUser", "=", "advertisement.idUser")
    .join("plant" , "advertisement.idPlant" , "=" , "plant.idPlant")
    .where("users.city" , city)
    
}

async function getAllAdvertisementById(id){
    return knex
    .select(
        "advertisement.idAdvertisement",
        "title",
        "created_at",
        "users.city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "advertisement.description",
        "start_date",
        "end_date",
        "plant.name",
        "firstName",
        "lastName",
        "usersName",
        "bio"
    )
    .from("advertisement")
    .join("users", "users.idUser", "=", "advertisement.idUser")
    .join("plant" , "advertisement.idPlant" , "=" , "plant.idPlant")
    .where("idAdvertisement" , id)
};

async function getAllAdvertisementFiltered(id){
    return knex
    .select(
        "advertisement.idAdvertisement",
        "title",
        "created_at",
        "city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "advertisement.description",
        "start_date",
        "end_date",
        "plant.name",
        "firstName",
        "lastName",
        "usersName",
        "bio"
    )
    .from("advertisement")
    .join("users", "users.idUser", "=", "advertisement.idUser")
    .join("plant" , "advertisement.idPlant" , "=" , "plant.idPlant")
    .where("idPlant" , id)
};


module.exports = {
    getAllAdvertisement,
    getAllAdvertisementById,
    getAllAdvertisementFiltered,
    getAdvertisementByCity
}