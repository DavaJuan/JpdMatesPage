import { useState } from "react";
import { Link } from "react-router-dom";
import stock from "../../public/stock.json";

const MatePage = () => {
  const mates = stock.filter((producto) => producto.tipo === "mate");
  const [filtroPorClase, setFiltroPorClase] = useState("todos");

  const matesFiltradosPorClase =
    filtroPorClase === "todos"
      ? mates
      : mates.filter((m) => m.clase === filtroPorClase);

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap justify-center items-center pt-8">
        <button
          onClick={() => setFiltroPorClase("todos")}
          className={`px-4 py-2 rounded-lg cursor-pointer sm:px-5 sm:py-3 lg:px-6 lg:py-4 text-sm lg:text-lg ${
            filtroPorClase === "todos"
              ? "bg-zinc-900 text-white"
              : "bg-gray-200"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltroPorClase("imperial")}
          className={`px-4 py-2 rounded-lg cursor-pointer sm:px-5 sm:py-3 lg:px-6 lg:py-4 text-sm lg:text-lg ${
            filtroPorClase === "imperial"
              ? "bg-zinc-900 text-white"
              : "bg-gray-200"
          }`}
        >
          Imperiales
        </button>
        <button
          onClick={() => setFiltroPorClase("torpedo")}
          className={`px-4 py-2 rounded-lg cursor-pointer sm:px-5 sm:py-3 lg:px-6 lg:py-4 text-sm lg:text-lg  ${
            filtroPorClase === "torpedo"
              ? "bg-zinc-900 text-white"
              : "bg-gray-200"
          }`}
        >
          Torpedos
        </button>
        <button
          onClick={() => setFiltroPorClase("camionero")}
          className={`px-4 py-2 rounded-lg cursor-pointer sm:px-5 sm:py-3 lg:px-6 lg:py-4 text-sm lg:text-lg  ${
            filtroPorClase === "camionero"
              ? "bg-zinc-900 text-white"
              : "bg-gray-200"
          }`}
        >
          Camioneros
        </button>
        <button
          onClick={() => setFiltroPorClase("otro")}
          className={`px-4 py-2 rounded-lg cursor-pointer sm:px-5 sm:py-3 lg:px-6 lg:py-4 text-sm lg:text-lg  ${
            filtroPorClase === "otro" ? "bg-zinc-900 text-white" : "bg-gray-200"
          }`}
        >
          Otros
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8 p-2 ">
        {matesFiltradosPorClase.map((mate) => (
          <Link
            to={`/mate/${mate.id}`}
            key={mate.id}
            className="gap-6 flex-wrap flex justify-center p-4 cursor-pointer"
          >
            <div className=" bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x1 mt-1 mb-1 lg:mt-0">
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
