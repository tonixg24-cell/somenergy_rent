// Modelo de datos de coches para alquiler
export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  image: string;
  pricePerDay: number;
  reserved: boolean;
  description: string;
};

// Ejemplo de coches disponibles
export const cars: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'Serie 3',
    year: 2022,
    image: '/images/BMW_Serie_3_2023.jpeg',
    pricePerDay: 85,
    reserved: false,
    description: 'BMW Serie 3, elegante, potente y perfecto para cualquier ocasión.',
  },
  {
    id: '2',
    brand: 'Mercedes-Benz',
    model: 'GLA 200',
    year: 2023,
    image: '/images/2.jpg',
    pricePerDay: 85,
    reserved: false,
    description: 'Mercedes-Benz GLA 200, confort y tecnología de última generación.',
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'A1 Sportback',
    year: 2021,
    image: '/images/3.webp',
    pricePerDay: 65,
    reserved: false,
    description: 'Audi A1 Sportback, compacto, eficiente y con estilo urbano.',
  },
  {
    id: '4',
    brand: 'Volkswagen',
    model: 'Tiguan',
    year: 2022,
    image: '/images/Large-14971-2022Tiguan.webp',
    pricePerDay: 78,
    reserved: false,
    description: 'Volkswagen Tiguan, versatilidad y espacio para toda la familia.'
  }
];
