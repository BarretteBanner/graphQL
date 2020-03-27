const sequelize = require('../db/models');
const bcrypt = require('bcrypt');
const validator = require('validator');

const db = (module.exports = {
  createUser: async function ({ userInput }, req) {
    const errors = [];
    if (!validator.isEmail(userInput.email)) {
      errors.push({ message: 'Email is invalid.' });
    }
    if (
      validator.isEmpty(userInput.email) ||
      validator.isEmpty(userInput.password)
    ) {
      errors.push({ message: 'Email and password required!' });
    }
    const database = await sequelize();
    const existingUser = await User.findAll({
      where: { email: userInput.email },
    });
    if (existingUser) {
      const error = new Error('User exists already!');
      throw error;
    }
    if (errors.length > 0) {
      const error = new Error('Invalid input.');
      throw error;
    }
    const hashedPw = await bcrypt(userInput.password, 12);
    const createdUser = await database.sequelize.models.user.create({
      email: userInput.email,
      password: hashedPw,
    });
    return createdUser;
  },
  login: async function ({ email, password }) {
    const user = await db.User.find({
      where: {
        email: email,
        password: password,
      },
    });
    return user;
  },
});
