import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-[#302217]">
      <div className="max-w-4xl mx-auto">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#d9ba8b]">
          Contacto
        </p>
        <h2 className="text-4xl font-bold text-center mb-16 text-[#f6efe9]"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4">
              <div className="flex gap-4 items-center rounded-2xl border border-[#d8c4ad] bg-[#fffaf7]/80 p-4">
                <span className="text-2xl">📞</span>
                <p className="text-[#5b433d]">696 576 674</p>
              </div>
              <a
                href="https://www.instagram.com/ashairatelier/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#d8c4ad] bg-[#fffaf7]/80 p-4 transition hover:border-[#c7a77a] hover:bg-[#fffdfb]"
              >
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[#d8c4ad] bg-[#f7efe8]">
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[#5b433d]">@ashairatelier</p>
              </a>
              <div className="rounded-2xl border border-[#d8c4ad] bg-[#fffaf7]/80 p-4">
                <div className="flex gap-4 items-start mb-4">
                  <span className="text-2xl">📍</span>
                  <p className="text-[#5b433d]">
                    Carrer Mare de Déu de Núria, 17, Granollers, Barcelona
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    src="https://www.google.com/maps?q=AS%20Hair%20Atelier%20Granollers&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#d7b98a] bg-[#fffaf7]/90 p-5 shadow-[0_10px_24px_rgba(88,64,53,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e2d1] text-2xl">
                  ⏰
                </span>
                <h4 className="text-lg font-semibold text-[#2b1d1a]">
                  Horario
                </h4>
              </div>
              <div className="space-y-2 text-sm text-[#5b433d]">
                <div className="flex justify-between gap-4 border-b border-[#eadcc9] pb-2">
                  <span className="font-medium">Martes</span>
                  <span>9:00 – 19:00</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#eadcc9] pb-2">
                  <span className="font-medium">Miércoles</span>
                  <span>9:30 – 13:00 / 14:00 – 19:00</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#eadcc9] pb-2">
                  <span className="font-medium">Jueves</span>
                  <span>9:30 – 13:00 / 14:00 – 19:00</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#eadcc9] pb-2">
                  <span className="font-medium">Viernes</span>
                  <span>9:30 – 13:00 / 14:00 – 19:00</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#eadcc9] pb-2">
                  <span className="font-medium">Sábado</span>
                  <span>9:00 – 14:00</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#eadcc9] pb-2">
                  <span className="font-medium">Domingo</span>
                  <span className="text-[#7a5f4f]">Cerrado</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="font-medium">Lunes</span>
                  <span className="text-[#7a5f4f]">Cerrado</span>
                </div>
              </div>
            </div>
            <form className="space-y-4 rounded-[28px] border border-[#d8c4ad] bg-[#fffaf7]/90 p-6 shadow-[0_14px_38px_rgba(88,64,53,0.08)]">
              <input
                type="text"
                placeholder="Tu Nombre"
                className="w-full px-4 py-3 border border-[#d6c3af] bg-[#fffdfb] rounded-xl text-[#2b1d1a] placeholder:text-[#82685f] focus:outline-none focus:border-[#c7a77a]"
              />
              <input
                type="email"
                placeholder="Tu Email"
                className="w-full px-4 py-3 border border-[#d6c3af] bg-[#fffdfb] rounded-xl text-[#2b1d1a] placeholder:text-[#82685f] focus:outline-none focus:border-[#c7a77a]"
              />
              <textarea
                placeholder="Tu Mensaje"
                rows={5}
                className="w-full px-4 py-3 border border-[#d6c3af] bg-[#fffdfb] rounded-xl text-[#2b1d1a] placeholder:text-[#82685f] focus:outline-none focus:border-[#c7a77a]"
              ></textarea>
              <button className="w-full bg-[#302217] text-[#f5eadf] py-3 rounded-xl font-semibold transition hover:bg-[#3b2a22]">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
