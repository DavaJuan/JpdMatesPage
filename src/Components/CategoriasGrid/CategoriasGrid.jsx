import { Link } from "react-router-dom";

const CategoriasGrid = () => {
  const categorias = [
    {
      nombre: "MATES",
      imagen: "/imagenes/mate.jpeg",
      colSpan: "col-span-2 row-span-1",
      link: "/mates",
    },
    {
      nombre: "BOMBILLAS",
      imagen: "/imagenes/bombillas.jpeg",
      colSpan: "",
      link: "/bombillas",
    },
    {
      nombre: "TERMOS",
      imagen: "/imagenes/termos.jpeg",
      colSpan: "",
      link: "/termos",
    },
    {
      nombre: "COMBOS",
      imagen: "/imagenes/combos.jpeg",
      colSpan: "col-span-2",
      link: "/combos",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 max-w-7xl mx-auto">
      {categorias.map((cat, i) => (
        <Link
          to={cat.link}
          key={i}
          className={`relative group overflow-hidden rounded-md ${cat.colSpan}`}
        >
          <img
            src={cat.imagen}
            alt={cat.nombre}
            className="w-full h-120 object-cover transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-xl md:text-2xl font-bold">
              {cat.nombre}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriasGrid;
