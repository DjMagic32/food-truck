'use client';
import {MinitrailIcon} from '@/icons/icons';

export const Navbar = () => {
  return (
    <nav className="bg-customOrange p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Asegúrate de que el ícono no tenga padding ni margen adicional */}
        <div className="flex items-center justify-start ">
          <img
            src="./logominitrail.png"
            alt="Minitrail"
            className="h-[50px] object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Aquí irían otros elementos de la navbar */}
      </div>
    </nav>
  );
};
