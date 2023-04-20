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
    _id
    item_name
    price_usd
    country
    image
    description
  }
}
`;

export const QUERY_PRODUCT_COUNTRY = gql`
query getSingleCountry($country: String!){
product(country: $country) {
    _id
    item_name
    price_usd
    image
    description
  }
}
`;
