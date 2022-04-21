'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bookingNumber: {
        type: Sequelize.INTEGER,
      },
      paymentMethod: {
        type: Sequelize.STRING,
      },
      bookingStatus: {
        type: Sequelize.STRING,
      },
      child: {
        type: Sequelize.INTEGER,
      },
      adult: {
        type: Sequelize.INTEGER,
      },
      infant: {
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      addressLine: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      zipCode: {
        type: Sequelize.INTEGER,
      },
      specialRequirement: {
        type: Sequelize.TEXT,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      totalPayment: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};