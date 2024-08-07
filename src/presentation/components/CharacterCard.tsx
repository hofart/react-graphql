import { Character } from "../../domain/entities/Character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div key={character.id}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterCard;