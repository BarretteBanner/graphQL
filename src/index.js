const { Sequelize } = require('sequelize');
const express = require('express');
const graphqlHttp = require('express-graphql');

const graphqlSchema = require('../schema');
const graphqlResolver = require('../models/resolvers');

require('dotenv').config();

const User = require('../models/user');
console.log(`User is ${User}`);

const sequelize = new Sequelize({
  dialect: 'postgres',
  url: process.env.POSTGRES_URL,
});
sequelize.sync({ force: true }).then(() => console.log('done'));
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully!');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const app = express();
app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);
app.listen(4001, () =>
  console.log('Server launched at http://localhost:4001/graphql')
);
