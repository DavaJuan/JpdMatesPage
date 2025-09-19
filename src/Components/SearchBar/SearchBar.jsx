// import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Image/jpd.png";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  const navigate = useNavigate();

  const handleClick = (item) => {
    setSearchTerm(""); // limpia el input
    setFiltered([]);
    navigate(`/${item.tipo}/${item.id}`);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = data.filter((item) =>
      item.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(results);
  };

  return (
    <div className="bg-[#100d28] p-6 flex flex-col items-center md:flex-row md:items-center justify-center gap-10">
      <Link to="/catalogo">
        <img
          src={logo}
          alt="jpdMates"
          className="h-35 md:h-90 object-contain"
        />
      </Link>

      {/* CONTENEDOR RELATIVO para controlar el dropdown */}
      <div className="relative w-full md:w-96">
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="¿Qué estás buscando?"
            className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-700 focus:outline-none"
          />
          {/* <button>
            <CiSearch className="text-white ml-2 cursor-pointer" size={20} />
          </button> */}
        </div>

        {/* DROPDOWN ABSOLUTO DENTRO DE CONTENEDOR RELATIVO */}
        {filtered.length > 0 && (
          <ul className="absolute top-full left-0 z-50 bg-white w-full border border-gray-200 rounded-md shadow-lg mt-2 max-h-60 overflow-y-auto">
            {filtered.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item)}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium leading-tight">
                    {item.nombre}
                  </p>
                  <p className="text-xs text-gray-500 line-through">
                    {item.precioOriginal &&
                      `$${item.precioOriginal.toLocaleString()}`}
                  </p>
                  <p className="text-sm text-[#a05c3f] font-semibold">
                    ${item.precio.toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
