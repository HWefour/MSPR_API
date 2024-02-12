const knex = require('../Config/Knex');

module.exports = {
  createImage: async (url, idAdvertisement) => {
    return await knex('image').insert({ url, idAdvertisement });
  },
};
