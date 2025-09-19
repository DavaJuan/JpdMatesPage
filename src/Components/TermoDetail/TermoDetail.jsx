import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import termos from "../../../public/termos.json";

const TermoDetail = () => {
  const { id } = useParams();
  const termo = termos.find((b) => b.id === parseInt(id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Imagen del producto */}
      <div>
        <img
          src={termo.imagen}
          alt={termo.nombre}
          className="w-full h-[750px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Detalle del producto */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{termo.nombre}</h1>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">${termo.precio}</span>
        </div>

        {/* Selects */}
        <div className="grid grid-cols-2 gap-4">
          <span className="text-3xl font-bold">${termo.descripcion}</span>
        </div>

        {/* Cantidad */}
        <div className="mt-4">
          <label className="block text-sm font-medium">Cantidad</label>
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-70 border p-2 rounded-md"
          />
        </div>

        <Link
          to="/bombillas"
          className="flex mt-4 text-[#1f305e] hover:underline text-sm "
        >
          <FaArrowLeft className="m-1" /> Volver al catálogo
        </Link>
      </div>
    </div>
  );
};

export default TermoDetail;
