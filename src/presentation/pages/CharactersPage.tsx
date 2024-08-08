import CharacterCard from "../components/CharacterCard";
import { useReactiveVar } from "@apollo/client";
import { charactersVar, loadingVar } from "../../data/state/state";
import { useCharacters } from "../hooks/useCharacters";

const CharacterList = () => {
  useCharacters();

  const characters = useReactiveVar(charactersVar);
  const isLoading = useReactiveVar(loadingVar);


  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;