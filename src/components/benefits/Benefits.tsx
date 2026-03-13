import { memo } from 'react';

const benefits = [
  {
    emoji: '📚',
    title: 'Oltre 100 Modelli Esclusivi',
    description: 'Collezione completa di sonagli amigurumi con istruzioni dettagliate'
  },
  {
    emoji: '⚡',
    title: 'Accesso Immediato e a Vita',
    description: 'Ricevi tutto nella tua email in pochi secondi e hai accesso per sempre, senza canoni mensili'
  },
  {
    emoji: '📖',
    title: 'Passo dopo passo Illustrato',
    description: 'Ogni schema include foto e spiegazioni chiare, perfetto per principianti ed esperti'
  },
  {
    emoji: '💰',
    title: 'Genera un Reddito Extra',
    description: 'Vendi i tuoi pezzi finiti o accetta ordini personalizzati e guadagna con il tuo talento'
  },
  {
    emoji: '📈',
    title: 'Tendenza in Crescita',
    description: 'I sonagli all\'uncinetto sono una tendenza assoluta nella decorazione e hanno un alto valore'
  },
  {
    emoji: '🤝',
    title: 'Supporto e Community',
    description: 'Entra in un gruppo esclusivo di artigiane e ricevi consigli, ispirazioni e aiuto ogni volta che ne hai bisogno'
  }
];

function Benefits() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Perché il "Manuale Sonagli Amigurumi" è tutto ciò di cui hai bisogno?
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12 max-w-3xl mx-auto">
          Tutto ciò di cui hai bisogno per padroneggiare l'arte dell'amigurumi e trasformare il tuo hobby in un business
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-bege-light to-[#F5F0E8] p-10 rounded-2xl border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-rosa-primary hover:shadow-xl hover:shadow-rosa-primary/20"
            >
              <div className="text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-semibold text-cinza-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-cinza-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Benefits);
