import { useEffect, useState } from "react";
import { CharacterCard, Input } from "../components";
import { useReactiveVar } from "@apollo/client";
import { charactersVar, loadingVar, filterNameVar } from "../../data/state/state";
import { useCharacters } from "../hooks/useCharacters";

const CharacterList = () => {
  const { handleCharacterClick } = useCharacters();

  const [name, setName] = useState("");

  const characters = useReactiveVar(charactersVar);
  const isLoading = useReactiveVar(loadingVar);

  useEffect(() => {
    filterNameVar({
      ...filterNameVar(),
      name: name.trim().length > 3 ? name : ''
    });
  }, [name]);

  console.log(isLoading)

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Input
        label="Find character"
        name="character"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={() => handleCharacterClick(character.id)}
        />
      ))}
    </div>
  );
};

export default CharacterList;