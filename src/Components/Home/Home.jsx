import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../NavBar/NavBar";
import stock from "../../../public/stock.json";

const Home = () => {
  const allProductos = [...stock];

  return (
    <div>
      <SearchBar data={allProductos} />
      <Navbar />
    </div>
  );
};

export default Home;
