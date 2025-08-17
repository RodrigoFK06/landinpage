"use client";

import { useRef, useEffect } from "react";
import { PenTool, Code, Rocket, BrainCircuit } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <BrainCircuit className="w-12 h-12 text-yellow-400" />,
    title: "1. Descubrimiento y Estrategia",
    description: "Analizamos tus objetivos y definimos la hoja de ruta para el éxito.",
  },
  {
    icon: <PenTool className="w-12 h-12 text-yellow-400" />,
    title: "2. Diseño UX/UI",
    description: "Creamos interfaces intuitivas y atractivas centradas en el usuario.",
  },
  {
    icon: <Code className="w-12 h-12 text-yellow-400" />,
    title: "3. Desarrollo e Implementación",
    description: "Construimos soluciones robustas y escalables con tecnología de punta.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-yellow-400" />,
    title: "4. Despliegue y Optimización",
    description: "Lanzamos tu proyecto y lo optimizamos para un rendimiento continuo.",
  },
];

export default function Methodology() {
  const sectionRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    stepsRef.current.forEach((step, index) => {
      if (!step) return;
      tl.fromTo(
        step,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        index * 0.5 
      );
    });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="methodology" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText
            el="h2"
            text="Nuestro Proceso de Trabajo"
            className="text-4xl md:text-5xl font-bold text-white"
          />
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Seguimos un proceso probado para garantizar resultados excepcionales en cada proyecto.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700/50 hidden md:block" aria-hidden="true"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepsRef.current[index] = el;
              }}
              className="mb-16 md:mb-24 opacity-0"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:order-2'}`}>
                  <div className="inline-block bg-gray-800/40 p-6 rounded-full mb-4 md:mb-0">
                    {step.icon}
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:order-1'}`}>
                  <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
