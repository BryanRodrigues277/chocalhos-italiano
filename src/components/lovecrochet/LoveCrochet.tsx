import { memo } from 'react';

function LoveCrochet() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-[32px] md:text-[32px] font-bold text-cinza-dark mb-8">
          Immagina questo...
        </h2>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          Un sonaglio delicato che incanta il neonato. Pezzi sensoriali che completano il corredino. Amigurumi che traboccano di affetto e suono in ogni punto.
        </p>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          <strong>Tutto fatto con le tue mani.</strong>
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <img
            src="/images/ch-9.webp"
            alt="Chocalho Amigurumi 1"
            className="w-full aspect-square object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/images/ch-8.webp"
            alt="Chocalho Amigurumi 2"
            className="w-full aspect-square object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/images/ch-7.webp"
            alt="Chocalho Amigurumi 3"
            className="w-full aspect-square object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/images/ch-5.webp"
            alt="Chocalho Amigurumi 4"
            className="w-full aspect-square object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed">
          Magico. Incantevole. <strong>Indimenticabile!</strong>
        </p>
      </div>
    </section>
  );
}

export default memo(LoveCrochet);
