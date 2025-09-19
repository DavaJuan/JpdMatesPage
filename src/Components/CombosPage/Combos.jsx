import { useState, useEffect } from "react";

const Combos = () => {
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    fetch("/combos.json")
      .then((res) => res.json())
      .then((data) => setCombo(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-10">
        {combo.map((combo) => (
          <div
            key={combo.id}
            className="gap-6 flex-wrap flex justify-center p-4"
          >
            <div className="w-full bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2x1 mt-1 mb-1 lg:mt-0 cursor-pointer">
              <img
                className="h-100 w-full object-cover rounded-t-lg"
                src={combo.imagen}
                alt={combo.nombre}
              />
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2">{combo.nombre}</h2>
                <p className="text-sm text-gray-600 mt-2 mb-2">
                  {combo.descripcion}
                </p>
                <span className="text-xl font-semibold">${combo.precio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Combos;
