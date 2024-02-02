const knex = require("knex");

const connectedKnex  = knex ({
    client : "sqlite3",
    useNullAsDefault: true,
    connection : {
        filename : "msprbdd.sqlite3"
    }
}) 

module.exports = connectedKnex;