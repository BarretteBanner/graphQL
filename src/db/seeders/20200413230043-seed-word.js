'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Words', [
      {
        spanish: 'Anaranjado',
        english: 'Orange',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Amarillo',
        english: 'Yellow',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Azul',
        english: 'Blue',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Rojo',
        english: 'Red',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Verde',
        english: 'Green',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Negro',
        english: 'Black',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Marrón',
        english: 'Brown',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Café',
        english: 'Brown',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Rosado',
        english: 'Pink',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Morado',
        english: 'Purple',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spanish: 'Blanco',
        english: 'White',
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Words', null, {});
  },
};
