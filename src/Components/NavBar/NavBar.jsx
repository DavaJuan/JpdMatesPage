import { FiMenu } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const whatsappUrl =
    "https://wa.me/5491153754846?text=Hola!%20Quiero%20más%20info%20sobre%20el%20producto%20...!";

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
          <a
            className="hover:text-blue-400 cursor-pointer"
            target="_blank"
            href={whatsappUrl}
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
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
    </nav>
  );
};

export default Navbar;
