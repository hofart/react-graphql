import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharactersPage from "../../presentation/pages/CharactersPage";
import CharacterDetailsPage from "../../presentation/pages/DetailsCharactersPage";
import FavoriteCharactersPage from "../../presentation/pages/FavoriteCharactersPage";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/character-details/:id" element={<CharacterDetailsPage />} />
        <Route path="/favorites-characters" element={<FavoriteCharactersPage />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;