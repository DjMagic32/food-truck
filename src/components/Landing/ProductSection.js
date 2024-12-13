"use client";

// Import Swiper React components
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export const ProductSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Nuestro Producto Estrella
          </h3>
          <p className="text-gray-600 text-lg">
            Este producto revolucionará la forma en que trabajas, ofreciendo
            eficiencia y resultados incomparables.
          </p>
        </div>
        <div>
          <Swiper
            loop={true}
            //spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            spaceBetween={50}
            slidesPerView={1}
            //navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img
                src="/amasadora/amasadora 1.jpg"
                alt="Producto 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/amasadora/amasadora 2.jpg"
                alt="Producto 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/amasadora/amasadora 3.jpg"
                alt="Producto 3"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/amasadora/amasadora 1.jpg"
                alt="Producto 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/amasadora/amasadora 2.jpg"
                alt="Producto 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/amasadora/amasadora 3.jpg"
                alt="Producto 3"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
