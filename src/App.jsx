import Home from "./Components/Home/Home";
import Catalogo from "./Components/Catalogo/Catalogo";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FAQ from "./Components/FAQ/FAQ";
import CategoriasGrid from "./Components/CategoriasGrid/CategoriasGrid";
import Bombillas from "./Components/BombillasPage/Bombillas";
import Termos from "./Components/TermosPage/Termos";
import Combos from "./Components/CombosPage/Combos";
import MateDetail from "./Components/MateDetail/MateDetail";
import Footer from "./Components/Footer/Footer";
import Accesorios from "./Components/AccesoriosPage/Accesorios";
import BombillaDetail from "./Components/BombillaDetail/BombillaDetail";
import ProductDetail from "./Components/ProductDetail";
import TermoDetail from "./Components/TermoDetail/TermoDetail";
import ComoCurarTuMate from "./Components/Curado/ComoCurarTuMate";

const App = () => {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/catalogo" element={<CategoriasGrid />} />
        <Route path="/mates" element={<Catalogo />} />
        <Route path="/bombillas" element={<Bombillas />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/mate/:id" element={<MateDetail />} />
        <Route path="/bombillas/:id" element={<BombillaDetail />} />
        <Route path="/termos/:id" element={<TermoDetail />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/curarmate" element={<ComoCurarTuMate />} />
        <Route path="/:tipo/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
