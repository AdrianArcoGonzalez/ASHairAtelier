import testimonials from "../data/testimonials";

const Testimonials=()=>{

return (<section id="testimonials" className="py-20 px-4 bg-[#f7f1ea]">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#7a5f4f]">Reseñas</p>
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2b1d1a]">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="rounded-3xl border border-[#eadcc9] bg-[#fffaf7] p-8 shadow-[0_14px_36px_rgba(88,64,53,0.08)]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#c79a5a] text-xl">★</span>
                  ))}
                </div>
                <p className="text-[#5b433d] mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-[#2b1d1a]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>)
};

export default Testimonials;