"use client";
import { motion, Variants } from "framer-motion";
import { Zap, ShieldCheck, BarChart2 } from "lucide-react";
import AnimatedText from "./AnimatedText";

const benefits = [
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    title: "Velocidad Insuperable",
    description: "Creamos experiencias web optimizadas para la máxima velocidad y rendimiento, garantizando la mejor primera impresión.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
    title: "Seguridad Robusta",
    description: "Implementamos las mejores prácticas de seguridad para proteger tus datos y los de tus usuarios, construyendo confianza.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-yellow-400" />,
    title: "Resultados Medibles",
    description: "Nos enfocamos en soluciones que no solo se ven bien, sino que también impulsan el crecimiento y logran tus objetivos de negocio.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-32 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <AnimatedText
            el="h2"
            text="Qué nos hace diferentes"
            className="text-4xl md:text-5xl font-bold text-white"
          />
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Combinamos diseño, tecnología y estrategia para llevar tu proyecto al siguiente nivel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/40 p-8 rounded-2xl shadow-lg border border-gray-700/50"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
              }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(253, 224, 71, 0.2)" }}
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-center text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
