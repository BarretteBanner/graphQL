'use strict';
module.exports = (sequelize, DataTypes) => {
  const userWord = sequelize.define('userWord', {
    spanish: DataTypes.STRING,
    english: DataTypes.STRING,
    level: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    mastery: DataTypes.INTEGER
  }, {});
  userWord.associate = function(models) {
    // associations can be defined here
  };
  return userWord;
};