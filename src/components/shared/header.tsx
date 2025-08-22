'use client';
import Link from 'next/link';
import Logo from './logo';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full flex flex-row justify-between items-center px-6 md:px-16 py-4 shadow-sm bg-white relative">
      <div className="flex items-center">
        <Logo width={120} height={60} />
      </div>
      {/* Botón hamburguesa solo visible en móviles */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span className={`block w-7 h-1 bg-[#003087] rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#003087] rounded my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#003087] rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Menú de navegación */}
      <nav
        className={`flex-col md:flex-row gap-8 items-center md:flex ${open ? 'flex absolute top-16 left-0 w-full bg-white shadow-lg z-50 p-6' : 'hidden md:flex'} transition-all`}
      >
        <Link href="/servicios" className="text-lg font-semibold text-gray-900 hover:text-[#003087] transition" onClick={() => setOpen(false)}>Catálogo</Link>
        <Link href="/sobre-nosotros" className="text-lg font-semibold text-gray-900 hover:text-[#003087] transition" onClick={() => setOpen(false)}>Sobre nosotros</Link>
        <Link href="/contacto" className="text-lg font-semibold text-gray-900 hover:text-[#003087] transition" onClick={() => setOpen(false)}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
