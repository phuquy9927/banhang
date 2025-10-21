'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.DOUBLE,
    paymentMethod: DataTypes.STRING,
    orderDate: DataTypes.DATE, 
    statusId: DataTypes.STRING,
    shippingAddress: DataTypes.STRING,
    trackingNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};