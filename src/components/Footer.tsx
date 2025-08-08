
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-white">Bytecore</h2>
            <p className="mt-2">Soluciones Digitales a tu Medida.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Portafolio</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:contacto@bytecore.dev" className="hover:text-white transition-colors">contacto@bytecore.dev</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Síguenos</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bytecore. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terms-of-service" className="text-sm hover:text-white transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
