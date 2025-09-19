import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import bombillas from "../../../public/bombillas.json";

const BombillaDetail = () => {
  const { id } = useParams();
  const bombilla = bombillas.find((b) => b.id === parseInt(id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Imagen del producto */}
      <div>
        <img
          src={bombilla.imagen}
          alt={bombilla.nombre}
          className="w-full h-[750px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Detalle del producto */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{bombilla.nombre}</h1>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">${bombilla.precio}</span>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <span className="text-2xl p-1">{bombilla.descripcion}</span>
        </div>

        <Link
          to="/bombillas"
          className="flex mt-4 text-[#1f305e] hover:underline text-xl "
        >
          <FaArrowLeft className="m-1" /> Volver al catálogo
        </Link>
      </div>
    </div>
  );
};

export default BombillaDetail;
