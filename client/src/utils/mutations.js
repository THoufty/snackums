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
        _id
      }
    }
  }
`;
export const ADD_PRODUCT_TO_CART = gql`
mutation addProduct2Cart(
  $productId: ID!
  $cartId: ID!
  $quantity: Int!
) {
  addToCart(
    productId: $productId
    cartId: $cartId
    quantity: $quantity
  ) {
    productId
    cartId
    quantity
  }
}`;