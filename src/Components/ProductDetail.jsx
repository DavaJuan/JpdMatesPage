import matesData from "../../public/stock.json";
import bombillasData from "../../public/bombillas.json";
import termosData from "../../public/termos.json";
import combosData from "../../public/combos.json";
import accesoriosData from "../../public/accesorios.json";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetail = () => {
  const { tipo, id } = useParams();

  let data = [];

  switch (tipo) {
    case "mate":
      data = matesData;
      break;
    case "bombilla":
      data = bombillasData;
      break;
    case "termo":
      data = termosData;
      break;
    case "combo":
      data = combosData;
      break;
    case "accesorio":
      data = accesoriosData;
      break;
    default:
      data = [];
  }

  const producto = data.find((item) => String(item.id) === String(id));

  if (!producto) {
    return (
      <div className="text-center mt-10 text-red-500">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-[750px] object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{producto.nombre}</h1>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">${producto.precio}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl">{producto.descripcion}</span>
        </div>

        <Link
          to="/catalogo"
          className="flex mt-4 text-[#1f305e] hover:underline text-xl "
        >
          <FaArrowLeft className="m-1" /> Volver al catálogo
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
