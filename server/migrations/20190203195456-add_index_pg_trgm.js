'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION pg_trgm;');
  },

  down: (queryInterface, Sequelize) => {
    // Don't need to do anything here
    return Promise.resolve()
  }
};
