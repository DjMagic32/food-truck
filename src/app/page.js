'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  productData1,
  churrosCar,
  popcornCart,
  cart3In1,
  cornCart,
} from '@/data/productData';

import {
  Banner,
  ProductSection,
  About,
  Navbar,
  Footer,
  ProductSectionInv,
} from '@/components/Landing/Index';

const ContactForm = dynamic(
  () =>
    import('../components/Landing/ContactForm').then(mod => mod.ContactForm),
  {ssr: false},
);

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Banner />
      <About />
      <ProductSectionInv productData={churrosCar} />
      <ProductSection productData={popcornCart} />
      <ProductSectionInv productData={cart3In1} />
      <ProductSection productData={cornCart} />
      <ProductSectionInv productData={productData1} />
      <ContactForm />
      <Footer />
    </div>
  );
}
