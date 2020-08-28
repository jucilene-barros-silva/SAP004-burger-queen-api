'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    active: DataTypes.BOOLEAN,
    client: DataTypes.STRING,
    table: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};