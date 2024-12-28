'use client';

// Import Swiper React components
import {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {FaWhatsapp} from 'react-icons/fa'; // Importa el ícono de WhatsApp

export const ProductDetail = ({title, description, features, images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
    <div className="max-w-8xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-8 items-center">
      {/* Contenedor de texto */}
      <div className="md:w-1/2 md:order-1 w-full ">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 text-lg">
          {description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}

          {features.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      {/* Contenedor de imágenes (carrusel) */}
      <div className="md:w-1/2 md:order-2 relative ">
        {/* Carrusel de imágenes principales */}
        <Swiper
          loop={true}
          navigation={true}
          thumbs={{swiper: thumbsSwiper}}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperDetail2"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{clickable: true}}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carrusel de miniaturas */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperDetail absolute right-0 bottom-0"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-[50px] h-[50px] object-cover rounded-lg shadow-lg bg-slate-400 p-1"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
