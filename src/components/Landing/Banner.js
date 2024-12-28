'use client';
import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

export const Banner = () => {
  const [imageUrl, setImageUrl] = useState('/food_car.png');
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Estado para controlar el tamaño de la pantalla
  const images = [
    './carruselBanner/1.png',
    './carruselBanner/2.png',
    './carruselBanner/3.png',
    './logominitrail.png',
  ];
  const texts = [
    '¡Compra tu carro de churros!',
    '¡Emprende tu propio negocio!',
    '¡Comienza a ganar desde el primer día!',
    '¡Bienvenido a Minitrail!',
  ];

  // Variantes de animación para el efecto fade
  const fadeVariant = {
    hidden: {opacity: 0}, // Imagen invisible al inicio
    visible: {opacity: 1}, // Imagen visible durante el cambio
  };

  const textVariant = {
    hidden: {opacity: 0, y: 20}, // Comienza opaco y desplazado hacia abajo
    visible: {opacity: 1, y: 0}, // Termina visible y en su posición original
  };

  // Detecta el tamaño de la pantalla
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 700); // Establece isMobile si el ancho es menor a 700px
    };

    updateScreenSize(); // Llama al método inmediatamente para ajustar el tamaño inicial

    // Añade un listener al evento de redimensionamiento
    window.addEventListener('resize', updateScreenSize);

    // Limpia el listener al desmontar
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 767) {
        setImageUrl('/mobile_background.png');
      } else {
        setImageUrl('/food_car.png');
      }
    };

    // Llama a la función al montar el componente
    updateBackground();

    // Añade un listener al evento de redimensionamiento
    window.addEventListener('resize', updateBackground);

    // Limpia el listener al desmontar
    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  useEffect(() => {
    // Cambia el texto cada 3 segundos
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  // Cambiar imagen cada 3 segundos en un ciclo infinito
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [images.length]);

  return (
    <div
      className="bg-cover bg-center h-screen flex md:items-center items-start md:justify-start justify-center text-center md:p-20 p-1"
      style={{backgroundImage: `url('${imageUrl}')`}}
    >
      <div className="flex flex-col items-center md:items-start justify-center md:justify-center  h-[100%] md:w-[50%] w-[100%]">
        {!isMobile && (
          <img
            src="./logominitrail.png"
            alt="Minitrail"
            className="md:h-[250px] h-[100px] object-cover  "
          />
        )}

        {/* Texto con animación */}
        <motion.div
          className="mt-5 text-4xl font-bold text-white  text-center w-[330px] h-[80px]"
          key={`text-${textIndex}`} // Clave única para el texto
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{duration: 0.8, ease: 'easeInOut'}} // Controla la duración y suavidad
        >
          {texts[textIndex]}
        </motion.div>

        {/* Condicionalmente renderizar el carrusel de imágenes solo si isMobile es true */}
        {isMobile && (
          <motion.div
            className=" md:flex-none flex p-10 overflow-visible" // Ajusta el tamaño de la imagen
            key={`image-${currentIndex}`} // Clave única para la imagen
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            transition={{duration: 1, ease: 'easeInOut'}} // Ajusta la duración y suavidad del fade
          >
            <img
              src={images[currentIndex]} // Muestra la imagen correspondiente al índice
              alt={`minitrail ${currentIndex}`}
              className={`object-cover overflow-visible ${
                images[currentIndex].includes('minitrail')
                  ? 'h-[150px]'
                  : 'h-[350px]'
              }`}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};
