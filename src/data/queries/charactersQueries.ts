import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        name,
        image,
        id,
        species
      }
    }
  }
`;