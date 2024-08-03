import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters($page: Int, $filter: String) {
    characters(page: $page, filter: { species: $filter, name: $filter }) {
      results {
        name,
        image,
        id,
        species,
      }
    }
  }
`;