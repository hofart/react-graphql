import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import { useReactiveVar } from "@apollo/client";
import { loadingVar } from "../../data/state/state";

const DetailsCharactersPage = () => {
  const { id } = useParams();
  const { character } = useCharacter(Number(id))
  const isLoading = useReactiveVar(loadingVar);

  if (isLoading) return <p>loading...</p>;
  if (!character) return <p>Character not found</p>;

  return (
    <>
      <div>
        <h1>Details</h1>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
      <button onClick={() => window.history.back()}>back</button>
    </>
  )
}

export default DetailsCharactersPage