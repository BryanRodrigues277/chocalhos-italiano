import { Check } from 'lucide-react';

export default function Imagine() {
  return (
    <section className="py-16 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333333]">
            Tocco morbido, colori che incantano, decorazione che trasforma.
          </h2>

          <p className="text-lg text-[#666666] mb-4 leading-relaxed max-w-3xl mx-auto">
            Immagina di creare un delicato sonaglio all'uncinetto, o un amigurumi sensoriale che rende ogni neonato ancora più felice. Ogni pezzo è un'opera d'arte manuale che porta suono, stimolo e personalità!
          </p>

          <p className="text-lg text-[#666666] mb-8 leading-relaxed max-w-3xl mx-auto">
            Questo è ciò che imparerai con il <strong className="text-rosa-primary">Manuale Sonagli Amigurumi!</strong>
          </p>

          <div className="mb-8">
            <img
              src="/images/hero-chocalho.webp"
              alt="Chocalhos Amigurumis de Crochê"
              loading="lazy"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333]">
            Con schemi esclusivi, potrai creare pezzi incredibili, come:
          </h3>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-rosa-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Sonagli a tema con suoni delicati</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-azul-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Modelli sensoriali per stimolare il neonato</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-rosa-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Modelli di animaletti e personaggi all'uncinetto</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-azul-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Kit di accessori coordinati</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">E molti altri modelli incantevoli (ci sono delle sorprese che ti aspettano!)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
