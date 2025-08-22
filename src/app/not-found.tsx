"use client"

import Link from 'next/link';
export default function NotFound() {
  return (
    <html>
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
          <div className="max-w-lg w-full px-4 py-20 text-center">
            <h1 className="text-5xl font-bold mb-4">Página no encontrada</h1>
            <p className="text-lg mb-8 text-gray-600">
              Lo sentimos, la página que buscas no existe. ¿Quieres volver al catálogo de coches?
            </p>
            <Link href="/coches" className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-xl font-semibold shadow hover:bg-primary-dark transition-colors">
              Ir al catálogo
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}