const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  type Cart {
    id: ID!
    user_id: ID!
  }

  type Product {
    id: ID!
    item_name: String!
    price_usd: Float!
    country: String!
    image: String
    description: String!
  }

  type ProductInCart {
    id: ID!
    product_id: ID!
    cart_id: ID!
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
    cart(user_id: ID!): [Product]!
  }

`;

module.exports = typeDefs;

//  type Mutation {
//    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//    updateUser(firstName: String, lastName: String, email: String, password: String): User
//    deleteUser(id: ID!): User
//    login(email: String!, password: String!): Auth
//    addProduct(id:ID!, item_name: String!, price_usd: Decimal!, description: String!): Product
//    updateProduct(id:ID!, item_name: String, price_usd: Decimal, country: String, image: String, description: String): Product
//    deleteProduct(id:ID!): Product
//    addToCart(id:ID!, product_id: ID!): Cart
//    removeFromCart(id:ID!, product_id: ID!): Cart
//  }
//
