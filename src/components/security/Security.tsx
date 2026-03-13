const securityFeatures = [
  {
    image: '/images/plataforma.webp',
    text: 'La piattaforma di pagamento è certificata e approvata.'
  },
  {
    image: '/images/dados.webp',
    text: 'I tuoi dati finanziari rimarranno totalmente segreti e protetti.'
  },
  {
    image: '/images/entrega.webp',
    text: 'Il tuo accesso sarà inviato tramite Email e Whatsapp.'
  }
];

export default function Security() {
  return (
    <section className="py-16 px-5 bg-cinza-light">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={feature.image}
                alt={`Segurança ${index + 1}`}
                className="w-20 h-20 mb-5"
              />
              <p className="text-sm text-cinza-medium leading-relaxed">
                {feature.text.split(' ').map((word, idx) => {
                  const boldWords = ['certificata', 'approvata', 'segreti', 'protetti', 'inviato'];
                  if (boldWords.some(bw => word.toLowerCase().includes(bw))) {
                    return (
                      <strong key={idx} className="font-semibold text-cinza-dark">
                        {word}{' '}
                      </strong>
                    );
                  }
                  return word + ' ';
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
