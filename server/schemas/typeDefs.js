const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Cart {
    id: ID!
    user_id: ID!
  }

  type Product {
    id: ID!
    itemName: String!
    priceUsd: Float!
    country: String!
    image: String
    description: String!
  }

  type ProductInCart {
    id: ID!
    productId: ID!
    cartId: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(email: String!): User
    products: [Product]!
    product(id: ID!): Product
    cart(userId: ID!): [Product]!
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    deleteUser(id: ID!): User
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;

//    addProduct(id:ID!, itemName: String!, priceUsd: Decimal!, description: String!): Product
//    updateProduct(id:ID!, itemName: String, priceUsd: Decimal, country: String, image: String, description: String): Product
//    deleteProduct(id:ID!): Product
//    addToCart(id:ID!, productId: ID!): Cart
//    removeFromCart(id:ID!, productId: ID!): Cart
//  }
//
