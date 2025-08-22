import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/shared/container'

function AboutUs () {
  const t = useTranslations('about')

  return (
    <Container>
      <section className='py-12 bg-white'>
        <div className='min-h-screen flex items-center justify-center bg-[#F7F5F2] px-6 -mt-20 pt-24 md:pt-24'>
          <div className='max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-14 md:gap-10 py-16'>
            <div className='w-full md:w-1/2 flex justify-center items-start mt-[-24px] md:mt-[-32px]'>
              <div className='relative mt-0'>
                <Image
                  src='/images/sobre_nosotros.jpeg'
                  alt='Equipo de reformas integrales Mega Arte'
                  width={400}
                  height={400}
                  className='rounded-3xl shadow-lg  bg-white'
                  loading='lazy'
                  quality={85}
                />
                <div className='absolute -top-6 -left-6 w-16 h-16 bg-[#C80E09] opacity-20 rounded-full'></div>
                <div className='absolute bottom-0 right-0 w-12 h-12 bg-[#0d4b5c] opacity-20 rounded-full'></div>
              </div>
            </div>

            {/* Derecha: Texto SEO */}
            <div className='w-full md:w-1/2 text-[#1A1A1A]'>
              <h1 className='leading-tight font-playfair text-4xl md:text-5xl font-bold mb-6'>
                {t('mainTitle')}
                <span className='text-[#C80E09]'>{t('mainTitle2')}</span>
                {t('mainTitle3')}
              </h1>
              <h2 className='md:text-2xl font-semibold font-sans text-lg text-gray-700 mb-6'>
                {t('subtitle')}
              </h2>
              <p className='mb-6 text-lg font-sans text-gray-700'>
                {t('description')}
              </p>
              <Link
                href='/contacto'
                className='bg-[#FFC439] text-[#003087] px-8 py-3 rounded-full font-semibold hover:bg-[#FFB800] transition text-lg shadow '
              >
                {t('cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default AboutUs
