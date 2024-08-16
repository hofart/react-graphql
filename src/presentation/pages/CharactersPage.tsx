import { useEffect, useState } from "react";
import { CharacterCard, Input, Button } from "../components";
import { useReactiveVar } from "@apollo/client";
import { charactersVar, loadingVar, filterNameVar } from "../../data/state/state";
import { useCharacters } from "../hooks/useCharacters";
import { useFavoriteCharacters } from "../hooks/useFavoriteChararacters";

const CharacterList = () => {
  const { handleCharacterClick } = useCharacters();
  const { handleFavorite, goTo } = useFavoriteCharacters();

  const [name, setName] = useState("");

  const characters = useReactiveVar(charactersVar);
  const isLoading = useReactiveVar(loadingVar);

  useEffect(() => {
    filterNameVar({
      ...filterNameVar(),
      name: name.trim().length > 3 ? name : ''
    });
  }, [name]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Input
        label="Find character"
        name="character"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <Button onClick={() => goTo()}>favorites characters</Button>

      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        >
          <Button onClick={() => handleCharacterClick(character.id)}>details</Button>
          <Button onClick={() => handleFavorite(character)}>add to favorite</Button>
        </CharacterCard>
      ))}
    </div>
  );
};

export default CharacterList;