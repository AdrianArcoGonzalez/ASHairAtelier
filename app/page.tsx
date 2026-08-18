'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: '✂️',
      title: 'Cortes',
      description: 'Cortes personalizados para hombres, mujeres y niños'
    },
    {
      icon: '🎨',
      title: 'Tinturas',
      description: 'Coloración profesional con productos premium'
    },
    {
      icon: '💆',
      title: 'Tratamientos',
      description: 'Tratamientos capilares hidratantes y reparadores'
    },
    {
      icon: '✨',
      title: 'Styling',
      description: 'Peinados para eventos especiales y ocasiones'
    },
    {
      icon: '💇',
      title: 'Alisados',
      description: 'Alisados progresivos y relajantes'
    },
    {
      icon: '🧴',
      title: 'Skincare',
      description: 'Cuidado de la piel y tratamientos faciales'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      comment: 'Excelente atención, mi cabello se ve increíble',
      rating: 5
    },
    {
      name: 'Carlos López',
      comment: 'Profesionales muy capacitados y ambiente acogedor',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      comment: 'El mejor cambio de look que he tenido',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-600">Estilo & Elegancia</div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-amber-600 transition">Servicios</a>
            <a href="#gallery" className="hover:text-amber-600 transition">Galería</a>
            <a href="#testimonials" className="hover:text-amber-600 transition">Reseñas</a>
            <a href="#contact" className="hover:text-amber-600 transition">Contacto</a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col gap-4 px-4 py-4">
              <a href="#services" className="hover:text-amber-600 transition">Servicios</a>
              <a href="#gallery" className="hover:text-amber-600 transition">Galería</a>
              <a href="#testimonials" className="hover:text-amber-600 transition">Reseñas</a>
              <a href="#contact" className="hover:text-amber-600 transition">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Tu Belleza es Nuestro Arte
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bienvenido a la peluquería más elegante de la ciudad. Profesionales certificados
            con los mejores productos y técnicas.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a href="#contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition">
              Agendar Cita
            </a>
            <a href="#services" className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition">
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestra Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-300 h-64 rounded-lg overflow-hidden hover:shadow-xl transition flex items-center justify-center">
                <div className="text-6xl opacity-50">📸</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl">📍</span>
                  <p className="text-gray-600">Calle Principal 123, Ciudad<br/>Código Postal 12345</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">📞</span>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">✉️</span>
                  <p className="text-gray-600">info@estiloelegancia.com</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">⏰</span>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 19:00<br/>Sábado: 10:00 - 18:00<br/>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Tu Nombre" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
              <input 
                type="email" 
                placeholder="Tu Email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              />
              <textarea 
                placeholder="Tu Mensaje" 
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              ></textarea>
              <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">© 2024 Estilo & Elegancia. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="#" className="hover:text-amber-400 transition">f</a>
            <a href="#" className="hover:text-amber-400 transition">📱</a>
            <a href="#" className="hover:text-amber-400 transition">💬</a>
          </div>
        </div>
      </footer>
    </div>
    //           alt="Vercel logomark"
    //           width={16}
    //           height={14}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
