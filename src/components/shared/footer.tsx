import Logo from './logo';
import Link from 'next/link';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] py-8 text-[#f3f4f6] text-sm w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="flex items-center gap-4">
          <Logo width={80} height={50} src="/images/logo.jpg" />
          <span className="font-semibold text-lg">Somenergy Rent</span>
        </div>
        <nav className="flex flex-row gap-6 items-center">
          <Link href="/coches" className="hover:underline text-[#f3f4f6]">Catálogo</Link>
          <Link href="/sobre-nosotros" className="hover:underline text-[#f3f4f6]">Sobre nosotros</Link>
          <Link href="/contacto" className="hover:underline text-[#f3f4f6]">Contacto</Link>
          <Link href="/privacidad" className="hover:underline text-[#f3f4f6]">Privacidad</Link>
          <Link href="/terminos-y-condiciones" className="hover:underline text-[#f3f4f6]">Terminos y condiciones</Link>
          <Link href="/aviso-legal" className="hover:underline text-[#f3f4f6]">Aviso Legal</Link>

        </nav>
        
        <div className="text-xs text-gray-400 text-center md:text-right">
          &copy; {year} Somenergy Rent. Todos los derechos reservados.<br />
          Diseño y desarrollo profesional.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



