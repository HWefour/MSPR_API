const knex = require('../Config/Knex');

async function createImage(url,idAdvertisement){
  return await knex("image").insert({url , idAdvertisement});
}

async function  getImagesByAdvertisementId(idAdvertisement){
  return knex("image").select("*").where('image.idAdvertisement' , idAdvertisement)
};

module.exports = {createImage , getImagesByAdvertisementId}