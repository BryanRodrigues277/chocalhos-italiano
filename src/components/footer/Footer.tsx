export default function Footer() {
  return (
    <footer className="bg-cinza-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold mb-4">
            Manuale Digitale Sonagli Amigurumi
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-sm">
            <p className="flex items-center gap-2">
              ✓ Pagamento Sicuro al 100%
            </p>
            <p className="flex items-center gap-2">
              ✓ Dati Protetti
            </p>
            <p className="flex items-center gap-2">
              ✓ Garanzia di 7 Giorni
            </p>
          </div>

          <p className="text-sm opacity-80 mb-2">
            © {new Date().getFullYear()} Manuale Sonagli Amigurumi. Tutti i diritti riservati.
          </p>

          <p className="text-xs opacity-70">
            Questo prodotto viene commercializzato con garanzia attraverso la piattaforma sicura di pagamenti.
          </p>
        </div>
      </div>
    </footer>
  );
}
