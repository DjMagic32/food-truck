'use client';
import axios from 'axios';
import {useState} from 'react';

// Componente Modal
const Modal = ({message, type, onClose}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80">
        <h3
          className={`text-lg font-bold mb-4 ${
            type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {type === 'success' ? '¡Éxito!' : 'Error'}
        </h3>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-customOrange text-white rounded-md hover:bg-gray-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' o 'error'
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = phone => {
    const re =
      /^\+?(\d{1,3})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
    return re.test(String(phone));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const {email, telefono} = formData;

    if (!validateEmail(email)) {
      setStatusMessage('Correo electrónico no válido');
      setStatusType('error');
      setLoading(false);
      setShowModal(true);
      return;
    }

    if (!validatePhone(telefono)) {
      setStatusMessage('Número de teléfono no válido');
      setStatusType('error');
      setLoading(false);
      setShowModal(true);
      return;
    }

    try {
      const baseURL = window.location.origin;
      const apiURL = `${baseURL}/api`;

      const response = await axios.post(apiURL, formData);

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
      setShowModal(true);
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
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
            value={formData.telefono}
            onChange={handleChange}
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
        {showModal && (
          <Modal
            message={statusMessage}
            type={statusType}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};
