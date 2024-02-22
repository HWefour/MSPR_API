const knex = require("../Config/Knex");

async function getAllPlants() {
    return knex
        .select("*")
        .from("plant")
};

async function plantById(id) {
    return knex
        .select(
            "plant.idPlant",
            "url",
            "plant.name",
            "plant.description"
        )
        .from("plant")
        .join("advertisement", "plant.idPlant", "=", "advertisement.idPlant")
        .join("image", "advertisement.idAdvertisement", "=", "image.idAdvertisement")
        .where("plant.idPlant", id)
}

module.exports = { getAllPlants, plantById }; 