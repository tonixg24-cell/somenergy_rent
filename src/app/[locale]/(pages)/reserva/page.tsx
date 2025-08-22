'use client';

import { useSearchParams } from 'next/navigation';
import Container from '@/components/shared/container';
import Image from 'next/image';
import { useState } from 'react';

export default function ReservaPage() {
  const searchParams = useSearchParams();
  const car = searchParams.get('car');
  const [submitted, setSubmitted] = useState(false);

  const carData = {
    'BMW Serie 3': {
      image: '/images/BMW_Serie_3_2023.jpeg',
      price: 79
    },
    'Mercedes-Benz GLA 200': {
      image: '/images/2.jpg',
      price: 85
    },
    'Audi A1 Sportback': {
      image: '/images/3.webp',
      price: 65
    },
    'Volkswagen Tiguan': {
      image: '/images/Large-14971-2022Tiguan.webp',
      price: 78
    }
  } as const;
  const selected = car && typeof car === 'string' && carData[car as keyof typeof carData] ? carData[car as keyof typeof carData] : null;

  return (
    <Container>
      <section className='py-12 max-w-xl mx-auto bg-white'>
        <h1 className='text-3xl font-bold mb-6 text-center text-[#003087]'>Reserva tu coche</h1>
        <div className='bg-white rounded-xl shadow-lg p-8'>
          {selected && (
            <div className='flex flex-col items-center mb-6'>
              <Image src={selected.image} alt={car || ''} width={260} height={160} className='rounded-lg object-cover mb-2 border-2 border-[#003087]' />
              <div className='text-lg font-semibold text-[#003087]'>{car}</div>
              <div className='text-[#003087] font-bold'>{selected.price}€/día</div>
            </div>
          )}
          {!submitted ? (
            <form className='flex flex-col gap-4' onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div className='flex gap-2'>
                <input type='text' placeholder='Nombre completo' className='border rounded px-4 py-2 w-1/2' required />
                <input type='tel' placeholder='Teléfono' className='border rounded px-4 py-2 w-1/2' required />
              </div>
              <input type='email' placeholder='Correo electrónico' className='border rounded px-4 py-2' required />
              <div className='flex gap-2'>
                <input type='date' placeholder='Fecha de recogida' className='border rounded px-4 py-2 w-1/2' required />
                <input type='date' placeholder='Fecha de devolución' className='border rounded px-4 py-2 w-1/2' required />
              </div>
              <div className='font-semibold text-gray-700 mt-2 mb-1'>Datos de pago</div>
              <div className='flex gap-2'>
                <input type='text' placeholder='Número de tarjeta' className='border rounded px-4 py-2 w-2/3' required />
                <input type='text' placeholder='MM/AA' className='border rounded px-4 py-2 w-1/6' required />
                <input type='text' placeholder='CVC' className='border rounded px-4 py-2 w-1/6' required />
              </div>
              <input type='text' placeholder='Nombre en la tarjeta' className='border rounded px-4 py-2' required />
              <button type='submit' className='bg-[#FFC439] text-[#003087] py-2 rounded font-bold mt-4 hover:bg-[#FFB800] transition-colors shadow-md border border-[#FFC439]'>Pagar y confirmar reserva</button>
              <div className='flex items-center justify-center mt-4'>
                <button type='button' disabled className='flex items-center gap-2 bg-[#FFC439] hover:bg-[#FFB800] text-[#003087] font-bold px-6 py-2 rounded shadow-md transition-colors border border-[#FFC439] cursor-not-allowed'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="6" fill="#fff"/>
                    <g>
                      <path d="M13.5 21L15.5 11H19.5C21.5 11 22.5 12.5 22 14.5C21.5 16.5 20 17 18.5 17H16.5L16 19.5H18.5C19.5 19.5 20.5 19 21 18.5" stroke="#003087" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17.5 13.5H19.5C20.5 13.5 21 14 20.5 15C20 16 19 16 18 16H16.5" stroke="#003087" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <span style={{fontFamily:'Arial Black, Arial, sans-serif', letterSpacing:'0.5px'}}>PayPal</span>
                </button>
              </div>
            </form>
          ) : (
            <div className='text-center py-8'>
              <div className='text-2xl font-bold text-primary mb-2'>¡Reserva realizada!</div>
              <div className='text-gray-700 mb-4'>Hemos recibido tu solicitud. Pronto recibirás un email con los detalles de tu reserva.</div>
              <div className='text-sm text-gray-400'>* Este es un simulador de reserva, no se ha realizado ningún cargo.</div>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}
