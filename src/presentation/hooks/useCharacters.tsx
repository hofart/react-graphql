import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../data/queries/charactersQueries";
import { CharactersData } from "../../domain/entities/Character";
import { charactersVar, loadingVar } from "../../data/state/state";

export const useCharacters = () => {
  const { data, loading } = useQuery<{ characters: CharactersData }>(GET_CHARACTERS, {
    onCompleted: (data) => {
      charactersVar(data.characters.results);
      loadingVar(false);
    }
  });

  return {
    characters: data?.characters.results || [],
    loading
  }
};