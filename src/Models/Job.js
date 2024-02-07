const knex = require("../Config/Knex");


async function getAllJobs() {
    return knex
    .select(
        "idJob",
        "dates",
        "job.idUser",
        "job.idAdvertisement",
        "firstName",
        "lastName",
        "usersName",
        "bio",
        "title",
        "advertisement.description",
        "start_date",
        "end_date",
        "idPlant"
        )
        .from('job')
        .join("users" , "job.idUser","=", "users.idUser")
        .join('advertisement' , "job.idAdvertisement" , "=" , "advertisement.idAdvertisement")
        .orderBy("start_date" , "desc");
}


async function createJob(job){
    return knex("job").insert(job); 
};

module.exports = {getAllJobs,createJob};