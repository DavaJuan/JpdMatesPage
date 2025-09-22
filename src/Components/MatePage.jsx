import { Link } from "react-router-dom";
import stock from "../../public/stock.json";

const MatePage = () => {
  const mates = stock.filter((producto) => producto.tipo === "mate");

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-10 ">
        {mates.map((mate) => (
          <Link
            to={`/mate/${mate.id}`}
            key={mate.id}
            className="gap-6 flex-wrap flex justify-center p-4 cursor-pointer"
          >
            <div className="w-full bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x1 mt-1 mb-1 lg:mt-0">
              <img
                className="h-100 w-full object-cover rounded-t-lg"
                src={mate.imagenes[0]}
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
    </div>
  );
};

export default MatePage;
