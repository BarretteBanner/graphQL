const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type User{
        _id: ID!
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

    type LoginData{
        userId: String!
    }
    type RootQuery{
        login(email: String!, password: String!): LoginData!
    }
schema{
    query: RootQuery
    mutation : RootMutation
}`);
