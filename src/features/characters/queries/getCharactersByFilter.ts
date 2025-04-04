import { gql } from "@apollo/client";

export const GET_CHARACTERS_BY_FILTER = gql`
  query GetCharactersByFilter($name: String, $status: String, $species: String, $gender: String, $origin: String) {
    charactersByFilter(name: $name, status: $status, species: $species, gender: $gender, origin: $origin) {
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