import { Character } from "../../domain/entities/Character";

interface CharacterCardProps {
  character: Character;
  children: React.ReactNode;
}

const CharacterCard = ({ character, children }: CharacterCardProps) => {
  return (
    <>
      <div key={character.id}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
      <div>{children}</div>
    </>
  );
}

export default CharacterCard;