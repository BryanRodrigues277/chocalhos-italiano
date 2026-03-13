import { memo } from 'react';

const recipes = [
  { name: 'Sonaglio', highlight: 'Modello 1', image: '/images/ch-1.webp' },
  { name: 'Sonaglio', highlight: 'Modello 2', image: '/images/ch-2.webp' },
  { name: 'Sonaglio', highlight: 'Modello 3', image: '/images/ch-3.webp' },
  { name: 'Sonaglio', highlight: 'Modello 4', image: '/images/ch-4.webp' },
  { name: 'Sonaglio', highlight: 'Modello 5', image: '/images/ch-5.webp' },
  { name: 'Sonaglio', highlight: 'Modello 6', image: '/images/ch-6.webp' },
  { name: 'Sonaglio', highlight: 'Modello 7', image: '/images/ch-7.webp' },
  { name: 'Sonaglio', highlight: 'Modello 8', image: '/images/ch-8.webp' },
  { name: 'Sonaglio', highlight: 'Modello 9', image: '/images/ch-9.webp' },
];

function Gallery() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-[#E3F2FD] to-bege-light">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-[32px] font-bold text-center mb-12"
          style={{
            background: 'linear-gradient(135deg, #FFB6C1, #FF69B4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Guarda gli schemi che riceverai!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:shadow-rosa-primary/25 transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={recipe.image}
                alt={`${recipe.name} ${recipe.highlight}`}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-xl mb-3"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Gallery);
