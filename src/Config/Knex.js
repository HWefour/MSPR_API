const knex = require("knex");

const connectedKnex  = knex ({
    client : "sqlite3",
    connection : {
        filename : "bdd.sqlite3"
    }
}) 

module.exports = connectedKnex;