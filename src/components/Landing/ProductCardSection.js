'use client';
import {useState} from 'react';
import {CardPromotional} from '../reusables/CardPromotional';

export const ProductCardSection = ({products}) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-8 items-center">
        {products.map((item, index) => (
          <CardPromotional
            key={index}
            image={item.images[0]}
            title={item.title}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
};
