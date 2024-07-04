// const knex = require("knex");

// const connectedKnex = knex({
//   client: "mysql",
//   connection: {
//     host: "127.0.0.1", // mettre le host jsp si on va rester en local ou pas
//     user: "your_mysql_user", // mettre le nom de l'utilisateur
//     password: "your_mysql_password", // mettre le mdp de mysql
//     database: "my_database" // mettre le nom de la bdd
//   },
//   pool: {
//     min: 2,
//     max: 10
//   }
// });

// module.exports = connectedKnex;



const knex = require("knex");

const connectedKnex  = knex ({
    client : "sqlite3",
    useNullAsDefault: true,
    connection : {
        filename : "msprbdd.sqlite3"
    }
}) 

module.exports = connectedKnex;
