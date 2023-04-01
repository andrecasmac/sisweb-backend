'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        number: 123,
        date: new Date(),
        status: 'Delivered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 124,
        date: new Date(),
        status: 'Shipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 125,
        date: new Date(),
        status: 'Processing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 126,
        date: new Date(),
        status: 'Shipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
