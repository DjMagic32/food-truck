'use client';
import axios from 'axios';
import {useState} from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' o 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      // Capturar la URL base
      const baseURL = window.location.origin; // http://localhost:3000
      const apiURL = `${baseURL}/api`; // http://localhost:3000/api

      // Enviar la solicitud POST
      const response = await axios.post(apiURL, formData);

      // Manejo de la respuesta
      setStatusMessage(
        response.data.message ||
          'Correo enviado exitosamente, pronto nos comunicaremos contigo.',
      );
      setStatusType('success');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatusMessage(
        'Hubo un error al enviar tu mensaje. Inténtalo de nuevo.',
      );
      setStatusType('error');
    } finally {
      setLoading(false);

      // Ocultar el mensaje automáticamente después de 5 segundos
      setTimeout(() => {
        setStatusMessage('');
        setStatusType('');
      }, 5000);
    }
  };

  return (
    <div className="py-16 bg-gray-100 h-[100vh] w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="nombre"
            placeholder="Tu Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Tu Mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <button
            type="submit"
            className="bg-customOrange text-dark py-3 px-6 rounded-md hover:bg-gray-700 hover:text-white"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        {statusMessage && (
          <div
            className={`mt-4 p-4 rounded-md text-center text-white ${
              statusType === 'success' ? 'bg-green-500' : 'bg-red-500'
            } transition-opacity duration-500`}
          >
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};
