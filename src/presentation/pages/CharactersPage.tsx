import { useCharacters } from "../hooks/useCharacters";

const CharacterList = () => {
  const { characters, loading } = useCharacters();

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