"use client";
import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import * as THREE from "three";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.IcosahedronGeometry(1.2, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.3,
      metalness: 0.7,
      emissive: 0x111111,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(2, 4, 5);
    scene.add(pointLight);

    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      transparent: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    let mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.002;
      
      pointLight.position.x = 2 + mouse.x * 2;
      pointLight.position.y = 4 + mouse.y * 2;

      stars.rotation.y += 0.0001;
      
      mesh.position.y = Math.sin(elapsedTime * 0.5) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Impulsamos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">negocio</span> al futuro 🚀
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Soluciones digitales personalizadas para empresas que quieren destacar.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(253, 224, 71, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold transition-shadow"
          >
            Ver Servicios
          </motion.a>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-500 rounded-full font-semibold transition-colors"
          >
            Contáctanos
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
