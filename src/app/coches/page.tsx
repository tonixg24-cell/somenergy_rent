import { cars } from '../../cars/data';
import Image from 'next/image';
import Link from 'next/link';

export default function CatalogoCoches() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Alquiler de Coches Premium</h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          Descubre nuestra exclusiva selección de vehículos de alta gama. Reserva tu coche ideal y vive una experiencia única, elegante y segura.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cars.map((car) => (
            <div key={car.id} className={`rounded-xl shadow-lg p-6 bg-white border border-gray-100 flex flex-col items-center transition-transform hover:scale-105 ${car.reserved ? 'opacity-60' : ''}`}>
              <Image
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                width={320}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{car.brand} {car.model}</h2>
              <p className="text-gray-500 mb-2">Año {car.year}</p>
              <p className="mb-4 text-gray-700">{car.description}</p>
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-xl font-bold text-primary">{car.pricePerDay}€/día</span>
                {car.reserved ? (
                  <span className="text-red-500 font-semibold">Reservado</span>
                ) : (
                  <Link href={`/coches/${car.id}`} className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors font-medium">
                    Reservar
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
