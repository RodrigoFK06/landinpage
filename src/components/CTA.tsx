"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export default function CTA() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Por favor completa nombre, email y mensaje." });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || data?.message || `Error ${res.status}`);
      }

      setStatus({ type: "success", message: "¡Mensaje enviado! Te contactaremos pronto." });
      setForm({ name: "", email: "", company: "", subject: "", message: "" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "No se pudo enviar el mensaje.";
      setStatus({ type: "error", message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-32 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <AnimatedText
            el="h2"
            text="¿Listo para construir el futuro?"
            className="text-4xl md:text-6xl font-extrabold text-white"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Hablemos sobre tu próximo proyecto. Estamos aquí para ayudarte a convertir tus ideas en realidad.
          </motion.p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-300 mb-2">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={onChange}
              required
              className="px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
              placeholder="Juan Pérez"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-300 mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              className="px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
              placeholder="correo@empresa.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="company" className="text-sm text-gray-300 mb-2">Empresa</label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={onChange}
              className="px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
              placeholder="Mi Empresa"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-sm text-gray-300 mb-2">Asunto</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={onChange}
              className="px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
              placeholder="Cotización Ecommerce"
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-sm text-gray-300 mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              required
              className="px-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
              placeholder="Quiero una tienda online con pagos y catálogo."
            />
          </div>

          {status && (
            <div className={`md:col-span-2 text-sm rounded-lg px-4 py-3 ${status.type === "success" ? "bg-green-500/10 text-green-300 border border-green-500/30" : "bg-red-500/10 text-red-300 border border-red-500/30"}`}>
              {status.message}
            </div>
          )}

          <div className="md:col-span-2 flex justify-center">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.03 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              className="px-10 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
