import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Teléfono */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <FaPhoneAlt className="w-6 h-6 text-green-400" />
            <a
              href="https://wa.me/5491153754846"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              Teléfono: +54 9 11 5375 4846
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <FaInstagram className="w-6 h-6 text-pink-400" />
            <a
              href="https://instagram.com/jpd_mates"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              Instagram: @jpd_mates
            </a>
          </div>

          {/* Gmail */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <MdMail className="w-6 h-6 text-blue-400" />
            <a
              href="mailto:jpdmates@gmail.com"
              className="hover:text-blue-400 transition"
            >
              Gmail: jpdmates@gmail.com
            </a>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} JPD Mates — Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
