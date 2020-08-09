const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type User{
        id: ID!
        email: String!
        password: String!
    }
    type Word{
        spanish: String!
        english: String!
        level: String
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
        getWords(levelChoice: String!): [Word!]!
        getUsers: [User!]!
    }
schema{
    query: RootQuery
    mutation : RootMutation
}`);
