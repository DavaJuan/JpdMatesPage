import { FiMenu } from "react-icons/fi";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Cart from "../Cart";
// import { useCart } from "../CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // const { cartItems } = useCart();

  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Links - Izquierda */}
        <div className="hidden md:flex space-x-8 text-xl">
          <Link to="/" className="hover:text-blue-400">
            Inicio
          </Link>
          <Link to="/categorias" className="hover:text-blue-400">
            Categorías
          </Link>
          <Link to="/faq" className="hover:text-blue-400">
            FAQ
          </Link>
          <Link to="/curarmate" className="hover:text-blue-400">
            Curar tu Mate
          </Link>
        </div>

        {/* Carrito */}
        <div className="flex items-center space-x-4">
          <button
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => alert("Proximamente...")}
          >
            <IoBagHandle className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Botón hamburguesa (solo visible en mobile) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 ">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:text-blue-400"
          >
            Inicio
          </Link>
          <Link
            to="/categorias"
            onClick={handleLinkClick}
            className="hover:text-blue-400"
          >
            Categorías
          </Link>
          <Link
            to="/faq"
            onClick={handleLinkClick}
            className="hover:text-blue-400"
          >
            FAQ
          </Link>
          <Link
            to="/curarmate"
            onClick={handleLinkClick}
            className="hover:text-blue-400"
          >
            Como curar el Mate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
