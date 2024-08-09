import { ReactiveVar, useQuery, useReactiveVar } from "@apollo/client";
import { GET_CHARACTERS } from "../../data/queries/characterQueries";
import { Character, CharactersData } from "../../domain/entities/Character";
import { charactersVar, characterVar, filterNameVar, loadingVar } from "../../data/state/state";
import { useNavigate } from "react-router-dom";

type UseCharacters = {
  characters: ReactiveVar<Character[]>;
  handleCharacterClick: (id: string) => void;
};

export const useCharacters = (): UseCharacters => {
  const navigate = useNavigate();
  const filteredName = useReactiveVar(filterNameVar);

  const { data } = useQuery<{ characters: CharactersData }>(GET_CHARACTERS, {
    variables: {
      name: filteredName.name
    },
    onCompleted: (data) => {
      charactersVar(data.characters.results)
      loadingVar(false);
    }
  });

  const handleCharacterClick = (id: string) => {
    const filteredCharacter = data?.characters.results.find(character => character.id === id);
    characterVar(filteredCharacter);
    return navigate(`/character-details/${id}`);
  };

  return {
    characters: charactersVar || [],
    handleCharacterClick
  }
}