// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    address: String
    isPremium: Boolean
    isAdmin: Boolean
  }

  type Query {
    users: [User]
    user(username: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;