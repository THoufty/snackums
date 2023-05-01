import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($email: String!){
    user(email: $email) {
      firstName
      lastName
    }
  }
`;

export const QUERY_ME = gql`
  query me{
    user {
      id
    }
  }
`;

export const QUERY_PRODUCT = gql`
query getSingleProduct($productId: ID!){
  product(id: $productId) {
    id
    itemName
    priceUsd
    country
    image
    description
  }
}
`;

export const QUERY_PRODUCT_COUNTRY = gql`
query getSingleCountry($country: String!){
country(country: $country) {
    id
    itemName
    priceUsd
    image
    description
  }
}
`;

export const QUERY_PRODUCT_CART = gql`
query queryProductCart{
  productsInTheCart {
  image
  productId
  itemName
  priceUsd
  quantity
  }
}
`;