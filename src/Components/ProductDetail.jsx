import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import products from "../../public/stock.json";
// import { useCart } from "./CartContext";

const ProductDetail = () => {
  const { id, tipo } = useParams();
  const product = products.find(
    (p) => p.id === parseInt(id) && p.tipo === tipo
  );
  const [currentImage, setCurrentImage] = useState(0);
  // const { addToCart } = useCart();

  if (!product)
    return <p className="text-center p-4">Producto no encontrado</p>;

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.imagenes.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === product.imagenes.length - 1 ? 0 : prev + 1
    );
  };

  const phoneNumber = "+5491153754846";
  const message = `Hola! Quiero el Mate/Producto ${product.nombre}!`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // const handleAddCart = () => {
  //   addToCart(product);
  // };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Imagen del producto con slider */}
      <div className="relative">
        <img
          src={product.imagenes[currentImage]}
          alt={`${product.nombre} ${currentImage + 1}`}
          className="w-full max-h-[650px] object-contain md:object-cover rounded-xl shadow-md"
        />

        {/* Botones izquierda/derecha */}
        {product.imagenes.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow cursor-pointer"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow cursor-pointer"
            >
              <FaChevronRight size={20} />
            </button>
          </>
        )}

        {/* Miniaturas debajo */}
        <div className="flex gap-2 mt-4 justify-center overflow-x-auto no-scrollbar">
          {product.imagenes.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb ${idx}`}
              onClick={() => setCurrentImage(idx)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                currentImage === idx ? "border-blue-600" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Detalle del producto */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product.nombre}</h1>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">${product.precio}</span>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <span className="text-xl p-1">{product.descripcion}</span>
        </div>
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Lo quiero!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
