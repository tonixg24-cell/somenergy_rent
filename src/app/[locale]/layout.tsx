import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import './globals.css'
import ContactFloatingButton from '@/components/ContactFloatingButton'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Somenergy Rent - Alquiler de coches premium en Barcelona',
  description:
    'Alquiler de coches premium en Barcelona. Reserva online, precios claros, seguro incluido y atención personalizada. Flota moderna y máxima flexibilidad para tu movilidad.'
}
interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}
export default function RootLayout ({
  children,
  params
}: Readonly<RootLayoutProps>) {
  const locale = params?.locale
  const messages = useMessages()

  // data-lt-installed='true'
  return (
    <html lang={params.locale}>
      <body className='font-sans' cz-shortcut-listen='true'>
      
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MQT8QRC9HQ');
          `}
        </Script>
 
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
          <ContactFloatingButton />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
