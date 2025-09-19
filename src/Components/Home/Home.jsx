import SearchBar from "../SearchBar/SearchBar";
import matesData from "../../../public/stock.json";
import bombillasData from "../../../public/bombillas.json";
import termosData from "../../../public/termos.json";
import combosData from "../../../public/combos.json";
import accesoriosData from "../../../public/accesorios.json";
import Navbar from "../NavBar/NavBar";

const Home = () => {
  const allProductos = [
    ...matesData,
    ...bombillasData,
    ...termosData,
    ...combosData,
    ...accesoriosData,
  ];

  return (
    <div>
      <SearchBar data={allProductos} />
      <Navbar />
    </div>
  );
};

export default Home;
