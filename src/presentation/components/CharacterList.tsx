import type { Character } from "../../domain/types";

type CharacterListProps = {
  loading: boolean,
  characters: Character[]
}

const CharacterList = ({ characters, loading }: CharacterListProps) => {
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;