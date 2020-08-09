const express = require('express');
const graphqlHttp = require('express-graphql');
const graphqlSchema = require('../schema');
const graphqlResolver = require('./graphql/resolvers');
const cors = require('cors');

require('dotenv').config();
const sequelize = require('./db/models');
const start = async () => {
  const db = await sequelize();
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  const app = express();
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    next();
  });
  app.options('*', cors());
  app.use(
    '/graphql',
    graphqlHttp({
      schema: graphqlSchema,
      rootValue: graphqlResolver,
      graphiql: true,
    })
  );

  app.listen(process.env.PORT, () =>
    console.log(
      `Server ready for use at http://localhost:${process.env.PORT}/graphql`
    )
  );
};

start();
