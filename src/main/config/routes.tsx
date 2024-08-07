import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharactersPage from "../../presentation/pages/CharactersPage";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;