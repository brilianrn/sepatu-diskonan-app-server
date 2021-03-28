'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require('../data/product.json');

    data.map(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    })

    return queryInterface.bulkInsert('Products', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
