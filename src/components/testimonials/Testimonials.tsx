export default function Testimonials() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Cosa dicono le nostre allieve:
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12">
          +3.500 allieve stanno già creando i loro sonagli amigurumi
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl max-w-[450px] mx-auto">
            <img
              src="/images/depoimento-chocalho-1-new.png"
              alt="Depoimento Aluna Chocalho 1"
              loading="lazy"
              className="w-full h-auto block"
              style={{ imageRendering: 'auto' }}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl max-w-[450px] mx-auto">
            <img
              src="/images/depoimento-chocalho-2-new.png"
              alt="Depoimento Aluna Chocalho 2"
              loading="lazy"
              className="w-full h-auto block"
              style={{ imageRendering: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
