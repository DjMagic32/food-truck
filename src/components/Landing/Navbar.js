'use client';
import {MinitrailIcon} from '@/icons/icons';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="bg-customOrange p-4 w-[100%]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-start">
          <Image
            src="/logominitrail.png"
            height={50}
            width={50}
            alt="Minitrail"
          />
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link
            className="text-black hover:text-white text-lg font-bold hover:bg-customBlack p-2 rounded-lg transition-all"
            href="/about"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-white text-lg hover:bg-customBlack p-2 rounded-lg font-bold transition-all"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </nav>
  );
};
