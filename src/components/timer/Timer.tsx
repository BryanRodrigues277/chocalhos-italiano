import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 22,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 22, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-5 bg-bege-light">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-xl md:text-2xl font-bold text-cinza-dark mb-4">
          <span className="text-4xl">⭐</span> Manuale Digitale Completo (PDF) con oltre +100 schemi di sonagli.
        </p>

        <h2 className="text-2xl md:text-[24px] font-bold text-cinza-dark mb-6">
          <span className="text-2xl">⏳</span> Offerta Incredibile per <span className="text-vermelho-urgencia">tempo limitato!</span>
        </h2>

        <div className="flex justify-center gap-8 mb-6">
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-bold text-vermelho-urgencia mb-2">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-sm text-cinza-medium uppercase tracking-wider">Minuti</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-bold text-vermelho-urgencia mb-2">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-sm text-cinza-medium uppercase tracking-wider">Secondi</div>
          </div>
        </div>

        <p className="text-base text-cinza-dark mb-6">
          <span className="text-2xl">⏳</span> Attenzione: solo <strong>ultimi 4 posti</strong> disponibili con questo sconto e bonus.
        </p>

        <div className="max-w-[600px] mx-auto">
          <div className="bg-gray-300 rounded-full h-8 relative overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: '99%',
                background: 'linear-gradient(90deg, #4CAF50, #45a049)'
              }}
            ></div>
          </div>
          <p className="text-base text-cinza-medium mt-2">Posti occupati 99%</p>
        </div>
      </div>
    </section>
  );
}
