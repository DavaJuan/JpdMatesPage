import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FAQ from "./Components/FAQ/FAQ";
import CategoriasGrid from "./Components/CategoriasGrid/CategoriasGrid";
import Footer from "./Components/Footer/Footer";
import ProductDetail from "./Components/ProductDetail";
import ComoCurarTuMate from "./Components/Curado/ComoCurarTuMate";
import ProductList from "./Components/ProductList";
import Bombillas from "./Components/BombillasPage/Bombillas";
import MatePage from "./Components/MatePage";
import TermoPage from "./Components/TermoPage";
import ComboPage from "./Components/ComboPage";
import AccesorioPage from "./Components/AccesorioPage";

const App = () => {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/categorias" element={<CategoriasGrid />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/curarmate" element={<ComoCurarTuMate />} />
        <Route path="/:tipo/:id" element={<ProductDetail />} />
        <Route path="/bombilla" element={<Bombillas />} />
        <Route path="/mate" element={<MatePage />} />
        <Route path="/termo" element={<TermoPage />} />
        <Route path="/combo" element={<ComboPage />} />
        <Route path="/accesorio" element={<AccesorioPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
