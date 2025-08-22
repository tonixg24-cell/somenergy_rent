
'use client'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/shared/container'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function OurServices () {
  const t = useTranslations('ourServicesComponent')
  const currentLocale = useLocale() // Obtiene el locale actual

  // Obtenemos los servicios desde el JSON traducido
  const services = t.raw('items') as Array<{
    title: string
    description: string
    image: string
  }>

  return (
    <section className='w-full flex flex-col items-center py-12 bg-[#F9F9F9]'>
      <Container>
        <h2 className='font-playfair text-3xl md:text-4xl font-bold mb-8 text-center'>
          {t('title')}
        </h2>
        <div className='w-full flex flex-wrap justify-center gap-8 mb-8'>
          {services.map((service, idx) => (
            <div
              key={idx}
              className='bg-gray-100 rounded-lg shadow-md p-6 w-72 flex flex-col items-center text-center hover:shadow-lg transition'
            >
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={300}
                className='rounded-lg mb-4 border-2 border-blue-200'
                quality={85}
                sizes="(max-width: 768px) 236px, 300px"


              />
              <h3 className='font-playfair text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='font-sans text-gray-600 mb-2'>{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
      <Link
        href={`/${currentLocale}/servicios`}  
        className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded transition-colors duration-200 inline-block text-center'
      >
        {t('viewAll')}
      </Link>
    </section>
  )
}