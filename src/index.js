const { ApolloServer, gql } = require('apollo-server');
const { Sequelize } = require('sequelize');
require('dotenv').config();
let postgresUrl = process.env.POSTGRES_URL;
const sequelize = new Sequelize(postgresUrl);

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`server started at ${url}`));

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully!');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
