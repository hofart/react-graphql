import { Character } from "../../domain/entities/Character";

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <>
      <div key={character.id}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
      <button onClick={onClick}>Details</button>
    </>
  );
}

export default CharacterCard;