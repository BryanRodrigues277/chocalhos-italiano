import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Il manuale è adatto ai principianti dell\'uncinetto?',
    answer: 'Assolutamente sì! Il manuale è stato creato per essere facile da capire, con spiegazioni passo dopo passo, grafici chiari e vari consigli. Anche se stai partendo da zero con l\'amigurumi, riuscirai a seguire e a creare pezzi incredibili.'
  },
  {
    question: 'Quanti modelli di gattini amigurumi sono inclusi?',
    answer: 'Riceverai un totale di 16 schemi completi: diversi modelli di gattini carini e accessori. Tutto questo accompagnato da grafici chiari e consigli dettagliati.',
  },
  {
    question: 'C\'è un supporto per chiarire i dubbi?',
    answer: 'Sì. Dal lunedì al venerdì dalle 09:00 alle 18:00, festivi esclusi.'
  },
  {
    question: 'È sicuro acquistare su questo sito?',
    answer: 'Sì, il tuo acquisto sarà sicuro al 100%. Utilizziamo il protocollo https in collaborazione con Hotmart, la più grande piattaforma di infoprodotti in America Latina.'
  },
  {
    question: 'L\'accesso è a vita?',
    answer: 'Sì, il pagamento è unico e l\'accesso al manuale è a vita!'
  },
  {
    question: 'Perché costa così poco? È reale?',
    answer: 'Sì, le promozioni sono per rendere il kit accessibile al maggior numero di persone possibile. Ma attenzione: questa è un\'offerta limitata di soli € 9,90 e può terminare in qualsiasi momento.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-12">
          Domande Frequenti
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-5 py-5 flex items-center justify-between text-left bg-bege-light hover:bg-[#F0E6E0] transition-colors"
              >
                <span className="font-semibold text-base text-cinza-dark pr-4">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-azul-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 bg-white ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
              >
                <div className="px-5 py-5 text-cinza-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
