'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('potential_investments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.TEXT
      },
      gpi: {
        type: Sequelize.DECIMAL
      },
      vac: {
        type: Sequelize.DECIMAL
      },
      egi: {
        type: Sequelize.DECIMAL
      },
      price: {
        type: Sequelize.DECIMAL
      },
      location: {
        type: Sequelize.TEXT
      },
      rooms: {
        type: Sequelize.DECIMAL
      },
      bathrooms: {
        type: Sequelize.DECIMAL
      },
      address: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('potential_investments');
  }
};
