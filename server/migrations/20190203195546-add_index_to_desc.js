'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('potential_investments',
      {
        fields: ['description'], using:'gin', operator:'gin_trgm_ops'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('potential_investments','description')
  }
};
