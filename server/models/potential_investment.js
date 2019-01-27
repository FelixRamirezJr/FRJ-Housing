'use strict';
module.exports = (sequelize, DataTypes) => {
  const potential_investment = sequelize.define('potential_investment', {
    url: DataTypes.STRING,
    price: DataTypes.STRING,
    location: DataTypes.STRING,
    rooms: DataTypes.STRING,
    bathrooms: DataTypes.STRING,
    gpi: DataTypes.DECIMAL,
    vac: DataTypes.DECIMAL,
    egi: DataTypes.DECIMAL,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
  }, {});
  potential_investment.associate = function(models) {
    // associations can be defined here
  };
  return potential_investment;
};
