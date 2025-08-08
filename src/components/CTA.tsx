"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function CTA() {
  return (
    <section id="contacto" className="py-20 sm:py-32 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent">
      <div className="container mx-auto px-6 text-center">
        <AnimatedText
          el="h2"
          text="¿Listo para construir el futuro?"
          className="text-4xl md:text-6xl font-extrabold text-white"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Hablemos sobre tu próximo proyecto. Estamos aquí para ayudarte a convertir tus ideas en realidad.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <motion.a
            href="mailto:hola@tudominio.com"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0px 0px 30px rgba(253, 224, 71, 0.7)",
              textShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)"
            }}
            whileTap={{ scale: 0.9 }}
            className="px-10 py-4 bg-yellow-400 text-black rounded-full font-bold text-xl transition-all duration-300"
          >
            Contáctanos Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
