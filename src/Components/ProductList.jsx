import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../../public/stock.json";

const ProductList = () => {
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    // Hacemos una copia del array y lo mezclamos
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Todos los productos</h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {shuffledProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
          >
            {/* Imagen */}
            <Link to={`/${product.tipo}/${product.id}`}>
              <img
                src={
                  Array.isArray(product.imagenes)
                    ? product.imagenes[0]
                    : product.imagenes
                }
                alt={product.nombre}
                className="h-100 w-full object-cover rounded-t-lg"
              />
            </Link>

            {/* Contenido */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-1">{product.nombre}</h3>
              <p className="text-gray-600 text-sm flex-grow">
                {product.descripcion}
              </p>
              <p className="text-lg font-semibold mt-2">${product.precio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver más */}
      {visibleCount < shuffledProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 cursor-pointer"
          >
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
