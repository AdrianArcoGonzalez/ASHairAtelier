
const Gallery = () => {

return(<section id="gallery" className="py-20 px-4 bg-[#efe2d5]">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#734f42]">Galería</p>
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2b1d1a]">Nuestra Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="h-64 rounded-[28px] border border-[#d8c4ad] bg-[linear-gradient(135deg,#d6b68d_0%,#f0e2d1_100%)] overflow-hidden shadow-[0_18px_40px_rgba(69,48,41,0.10)] hover:shadow-[0_20px_46px_rgba(69,48,41,0.18)] transition flex items-center justify-center">
                <div className="text-6xl opacity-80">📸</div>
              </div>
            ))}
          </div>
        </div>
      </section>
)};

export default Gallery;