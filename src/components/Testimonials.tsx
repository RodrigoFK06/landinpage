"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";

const testimonials = [
  {
    quote: "El equipo superó todas nuestras expectativas. El resultado final es una plataforma moderna, rápida y que nuestros usuarios aman.",
    author: "Ana Pérez",
    title: "CEO, Startup Innovadora",
  },
  {
    quote: "Su atención al detalle y su enfoque en la experiencia de usuario fueron clave para el éxito de nuestro rediseño.",
    author: "Carlos Gómez",
    title: "Director de Marketing, Tech Solutions",
  },
  {
    quote: "Nunca habíamos trabajado con un equipo tan profesional y comprometido. La comunicación fue excelente durante todo el proyecto.",
    author: "Laura Martínez",
    title: "Fundadora, Creative Co.",
  },
];

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    clipPath: "inset(0 50% 0 50%)"
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
  },
};


export default function Testimonials() {
  const dragRef = useRef(null);

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <AnimatedText
            el="h2"
            text="Lo que dicen nuestros clientes"
            className="text-4xl md:text-5xl font-bold text-white"
          />
        </div>
        <motion.div
          ref={dragRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/40 p-8 rounded-2xl shadow-lg border border-gray-700/50 flex flex-col"
              variants={cardVariants}
              transition={{
                delay: i * 0.2,
                duration: 0.8,
              }}
            >
              <p className="text-gray-300 italic mb-6 flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-yellow-400">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
