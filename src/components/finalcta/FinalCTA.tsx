import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { handleCheckoutNavigation } from '../../utils/navigation';

export default function FinalCTA() {
  const checkoutUrl = useCheckoutLink();

  return (
    <section className="py-16 px-5 bg-gradient-to-br from-rosa-gradient-start to-rosa-gradient-end">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[32px] font-bold text-white mb-6">
          Assicurati ora il tuo manuale di copertine con +100 schemi per soli $9.90!
        </h2>

        <a
          href={checkoutUrl}
          onClick={(e) => handleCheckoutNavigation(e, checkoutUrl, 'final-cta-section')}
          className="checkout inline-block w-full max-w-md bg-verde-cta hover:bg-verde-hover text-white px-12 py-6 rounded-lg text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
        >
          VOGLIO ASSICURARMELO ORA!
        </a>

        <p className="text-sm text-white/80 mt-6">
          🔒 Pagamento sicuro al 100% - Accesso immediato - Garanzia di 7 giorni
        </p>
      </div>
    </section>
  );
}
