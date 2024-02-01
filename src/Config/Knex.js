const knex = require("knex");

const connectedKnex  = knex ({
    client : "sqlite3",
    connection : {
        filename : "msprbdd.sqlite3"
    }
}) 

module.exports = connectedKnex;