import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        id
      }
    }
  }
`;

export const ADD_PRODUCT_TO_CART = gql`
mutation addProduct2Cart(
  $productId: ID!
  $quantity: Int!
) {
  addToCart(
    productId: $productId
    quantity: $quantity
  ) {
    productId
    quantity
  }
}`;

export const REMOVE_PRODUCT_FROM_CART = gql`
mutation removeProductFromCart($productId: ID!) {
  removeFromCart(
    productId: $productId
  ) {
    productId
  }
}`;