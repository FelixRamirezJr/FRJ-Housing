'use strict';
module.exports = (sequelize, DataTypes) => {
  const potential_investment = sequelize.define('potential_investment', {
    url: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    location: DataTypes.TEXT,
    rooms: DataTypes.DECIMAL,
    bathrooms: DataTypes.DECIMAL,
    gpi: DataTypes.DECIMAL,
    vac: DataTypes.DECIMAL,
    egi: DataTypes.DECIMAL,
    address: DataTypes.TEXT,
    description: DataTypes.TEXT,
    state: DataTypes.TEXT,
    city: DataTypes.TEXT,
  }, {});
  potential_investment.associate = function(models) {
    // associations can be defined here
  };
  return potential_investment;
};
