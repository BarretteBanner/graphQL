const sequelize = require('../db/models');
const bcrypt = require('bcrypt');
const db = (module.exports = {
  createUser: async function ({ userInput }, req) {
    const database = await sequelize();
    const existingUser = database.sequelize.models.user.findAndCountAll({
      where: { email: userInput.email },
    });
    if ((await existingUser).count > 0) {
      const error = new Error('User exists already!');
      throw error;
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12);
    const createdUser = await database.sequelize.models.user.create({
      email: userInput.email,
      password: hashedPw,
    });
    return createdUser;
  },
  login: async function ({ email, password }) {
    const database = await sequelize();
    const aUser = await database.sequelize.models.user.findOne({
      where: { email: email },
    });
    if (aUser === null) {
      console.log('no user found');
    }
    if (aUser === null) {
      const error = new Error('User not found!');
      throw error;
    }
    const hash = bcrypt.hashSync(password, aUser.password);
    const match = bcrypt.compareSync(password, hash);
    if (!match) {
      const error = new Error('Password is incorrect.');
      throw error;
    }
    return aUser;
  },
});
