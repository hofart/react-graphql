import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../data/queries/charactersQueries";
import { CharactersData } from "../../domain/entities/Character";

export const useCharacters = () => {
  const { data, loading } = useQuery<{ characters: CharactersData }, { name: string }>(GET_CHARACTERS);

  return {
    characters: data?.characters.results || [],
    loading
  }
};