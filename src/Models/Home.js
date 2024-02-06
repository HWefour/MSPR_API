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

async function getAdvertisementByCity(city) {
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
        .join("plant", "advertisement.idPlant", "=", "plant.idPlant")
        .where("users.city", city)
        .orderBy("start_date" , "desc")
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
    .where("plant.idPlant" , id)
    .orderBy("start_date" , "desc")
};


module.exports = {
    getAllAdvertisement,
    getAllAdvertisementById,
    getAllAdvertisementFiltered,
    getAdvertisementByCity
}