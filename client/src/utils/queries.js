import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;

export const QUERY_PRODUCT = gql`
{
  product {
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
query queryProductCart($cartId: String!){
  ProductInCart(cartId: $cartId) {
  productId
  userId
  quantity
  }
}
`;