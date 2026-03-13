import { Check } from 'lucide-react';

export default function Package() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/images/hero-chocalho.webp"
                alt="Apostila Chocalhos Amigurumis"
                loading="lazy"
                className="w-full max-w-lg rounded-xl shadow-2xl"
              />
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
                  Cosa è incluso nel pacchetto
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg text-[#666666]">Schemi completi in PDF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg text-[#666666]">Vari modelli di animali</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg text-[#666666]">Passo dopo passo dettagliato</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg text-[#666666]">Accesso a vita</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
