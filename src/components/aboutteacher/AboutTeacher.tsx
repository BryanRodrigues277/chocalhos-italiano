export default function AboutTeacher() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Incontra la tua insegnante!
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="/images/teacher.webp"
                  alt="Heloísa Santos - Professora"
                  loading="lazy"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ciao! Mi chiamo <strong>Heloísa Santos</strong> e sono appassionata di amigurumi da oltre 5 anni. Ho creato questo manuale per mostrarti che, con le tecniche giuste, <strong>anche tu puoi creare sonagli bellissimi e funzionali che incantano ogni neonato</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
