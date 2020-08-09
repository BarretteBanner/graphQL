'use strict';
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define(
    'Word',
    {
      english: DataTypes.STRING,
      spanish: DataTypes.STRING,
      level: DataTypes.STRING,
    },
    {}
  );
  Word.associate = function (models) {
    // associations can be defined here
  };
  return Word;
};
