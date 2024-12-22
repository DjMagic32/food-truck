'use client';
import Image from 'next/image';

export const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-screen flex items-center justify-end text-center p-20"
      style={{backgroundImage: "url('/food_car.jpg')"}}
    >
      <img
        src="./logominitrail.png"
        alt="Minitrail"
        className=" md:h-[500px] object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};
