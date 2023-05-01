const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
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
    id: ID
    productId: ID!
    userId: ID!
    quantity: Int!
    orderId: Int
  }

  type ProductsInTheCart {
    image: String
    productId: ID!
    itemName: String
    priceUsd: Float!
    quantity: String!
    orderId: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User!
    users: [User]!
    user(email: String!): User
    products: [Product]!
    product(id: ID!): Product
    cart: [ProductInCart]!
    country(country: String!): [Product]!
    productsInTheCart: [ProductsInTheCart]!
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(userId: ID!, firstName: String, lastName: String, email: String, password: String): User
    deleteUser(userId: ID!): User
    login(email: String!, password: String!): Auth
    addProduct(itemName: String!,
               priceUsd: Float!,
               country: String,
               image: String,
               description: String!): Product
    updateProduct(productId: ID!,
                  itemName: String,
                  priceUsd: Float,
                  country: String,
                  image: String,
                  description: String): Product
    deleteProduct(productId: ID!): Product
    addToCart(productId: ID!, quantity: Int!): ProductInCart
    removeFromCart(productId: ID!): ProductInCart
    addOrderNumber(userId: ID!): ProductInCart
  }
`;

module.exports = typeDefs;

