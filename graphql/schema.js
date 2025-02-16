const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type TestData {
    text: String!
    view: Int!
  }

  type RootQuery {
    hello: TestData!
  }

  type Post {
    _id: ID!
    name: String!
    title: String!
    content: String!
    creator: User
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    pw: String
    status: String!
    posts: [Post!]
  }

  input UserInputData {
    email: String!
    name: String!
    pw: String!
  }

  type RootMutation {
    createUser(userInput: UserInputData): User!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);