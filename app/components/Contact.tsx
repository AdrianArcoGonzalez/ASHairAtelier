const Contact=()=>{

return(

    <section id="contact" className="py-20 px-4 bg-[linear-gradient(135deg,#f4e9df_0%,#eedfcf_100%)]">
        <div className="max-w-4xl mx-auto">
          <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#7a5f4f]">Contacto</p>
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2b1d1a]">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#2b1d1a]">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start rounded-2xl border border-[#d8c4ad] bg-[#fffaf7]/80 p-4">
                  <span className="text-2xl">📍</span>
                  <p className="text-[#5b433d]">Calle Principal 123, Ciudad<br/>Código Postal 12345</p>
                </div>
                <div className="flex gap-4 items-center rounded-2xl border border-[#d8c4ad] bg-[#fffaf7]/80 p-4">
                  <span className="text-2xl">📞</span>
                  <p className="text-[#5b433d]">696 576 674</p>
                </div>
                <div className="rounded-2xl border border-[#d7b98a] bg-[#fffaf7]/90 p-5 shadow-[0_10px_24px_rgba(88,64,53,0.08)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e2d1] text-2xl">⏰</span>
                    <h4 className="text-lg font-semibold text-[#2b1d1a]">Horario</h4>
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
              <button className="w-full bg-[#2b1d1a] text-[#f5eadf] py-3 rounded-xl font-semibold transition hover:bg-[#3a2a27]">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

)

};

export default Contact;