import { useEffect, useState } from "react";

const Accesorios = () => {
  const [accesorio, setAccesorio] = useState([]);

  useEffect(() => {
    fetch("/accesorios.json")
      .then((res) => res.json())
      .then((data) => setAccesorio(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-10 ">
        {accesorio.map((accesorio) => (
          <div
            key={accesorio.id}
            className="gap-6 flex-wrap flex justify-center p-4 cursor-pointer"
          >
            <div className="w-full bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x1 mt-1 mb-1 lg:mt-0">
              <img
                className="h-100 w-full object-cover rounded-t-lg"
                src={accesorio.imagen}
                alt={accesorio.nombre}
              />
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2">{accesorio.nombre}</h2>
                <p className="text-sm text-gray-600 mt-2 mb-2">
                  {accesorio.descripcion}
                </p>
                <span className="text-xl font-semibold">
                  ${accesorio.precio}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accesorios;
