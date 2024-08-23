import { useReactiveVar } from "@apollo/client";
import { favoritesCharactersVar } from "../../data/state/state";
import { useFavoriteCharacters } from "../hooks/useFavoriteChararacters";
import { Button } from "../components";

const DetailsCharactersPage = () => {
  const { removeFavoriteCharacter } = useFavoriteCharacters()
  const characters = useReactiveVar(favoritesCharactersVar);

  return (
    <>
      <h2>Favorite Characters</h2>

      {!characters.length ? <p>You dont have favorites characters</p> : null}

      {characters?.map((favorite) => (
        <ul key={favorite.id}>
          <li>
            <div>{favorite.name}</div>
            <Button onClick={() => removeFavoriteCharacter(favorite.id)}>delete</Button>
          </li>
        </ul>
      ))}
      <button onClick={() => window.history.back()}>back</button>
    </>
  )
}

export default DetailsCharactersPage