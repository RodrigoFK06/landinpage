"use client";
import { motion, Variants } from "framer-motion";
import { Code, Brush, BarChart, Server } from "lucide-react";
import AnimatedText from "./AnimatedText";

const services = [
  {
    icon: <Code className="w-10 h-10 text-yellow-400" />,
    title: "Desarrollo Web a Medida",
    description: "Creamos aplicaciones web rápidas, seguras y escalables desde cero.",
  },
  {
    icon: <Brush className="w-10 h-10 text-yellow-400" />,
    title: "Diseño de Interfaces (UI/UX)",
    description: "Diseñamos experiencias de usuario intuitivas y atractivas.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-yellow-400" />,
    title: "Optimización y SEO",
    description: "Mejoramos la visibilidad y el rendimiento de tu sitio web.",
  },
  {
    icon: <Server className="w-10 h-10 text-yellow-400" />,
    title: "Mantenimiento y Soporte",
    description: "Ofrecemos soporte continuo para garantizar que tu sitio esté siempre en línea.",
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-32  bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <AnimatedText
            el="h2"
            text="Nuestros Servicios"
            className="text-4xl md:text-5xl font-bold text-white"
          />
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios para impulsar tu presencia digital.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl bg-gray-800/40 shadow-lg border border-gray-700/50 flex flex-col items-center text-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: i * 0.1,
              }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
