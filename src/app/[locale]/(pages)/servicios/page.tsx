import Container from '@/components/shared/container'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Servicios() {
  const t = useTranslations('services')
  const servicios: Array<any> = t.raw('items')
  return (
    <Container>
      <section className='py-12 bg-white'>
        <h1 className='font-playfair text-3xl md:text-4xl font-bold text-center mb-8 text-[#003087]'>
          {t('title')}
        </h1>
        <p className='font-sans text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto'>
          {t('description')}
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicios.map((servicio, idx) => (
            <article
              key={idx}
              className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition ${servicio.reservado ? 'opacity-60' : ''}`}
            >
              <div className='w-full h-48 relative mb-4'>
                <Image
                  src={servicio.imagen}
                  alt={servicio.alt || `${servicio.marca || servicio.brand} ${servicio.modelo || servicio.model}`}
                  fill
                  className='object-cover rounded-xl'
                  quality={85}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                />
              </div>
              <h2 className='font-playfair text-xl font-semibold mb-2 text-[#003087]'>
                {servicio.marca || servicio.brand} {servicio.modelo || servicio.model} <span className='text-gray-500 font-normal'>({servicio.año || servicio.year})</span>
              </h2>
              <p className='font-sans text-gray-700 mb-2'>
                {servicio.descripcion || servicio.description}
              </p>
              <div className='flex items-center justify-between w-full mb-2'>
                <span className='text-xl font-bold text-[#003087]'>{servicio.precioPorDia || servicio.pricePerDay}€/día</span>
                {servicio.reservado ? (
                  <button
                    className='px-4 py-2 rounded font-medium bg-gray-400 text-white cursor-not-allowed'
                    disabled
                  >
                    Reservado
                  </button>
                ) : (
                  <Link
                    href={{
                      pathname: '/reserva',
                      query: { car: `${servicio.marca || servicio.brand} ${servicio.modelo || servicio.model}` }
                    }}
                    className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors font-medium'
                  >
                    Reservar
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}