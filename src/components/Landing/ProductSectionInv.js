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

export const ProductSectionInv = ({productData}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2 relative">
          {/* Carrusel de imágenes principales */}
          <Swiper
            loop={true}
            navigation={true}
            thumbs={{swiper: thumbsSwiper}}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            spaceBetween={50}
            slidesPerView={1}
            pagination={{clickable: true}}
          >
            {productData.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
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
            className="mySwiper max-w-[300px] absolute right-0 bottom-0"
          >
            {productData.thumbnailImages.map((image, index) => (
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
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold text-white mb-4">
            {productData.title}
          </h3>
          <p className="text-gray-500 text-lg">
            {/* Separa el texto en un array usando '\n' y luego mapea los elementos con <br /> */}
            {productData?.description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
