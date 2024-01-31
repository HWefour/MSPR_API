const knex = require("../Config/Knex");

async function getAllUsers() {
    return knex
    .select("*")
    .from("users")
}


async function getInfoUser(id) {
    return knex 
    .select(
        "users.idUser",
        "firstName",
        "lastName",
        "usersName",
        "email",
        "bio",
        "users.idRole",
        "role.name",
        "role.description",
        "advertisement.idAdvertisement",
        "title",
        "advertisement.description",
        "start_date",
        "end_date",
        "created_at",
        "updated_at",
        "city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "plant.idPlant",
        "plant.name as plantName",
        "plant.description as plantDesc",
        "image.idAdvertisement",
        "url",
        "idImage"
    )
    .from("users")
    .join("advertisement" , "advertisement.idUser" , "=" , "users.idUser" )
    .join("role" , "users.idRole" , "=" , "role.idRole")
    .join("plant" , "advertisement.idPlant" , "=" , "plant.idPlant")
    .join("image" , " advertisement.idAdvertisement" , "=" , "image.idAdvertisement")
    .where("users.idUser" , id)
};

async function createUser(user) {
    return knex("users").insert(user)
};

async function deleteUser(id){
    return knex 
    .delete("*")                            
    .from("users")
    .where("idUser" , id).del()
}


async function editUser(id , user){
    return knex("users").where("idUser",id).update(user)
};

async function getAdvertisementForUser(id){
    return knex 
    .select(
        "advertisement.idAdvertisement",
        "title",
        "created_at",
        "updated_at",
        "city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "start_date",
        "end_date",
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

async function getAllAdvertisements() {
    return knex("advertisement").select("*").orderBy("idAdvertisement" , "desc")
}

async function getAllAdvertisementWithInfo(){
    return knex
    .select(
        "advertisement.idAdvertisement",
        "title",
        "created_at",
        "updated_at",
        "city",
        "advertisement.idPlant",
        "advertisement.idUser",
        "start_date",
        "end_date",
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

async function deleteAdvertisement(id){
    return knex
    .delete("*")
    .from("advertisement")
    .where("idAdvertisement" , id)
};

module.exports = {
    getAllUsers ,
    getAllAdvertisements, 
    getAllAdvertisementWithInfo,
    getInfoUser,
    createUser,
    deleteUser,
    editUser,
    getAdvertisementForUser,
    deleteAdvertisement
}