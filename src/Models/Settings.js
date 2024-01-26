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
    .where("idUser" , id).del()
};

/* async function deleteAccount(id){
    return knex 
        .transaction(async (trx) => {
            await trx("users")
                .where("users.idUser", id)
                .del();                                                 // en cas de suppression de l'utilisateur on supprime les annonces lié a lui

            await trx("advertisement")
                .where("advertisement.idUser", id)
                .del();
        });
}; */

async function editInfoAccount(id , acc){
    return knex 
    .update(
        "firstName",
        "lastName",                          
        "usersName",
        "bio",
        "email"
        /* "city" */
    )
    .from("users")                                                                      // faire un join pour recuperer city depuis advertisement
    .where("idUser" , id).update(acc)
};

// faire requete,pour la deconnexion

module.exports = {
    getInfoAccount,
    deleteAccount,
    editInfoAccount
};