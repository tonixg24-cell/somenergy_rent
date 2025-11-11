import Logo from './logo';
import Link from 'next/link';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] py-6 text-[#f3f4f6] text-sm w-full">
    <div className="max-w-6xl mx-auto px-6">
        
    
        <div className="flex flex-col md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-8 gap-8 items-center md:items-start text-center md:text-left">
          
          {/* Columna 1: Logo y Nombre */}
          <div className="flex flex-col items-center md:items-start gap-2">
            {/* Aquí usamos el componente Logo */}
            <Logo width={80} height={50} src="/images/logo.jpg" />
            <span className="font-bold text-xl text-white mt-1">Somenergy Rent</span>
          </div>

          {/* Columna 2: Navegación (Enlaces) */}
          <nav className="flex flex-col sm:flex-row md:flex-col gap-3 text-sm font-light">
            {/* Usamos <a> para evitar el error de importación del entorno, manteniendo los estilos */}
            <a href="/servicios" className="hover:text-teal-400 transition-colors">Catálogo</a>
            <a href="/sobre-nosotros" className="hover:text-teal-400 transition-colors">Sobre nosotros</a>
            <a href="/contacto" className="hover:text-teal-400 transition-colors">Contacto</a>
            {/* Enlace de Privacidad, actualmente comentado */}
            {/* <a href="/privacidad" className="hover:text-teal-400 transition-colors">Privacidad</a> */}
          </nav>
          
          {/* Columna 3: Legal y Copyright */}
          <div className="flex flex-col gap-3 items-center md:items-end text-center md:text-right w-full">
            
            {/* Enlaces Legales */}
            <div className="flex flex-row gap-4 text-xs font-semibold text-gray-300">
              <a href="/terminos-y-condiciones" className="hover:underline hover:text-white transition-colors">Términos y condiciones</a>
              <a href="/aviso-legal" className="hover:underline hover:text-white transition-colors">Aviso Legal</a>
            </div>

            {/* Texto de Copyright y Diseño */}
            <div className="text-xs text-gray-400 leading-relaxed">
              &copy; {year} Somenergy Rent. Todos los derechos reservados.<br />
              Diseño y desarrollo profesional.
            </div>
            
          </div>
          
        </div>
    </footer>
  );
};

export default Footer;



