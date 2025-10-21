'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.DOUBLE
      },
      paymentMethod: {
        type: Sequelize.STRING
      },
      orderDate: {
        type: Sequelize.DATE
      },
      statusId: {
        type: Sequelize.STRING
      },
      shippingAddress: {
        type: Sequelize.STRING
      },
      trackingNumber: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};