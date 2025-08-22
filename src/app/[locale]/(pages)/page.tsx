import Container from '@/components/shared/container';

export default function HomePage() {
  return (
    <Container>
      <section className='py-12 bg-white'>
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-[#003087]'>
          Alquiler de Coches Premium en Barcelona
        </h1>
        <p className='text-lg text-gray-700 mb-8 text-center'>
          Descubre la mejor experiencia de alquiler de coches en Barcelona.
          Vehículos nuevos, seguros y elegantes para cada ocasión. Reserva online
          de forma rápida y sencilla.
        </p>
        {/* Si hay botones, usar bg-[#FFC439] text-[#003087] rounded y hover:bg-[#FFB800] */}
      </section>
    </Container>
  );
}