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
        {/* Links - ocultos en mobile */}
        <div className="hidden md:flex space-x-8 text-xl">
          <Link to="/" className="hover:text-blue-400">
            Inicio
          </Link>
          <Link to="/categorias" className="hover:text-blue-400">
            Categorias
          </Link>
          <Link to="/faq" className="hover:text-blue-400">
            FAQ
          </Link>
          <Link to="/curarmate" className="hover:text-blue-400">
            Curar tu Mate
          </Link>
        </div>

        {/* Carrito + botón hamburguesa */}
        <div className="flex items-center space-x-4">
          <button
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => alert("Proximamente...")}
          >
            <IoBagHandle className="w-6 h-6" />
          </button>
          {/* Botón hamburguesa solo visible en mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <Link
            to="/"
            className="hover:text-blue-400"
            onClick={handleLinkClick}
          >
            Inicio
          </Link>
          <Link
            to="/categorias"
            className="hover:text-blue-400"
            onClick={handleLinkClick}
          >
            Categorias
          </Link>
          <Link
            to="/faq"
            className="hover:text-blue-400"
            onClick={handleLinkClick}
          >
            FAQ
          </Link>
          <Link
            to="/curarmate"
            className="hover:text-blue-400"
            onClick={handleLinkClick}
          >
            Como curar el Mate
          </Link>
        </div>
      )}
      {/* <Cart
        open={isCartOpen}
        toggleCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
      /> */}
    </nav>
  );
};

export default Navbar;
