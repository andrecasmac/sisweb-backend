'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Andre Castillo',
        phone: '+526621234567',
        email: 'andrecastillo@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angel Marin',
        phone: '+526648923840',
        email: 'angelmarin@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marco Montoya',
        phone: '+526638279537',
        email: 'marcomontoya@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pablo Fong',
        phone: '+526673948261',
        email: 'pablofong@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
