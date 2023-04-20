const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: Sting
  }

  type Auth {
    token: ID
    user: User
  }

  type Cart {
    id: ID
    user_id
    price_total_usd
    product_id
  }

  type Product {
    id: ID
    item_name
    price_usd
    description
  }

  type Query {
    user: User
    product: Product
    cart: Cart
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    deleteUser(id: ID!): User
    login(email: String!, password: String!): Auth
    addProduct(id:ID!, item_name: String!, price_usd: Decimal!, description: String!): Product
    updateProduct(id:ID!, item_name: String, price_usd: Decimal, country: String, image: String, description: String): Product
    deleteProduct(id:ID!): Product
    addToCart(id:ID!, product_id: ID!): Cart
    removeFromCart(id:ID!, product_id: ID!): Cart
  }
`;

module.exports = typeDefs;
