import { FiMenu } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl =
    "https://wa.me/5491153754846?text=Hola!%20Quiero%20más%20info!";

  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Links - ocultos en mobile */}
        <div className="hidden md:flex space-x-8 text-xl">
          <Link to="/catalogo" className="hover:text-blue-400">
            Inicio
          </Link>
          <Link to="/faq" className="hover:text-blue-400">
            FAQ
          </Link>
          <Link to="/curarmate" className="hover:text-blue-400">
            Curar tu Mate
          </Link>
          <Link to="/accesorios" className="hover:text-blue-400">
            Accesorios - Yerbas
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
          <Link to="/catalogo" className="hover:text-blue-400">
            Inicio
          </Link>
          <Link to="/faq" className="hover:text-blue-400">
            FAQ
          </Link>
          <Link to="/curarmate" className="hover:text-blue-400">
            Como curar el Mate
          </Link>
          <Link to="/accesorios" className="hover:text-blue-400">
            Accesorios - Yerbas
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
