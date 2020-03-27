const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type User{
        id: ID!
        email: String!
        password: String!
    }

    input UserInputData{
        email: String!
        password: String!
    }

    type RootMutation{
        createUser(userInput: UserInputData): User!
    }

    type RootQuery{
        login(email: String!, password: String!): User!
    }
schema{
    query: RootQuery
    mutation : RootMutation
}`);
