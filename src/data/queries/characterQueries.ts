import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters($name: String) {
    characters(filter:{ name: $name }) {
      results {
        name,
        image,
        id,
        species
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name,
      image,
      id,
      species,
    }
  }
`