"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        "your_service_id", // Reemplaza con tu ID de servicio
        "your_template_id", // Reemplaza con tu ID de plantilla
        form,
        "your_user_id" // Reemplaza con tu ID de usuario
      )
      .then(
        () => {
          setStatus("Mensaje enviado con éxito!");
          setFormData({ name: "", email: "", message: "" });
          form.reset();
        },
        () => {
          setStatus("Hubo un error, por favor inténtalo de nuevo.");
        }
      );
  };

  return (
    <section id="contact" className="container mx-auto p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 rounded-lg"
      >
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-accent rounded-lg bg-transparent text-foreground placeholder-subtext focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
            placeholder="Escribe tu nombre..."
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-accent rounded-lg bg-transparent text-foreground placeholder-subtext focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
            placeholder="Tu correo electrónico..."
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 border border-accent rounded-lg bg-transparent text-foreground placeholder-subtext focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
            placeholder="Escribe tu mensaje..."
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="relative inline-block px-6 py-3 font-semibold text-foreground rounded-lg transition-all duration-300
            bg-gradient-to-r from-accent to-heading shadow-[0px_0px_12px_2px_rgba(255,165,0,0.3),0px_0px_24px_4px_rgba(50,50,50,0.2)]
            hover:shadow-[0px_0px_16px_4px_rgba(255,165,0,0.4),0px_0px_32px_6px_rgba(50,50,50,0.3)]"
          >
            Send
          </button>
        </div>

        {status && (
          <p className="text-center text-lg text-subtext">{status}</p>
        )}
      </form>
    </section>
  );
}
