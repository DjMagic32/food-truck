import Image from "next/image";

export const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-screen flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/food_car.png')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white">Minitrail</h1>
    </div>
  );
};
