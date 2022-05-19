const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
  }

  input CreateUserInput {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  #Queries
  type Query {
    getAllUsers: [User!]!
  }

  #Mutations
  type Mutation {
    createUser(User: CreateUserInput!): User!
  }
`;

module.exports = { typeDefs };
