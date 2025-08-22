import Container from '@/components/shared/container'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

function Contacto () {
  const t = useTranslations('contact')

  return (
    <>
      <Container>
        <section className='py-12 bg-white'>
          <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-[#003087]'>{t('title')}</h1>
          <p className='text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto'>
            ¿Tienes dudas o necesitas ayuda con tu reserva? Nuestro equipo está disponible para asesorarte antes, durante y después del alquiler. Escríbenos, llámanos o visítanos en nuestra oficina en Barcelona.
          </p>
          <div className='flex flex-col md:flex-row gap-8 max-w-4xl mx-auto'>
            <div className='flex-1 bg-white rounded-xl shadow-lg p-8 mb-4 md:mb-0'>
              <form className='flex flex-col gap-4'>
                <input type='text' placeholder='Nombre completo' className='border rounded px-4 py-2' required />
                <input type='email' placeholder='Correo electrónico' className='border rounded px-4 py-2' required />
                <input type='tel' placeholder='Teléfono' className='border rounded px-4 py-2' required />
                <textarea placeholder='Mensaje' className='border rounded px-4 py-2' rows={4} required />
                <button type='submit' className='bg-green-600 text-white py-2 rounded font-bold mt-4 hover:bg-green-700 transition-colors shadow-md'>
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className='flex-1 flex flex-col justify-center gap-6 bg-[#f8fafc] rounded-xl shadow p-8'>
              <div className='flex items-center gap-3 text-[#003087] text-lg'>
                <FaPhoneAlt />
                <a href='tel:+34607057187' className='hover:underline'>
                  +34 607 05 71 87
                </a>
              </div>
              <div className='flex items-center gap-3 text-[#003087] text-lg'>
                <FaEnvelope />
                <a href='mailto:info@somenergyrent.com' className='hover:underline'>
                  info@somenergyrent.com
                </a>
              </div>
              <div className='flex items-center gap-3 text-[#003087] text-lg'>
                <FaMapMarkerAlt />
                <span>
                  Carrer de Dante Alighieri, 08032 Barcelona
                </span>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Contacto
