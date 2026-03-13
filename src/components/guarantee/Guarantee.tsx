export default function Guarantee() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[28px] font-bold text-cinza-dark mb-8">
          Garanzia di Soddisfazione al 100% o <span className="text-azul-primary">Rimborso Totale!</span>
        </h2>

        <div className="mb-8">
          <img
            src="/images/garantia.webp"
            alt="Garantia 7 dias"
            loading="lazy"
            className="w-[200px] mx-auto"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed max-w-2xl mx-auto">
          Prova per 7 giorni: se non ti piace, riavrai i tuoi soldi.
        </p>

        <p className="text-lg text-cinza-dark font-semibold mt-4">
          Semplice, veloce e senza domande.
        </p>
      </div>
    </section>
  );
}
