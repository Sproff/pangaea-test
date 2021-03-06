import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      title
      image_url
      price(currency: NGN)
    }
  }
`;
