'use strict';
const User = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    passward: DataTypes.STRING,
  });

  return User;
};

module.exports = User;
