const express = require('express');
const graphqlHttp = require('express-graphql');
const graphqlSchema = require('../schema');
const graphqlResolver = require('./graphql/resolvers');

require('dotenv').config();
const sequelize = require('./db/models');
////const user = db.User.findAll();
//console.log(user);
const start = async () => {
  const db = await sequelize();
  try {
    await db.sequelize.authenticate();
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
};

start();
