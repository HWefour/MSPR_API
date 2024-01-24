const knex = require("../Config/Knex");

async function getInfoAccount(id) {
    return knex 
    .select("*")
    .from("users")
    .where('idUser' , id)
};

async function deleteAccount(id){
    return knex 
    .delete("*")
    .from("users")
    .where("idUser" , id)
};

async function editInfoAccount(id){
    return knex 
    .update(
        "firstName",
        "lastName",
        "userName",
        "city"
    )
    .from("users")
    .where("idUser" , id)
};

// faire requete,pour la deconnexion

module.exports = {
    getInfoAccount,
    deleteAccount,
    editInfoAccount
};