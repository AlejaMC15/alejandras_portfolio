'use client';

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",  // Reemplaza con tu ID de servicio
        "your_template_id", // Reemplaza con tu ID de plantilla
        e.target, // Referencia al formulario
        "your_user_id"      // Reemplaza con tu ID de usuario
      )
      .then(
        (response) => {
          setStatus("Mensaje enviado con éxito!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Hubo un error, por favor inténtalo de nuevo.");
        }
      );
  };

  return (
    <section id="contact" className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Contacto</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">Enviar</button>
        </div>

        {status && <p className="text-center text-lg text-gray-700">{status}</p>}
      </form>
    </section>
  );
}
