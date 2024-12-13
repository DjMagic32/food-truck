"use client"; // Al inicio del archivo
import Image from "next/image";
import {
  Banner,
  ContactForm,
  ProductSection,
  About,
} from "@/components/Landing/Index";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Banner />
      <About />
      <ProductSection />
      <ContactForm />
    </div>
  );
}
