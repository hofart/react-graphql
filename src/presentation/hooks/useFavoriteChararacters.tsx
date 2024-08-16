import { useNavigate } from "react-router-dom";
import { favoritesCharactersVar } from "../../data/state/state";
import { Character } from "../../domain/entities";

type UseFavoriteCharacters = {
  handleFavorite: (character: Character) => void;
  removeFavoriteCharacter: (characterId: string) => void;
  goTo: () => void;
}

export const useFavoriteCharacters = (): UseFavoriteCharacters => {
  const navigate = useNavigate();

  const handleFavorite = (character: Character) => {
    const currentFavorite = favoritesCharactersVar()
    favoritesCharactersVar([...currentFavorite, character]);
  }

  const removeFavoriteCharacter = (characterId: string) => {
    const currentFavorite = favoritesCharactersVar()
    const remove = currentFavorite.filter((fav) => fav.id !== characterId);
    favoritesCharactersVar(remove);
  }

  const goTo = () => {
    return navigate('/favorites-characters');
  }

  return { handleFavorite, removeFavoriteCharacter, goTo }
}
