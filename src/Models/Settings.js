const knex = require("../Config/Knex");

async function getInfoAccount(id) {
    return knex 
    .select("*")                             // add the body params
    .from("users")
    .where('idUser' , id)
};

async function deleteAccount(id){
    return knex 
    .delete("*")                             // add the body params
    .from("users")
    .where("idUser" , id)
};

async function editInfoAccount(id){
    return knex 
    .update(
        "firstName",
        "lastName",                           // add the body params
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