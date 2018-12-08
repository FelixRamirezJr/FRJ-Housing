'use strict';
module.exports = (sequelize, DataTypes) => {
  const potential_investment = sequelize.define('potential_investment', {
    source: DataTypes.STRING,
    location: DataTypes.STRING,
    pricing: DataTypes.STRING,
  }, {});
  potential_investment.associate = function(models) {
    // associations can be defined here
  };
  return potential_investment;
};
