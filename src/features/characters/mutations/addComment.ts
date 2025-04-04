import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation AddComment($characterId: Int!, $text: String!) {
    addComment(characterId: $characterId, text: $text) {
      id
      text
    }
  }
`;