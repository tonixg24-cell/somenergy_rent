import { cars } from '../../../cars/data';
import Image from 'next/image';

export default function CarDetail({ params }: { params: { id: string } }) {
  const car = cars.find((c) => c.id === params.id);
  if (!car) return <div className="p-8">Coche no encontrado.</div>;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-3xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            width={400}
            height={250}
            className="rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{car.brand} {car.model}</h1>
            <p className="text-gray-500 mb-2">Año {car.year}</p>
            <p className="mb-4 text-gray-700">{car.description}</p>
            <div className="text-xl font-bold text-primary mb-6">{car.pricePerDay}€/día</div>
            {car.reserved ? (
              <span className="text-red-500 font-semibold">Este coche ya está reservado</span>
            ) : (
              <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Reserva tu coche</h2>
                <input type="text" placeholder="Nombre completo" className="w-full border p-2 rounded" required />
                <input type="email" placeholder="Correo electrónico" className="w-full border p-2 rounded" required />
                <input type="text" placeholder="Número de tarjeta" className="w-full border p-2 rounded" required />
                <input type="text" placeholder="Fecha de expiración (MM/AA)" className="w-full border p-2 rounded" required />
                <input type="text" placeholder="CVC" className="w-full border p-2 rounded" required />
                <button type="submit" className="w-full bg-primary text-white py-2 rounded font-medium hover:bg-primary-dark transition-colors">Reservar ahora</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
