'use strict';
const User = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    passward: DataTypes.STRING,
  });

  User.associate = function (models) {
    models.User.hasMany(models.Task);
  };
  return User;
};

module.exports = User;
