import { Users, Sparkles, DollarSign } from 'lucide-react';

export default function TargetAudience() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Per chi è questo corso?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-8 h-8 text-amber-700" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Já sabe fazer amigurumis e quer aprender a criar <strong>santinhas com acabamento impecável</strong>.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Stai <strong>cominciando ora con l'uncinetto</strong> e sogni di entrare nella nicchia religiosa con sicurezza e accoglienza.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-8 h-8 text-amber-700" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Desideri <strong>trasformare la fede in arte</strong> — e, se vuoi, generare reddito con pezzi delicati e pieni di significato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
