"use client";
import { motion } from "framer-motion";

const navItems = [
  { name: "Beneficios", href: "#benefits" },
  { name: "Proceso", href: "#methodology" },
  { name: "Servicios", href: "#servicios" },
  { name: "Clientes", href: "#testimonials" },
];

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Agencia<span className="text-yellow-400">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-300 hover:text-yellow-400 transition-colors">
              {item.name}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-block px-5 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition-colors">
          Contacto
        </a>
      </div>
    </motion.header>
  );
}
