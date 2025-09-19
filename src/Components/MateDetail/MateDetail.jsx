import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import mates from "../../../public/stock.json";

const MateDetail = () => {
  const { id } = useParams();
  const mate = mates.find((m) => m.id === parseInt(id));

  if (!mate) return <p className="text-center p-4">Mate no encontrado</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Imagen del producto */}
      <div>
        <img
          src={mate.imagen}
          alt={mate.nombre}
          className="w-full h-[750px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Detalle del producto */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{mate.nombre}</h1>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">${mate.precio}</span>
        </div>

        {/* Selects */}
        <div className="grid grid-cols-1 gap-4">
          <span className="text-2xl p-1">{mate.descripcion}</span>
        </div>

        <Link
          to="/mates"
          className="flex mt-4 text-[#1f305e] hover:underline text-xl "
        >
          <FaArrowLeft className="m-1 " /> Volver al catálogo
        </Link>
      </div>
    </div>
  );
};

export default MateDetail;
