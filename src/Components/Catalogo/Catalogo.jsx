import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catalogo = () => {
  const [mates, setMates] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  useEffect(() => {
    fetch("/stock.json")
      .then((res) => res.json())
      .then((data) => setMates(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-10">
        {mates.slice(0, visibleCount).map((mate) => (
          <Link
            to={`/mate/${mate.id}`}
            key={mate.id}
            className="gap-6 flex-wrap flex justify-center p-4 cursor-pointer"
          >
            <div className="w-full bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x1 mt-1 mb-1 lg:mt-0">
              <img
                className="h-100 w-full object-cover rounded-t-lg"
                src={mate.imagen}
                alt={mate.nombre}
              />
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2">{mate.nombre}</h2>
                <p className="text-sm text-gray-600 mt-2 mb-2">
                  {mate.descripcion}
                </p>
                <span className="text-xl font-semibold">${mate.precio}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="p-6">
        {visibleCount < mates.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-[#100d28] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#1f305e] cursor-pointer"
            >
              Cargar más
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
