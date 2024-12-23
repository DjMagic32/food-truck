'use client';
import {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
import {
  productData1,
  churrosCar,
  popcornCart,
  cart3In1,
  cornCart,
  products,
} from '@/data/productData';

import {
  Banner,
  ProductSection,
  About,
  Navbar,
  Footer,
  ProductSectionInv,
  ProductCardSection,
} from '@/components/Landing/Index';

import {FaWhatsapp} from 'react-icons/fa'; // Importa el ícono de WhatsApp

// const ContactForm = dynamic(
//   () =>
//     import('../components/Landing/ContactForm').then(mod => mod.ContactForm),
//   {ssr: false},
// );

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar el ancho de la ventana
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    // Verificar el tamaño inicial
    checkWindowSize();

    // Escuchar cambios de tamaño
    window.addEventListener('resize', checkWindowSize);

    // Limpiar el listener al desmontar
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  // Función para abrir WhatsApp con el mensaje predefinido
  const handleWhatsAppClick = () => {
    console.log('WhatsApp');
    const phoneNumber = '(3489)485945'; // Número de teléfono
    const message = 'Hola! Me gustaría tener más información'; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-[100%]">
      <Banner />

      {!isMobile && <ProductCardSection products={products} />}

      {isMobile && (
        <>
          <ProductSectionInv productData={churrosCar} />
          <ProductSection productData={popcornCart} />
          <ProductSectionInv productData={cart3In1} />
          <ProductSection productData={cornCart} />
          <ProductSectionInv productData={productData1} />
        </>
      )}

      {/* Botón flotante de WhatsApp */}
      <div
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-10 right-4 bg-green-500 p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={30} color="white" />
      </div>
    </div>
  );
}
