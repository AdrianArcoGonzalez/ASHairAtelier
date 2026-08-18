const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-[radial-gradient(circle_at_top,_#49332f_0%,_#2b1d1a_38%,_#1d1413_100%)] text-[#f6efe9]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d9ba8b]">
          La belleza de sentirte tú
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#f8f0e7]">
          Tu Belleza es Nuestro Arte
        </h1>
        <p className="text-xl md:text-2xl text-[#e7d9cc] mb-8 max-w-2xl mx-auto">
          El arte de cuidar y transformar tu cabello. Profesionales certificados
          con los mejores productos y técnicas.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <a
            href="#contact"
            className="bg-[#d9ba8b] text-[#2b1d1a] px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#c29b66]/20 transition hover:bg-[#e8c994]"
          >
            Pedir Cita
          </a>
          <a
            href="#services"
            className="border border-[#d9ba8b] bg-transparent text-[#f3e9df] px-8 py-4 rounded-full font-semibold transition hover:bg-[#f3e9df]/10"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
