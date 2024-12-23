import React from 'react';

export const CardPromotional = ({image, title, slug}) => {
  console.log('Url Image:', image.src);
  return (
    <a
      className="relative w-72 h-60 overflow-hidden rounded-lg shadow-lg transition-shadow duration-500 group hover:shadow-2xl"
      href={`/products/${slug}`}
    >
      {/* Imagen de fondo */}
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
        style={{backgroundImage: `url('${image.src}')`}}
      ></div>
      {/* Contenido */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center cursor-pointer">
        {title}
      </div>
    </a>
  );
};
