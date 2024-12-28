'use client';
import {About} from '@/components/Landing/About';
import {FaWhatsapp} from 'react-icons/fa'; // Importa el ícono de WhatsApp

const AboutPage = () => {
  // Función para abrir WhatsApp con el mensaje predefinido
  const handleWhatsAppClick = () => {
    console.log('WhatsApp');
    const phoneNumber = '+5493489485945'; // Número de teléfono
    const message = 'Hola! Me gustaría tener más información'; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, '_blank');
  };
  return (
    <div className="h-[100%] w-full">
      <About />
      {/* Botón flotante de WhatsApp */}
      <div
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-10 right-4 bg-green-500 p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={30} color="white" />
      </div>
    </div>
  );
};

export default AboutPage;
