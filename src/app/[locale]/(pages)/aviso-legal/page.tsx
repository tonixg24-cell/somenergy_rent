import React from 'react';

// 1. Definición de tipos para los datos de la empresa (tomados de la página anterior)
interface CompanyData {
  titular: string;
  domicilio: string;
  cif: string;
  email: string;
}

// Datos de contacto de la empresa (usamos los mismos para coherencia)
const companyData: CompanyData = {
  titular: "VEHÍCULOS AM",
  domicilio: "Barcelona, España",
  cif: "47895541L",
  email: "aber17347@gmail.com",
};

const AvisoLegalPage = () => {
  // Definición de las secciones del Aviso Legal
  const sections = [
    {
      id: 1,
      title: "Objeto y ámbito de aplicación",
      content: (
        <p className="text-gray-700 leading-relaxed">
          El presente Aviso Legal regula el acceso, navegación y uso del sitio web de <strong className="font-semibold">{companyData.titular}</strong>, así como las responsabilidades derivadas de la utilización de sus contenidos, incluyendo textos, gráficos, imágenes, logotipos, software y demás materiales.
        </p>
      )
    },
    {
      id: 2,
      title: "Condiciones de uso",
      content: (
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">
            El usuario se compromete a utilizar el sitio web de forma diligente, correcta y lícita, absteniéndose de:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
            <li>Realizar actividades ilícitas, fraudulentas o contrarias a la buena fe y al orden público.</li>
            <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, violento o atentatorio contra los derechos humanos.</li>
            <li>Provocar daños en los sistemas físicos o lógicos de VEHÍCULOS AM, de sus proveedores o de terceros.</li>
            <li>Introducir o difundir virus informáticos o cualquier otro sistema físico o lógico que sea susceptible de provocar daños.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed pt-2">
            <strong className="font-semibold">{companyData.titular}</strong> se reserva el derecho a retirar los comentarios o aportaciones que vulneren el respeto a la dignidad de las personas, sean discriminatorios, o que no resulten adecuados para su publicación.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Propiedad intelectual e industrial",
      content: (
        <div className="space-y-3 text-gray-700">
          <p className="leading-relaxed">
            Todos los contenidos del sitio web (textos, imágenes, logotipos, vídeos, software, diseño gráfico, código fuente, etc.) son propiedad de <strong className="font-semibold">{companyData.titular}</strong> o de sus legítimos titulares, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
          </p>
          <p className="leading-relaxed">
            Queda prohibida la reproducción total o parcial, distribución, comunicación pública, transformación o cualquier otra actividad con los contenidos del sitio sin la autorización expresa del titular.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Responsabilidad",
      content: (
        <div className="space-y-3 text-gray-700">
          <p className="leading-relaxed">
            <strong className="font-semibold">{companyData.titular}</strong> no se hace responsable de los daños o perjuicios que pudieran derivarse del uso indebido de la web, ni de la información contenida en enlaces o hipervínculos hacia sitios externos.
          </p>
          <p className="leading-relaxed">
            Asimismo, no garantiza la disponibilidad, continuidad o infalibilidad del funcionamiento del sitio web, si bien adoptará las medidas necesarias para garantizar un servicio estable y seguro.
          </p>
        </div>
      )
    },
    {
      id: 5,
      title: "Enlaces a terceros",
      content: (
        <p className="text-gray-700 leading-relaxed">
          El sitio web puede contener enlaces hacia otras páginas web gestionadas por terceros. <strong className="font-semibold">{companyData.titular}</strong> no se responsabiliza del contenido ni del estado de dichos sitios y el acceso a ellos se realiza bajo la exclusiva responsabilidad del usuario.
        </p>
      )
    },
    {
      id: 6,
      title: "Protección de datos personales",
      content: (
        <div className="space-y-3 text-gray-700">
          <p className="leading-relaxed">
            <strong className="font-semibold">{companyData.titular}</strong> cumple con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
          </p>
          <p className="leading-relaxed">
            Los datos personales recabados a través de los formularios del sitio web serán tratados de acuerdo con la <strong className="font-semibold">Política de Privacidad</strong>, disponible en la misma web, con la finalidad de gestionar las reservas, consultas o servicios solicitados por el usuario.
          </p>
        </div>
      )
    },
    {
      id: 7,
      title: "Legislación aplicable y jurisdicción",
      content: (
        <p className="text-gray-700 leading-relaxed">
          El presente Aviso Legal se rige por la legislación española. Para cualquier controversia o conflicto derivado del uso del sitio web, las partes se someten expresamente a los Juzgados y Tribunales de Barcelona, salvo disposición legal en contrario.
        </p>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 sm:py-16 font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-indigo-800 sm:text-5xl tracking-tight">
            ⚖️ AVISO LEGAL
          </h1>
          <p className="mt-3 text-xl text-gray-500 font-medium">
            Información del Titular del Sitio Web
          </p>
        </div>

        {/* Bloque de Identificación del Titular */}
        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 mb-8 border-l-4 border-indigo-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Titularidad del sitio web</h2>
          <div className="space-y-2 text-gray-700">
            <p className="text-sm italic">En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE):</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong className="font-semibold">Titular:</strong> {companyData.titular}</li>
              <li><strong className="font-semibold">NIF/CIF:</strong> {companyData.cif}</li>
              <li><strong className="font-semibold">Domicilio:</strong> {companyData.domicilio}</li>
              <li><strong className="font-semibold">Correo electrónico:</strong> <a href={`mailto:${companyData.email}`} className="text-indigo-600 hover:text-indigo-800 underline transition duration-150">{companyData.email}</a></li>
            </ul>
            <p className="pt-2 font-medium text-sm text-gray-600">El acceso, navegación y uso de este sitio web implican la aceptación expresa y sin reservas de todos los términos de este Aviso Legal.</p>
          </div>
        </div>

        {/* Contenedor de las Secciones de Contenido */}
        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-10 space-y-8 border-t-4 border-indigo-600">
          {sections.map((section) => (
            <div key={section.id} className="pt-4 border-b border-gray-100 last:border-b-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {section.id}. {section.title}
              </h2>
              <div className="mb-6 pl-1">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvisoLegalPage;
