import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FiCheckCircle, FiClock, FiUserCheck } from 'react-icons/fi'
import OurServices from '@/components/OurServices'

export default function Home () {
  const t = useTranslations('home')

  return (
    <main className='flex flex-col min-h-screen bg-white'>

      {/* Hero Section */}
      <section className='flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-24 py-12 bg-[#F9F9F9]'>
        <div className='flex-1 flex flex-col items-start justify-center mb-8 md:mb-0 md:mr-8'>
          <h1 className='font-playfair text-3xl md:text-5xl font-bold mb-4'>
            {t('heroTitle')}
            <span className='text-[#C80E09]'> {t('heroTitle2')}</span>
          </h1>
          <p className='font-sans text-base md:text-lg text-gray-700 mb-6 max-w-md'>
            {t('heroDescription')}
          </p>
          <a
            href='https://wa.me/'
            target='_blank'
            rel='noopener noreferrer nofollow'
            className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-200 font-sans flex items-center gap-2'
            aria-label={t('getQuote')}
          >
            {t('getQuote')}
          </a>
        </div>

        <div className='flex-1 flex items-center justify-center'>
          <Image
            src='/images/3.webp'
            width={600}
            height={700}
            alt={t('heroImageAlt') || 'Antonio Gil Gonzalez - CEO'}
            className='rounded-lg shadow-lg'
            priority
            quality={85}
            sizes='(max-width: 768px) 380px, 50vw'
          />
        </div>
      </section>

      {/* Value Propositions */}
      <section
        aria-labelledby='value-propositions'
        className='w-full py-12 bg-white'
      >
        <h2 id='value-propositions' className='sr-only'>
          {t('valuePropositions')}
        </h2>
        <div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
          {[1, 2, 3].map(item => (
            <div
              key={item}
              className='flex flex-col items-center text-center p-8 rounded-2xl shadow hover:shadow-lg transition bg-[#f7fafd]'
            >
              <span className='flex items-center justify-center w-16 h-16 rounded-full bg-[#e6f1f5] mb-4'>
                {item === 1 && (
                  <FiCheckCircle size={40} className='text-[#0d4b5c]' />
                )}
                {item === 2 && <FiClock size={40} className='text-[#0d4b5c]' />}
                {item === 3 && (
                  <FiUserCheck size={40} className='text-[#0d4b5c]' />
                )}
              </span>
              <h3 className='font-playfair text-xl font-bold mb-2'>
                {t(`section1.title${item}`)}
              </h3>
              <p className='font-sans text-gray-600'>
                {t(`section1.desc${item}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <OurServices />
    </main>
  )
}