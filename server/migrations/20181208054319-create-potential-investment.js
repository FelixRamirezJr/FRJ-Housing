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
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      rooms: {
        type: Sequelize.STRING
      },
      bathrooms: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    },{
      timestamps: true,
    }).then(() => queryInterface.addIndex('potential_investments', ['url', 'location']))),
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('potential_investments');
  }
};
