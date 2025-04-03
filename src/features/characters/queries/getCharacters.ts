import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters {
    characters {
      id
      name
      status
      species
      gender
      origin
      image
    }
  }
`;
