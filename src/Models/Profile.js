const knex = require("../Config/Knex");

async function getProfileDetails(id){
    return knex 
    .select(
        "usersName",
        "bio",
        "users.idUser"
    )
    .from("users")
    .where("users.idUser" , id)
};

async function myPlants(id){
    return knex 
    .select(
        "image.url"
    )
    .from("users")
    .join("advertisement" , "users.idUser" ,"=" , "advertisement.idUser")
    .join("plant" , "advertisement.idPlant" ,"=" , "plant.idPlant")
    .join("image" , "advertisement.idAdvertisement" , "=" , "image.idAdvertisement")
    .where("users.idUser" , id)
}

async function myAdvertisement(id){
    return knex 
    .select(
        "advertisement.idAdvertisement",
        "title",
        "created_at",
        "updated_at",
        "city",
        "start_date",
        "end_date",
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
    .where("users.idUser" , id)
};


module.exports ={getProfileDetails , myPlants , myAdvertisement};