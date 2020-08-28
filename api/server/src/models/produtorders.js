'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProdutOrders = sequelize.define('ProdutOrders', {
    active: DataTypes.BOOLEAN,
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  ProdutOrders.associate = function(models) {
    // associations can be defined here
  };
  return ProdutOrders;
};