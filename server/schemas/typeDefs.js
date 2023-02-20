// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create your typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    email: String
    firstName: String
    lastName: String
    address: String
    isPremium: Boolean
    isAdmin: Boolean
}
type Auth {
  token: ID!
  user: User
}

  type Query {
   me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(email: String!, 
        password: String!, 
        firstName: String!, 
        lastName: String!, 
        address: String!, isAdmin: Boolean, isPremium: Boolean): Auth
  }

`;

// export the typeDefs
module.exports = typeDefs;