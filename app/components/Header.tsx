"use client";

import Image from "next/image";
import { useState } from "react";

const Header= ()=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#d8c4ad]/40 bg-[#2b1d1a]/95 text-[#f6efe9] shadow-[0_10px_30px_rgba(43,29,26,0.18)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5b88e] bg-[#f3eadf] text-lg font-bold text-[#2b1d1a]">
              <Image src="/images/logo.webp" alt="Logo" width={24} height={24} className="h-6 w-6" />
            </div>
            <div>
              
              <div className="text-xl font-bold tracking-[0.12em] text-[#f6efe9]">AS Hair Atelier</div>
            </div>
          </div>
          <button 
            className="md:hidden text-[#f6efe9]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
              
          </button>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-[#f6efe9]">
            <a href="#services" className="transition hover:text-[#d9ba8b]">Servicios</a>
            <a href="#gallery" className="transition hover:text-[#d9ba8b]">Galería</a>
            <a href="#testimonials" className="transition hover:text-[#d9ba8b]">Reseñas</a>
            <a href="#contact" className="transition hover:text-[#d9ba8b]">Contacto</a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#d8c4ad]/20 bg-[#2b1d1a]">
            <div className="flex flex-col gap-4 px-4 py-4 text-sm uppercase tracking-[0.15em] text-[#f6efe9]">
              <a href="#services" className="transition hover:text-[#d9ba8b]">Servicios</a>
              <a href="#gallery" className="transition hover:text-[#d9ba8b]">Galería</a>
              <a href="#testimonials" className="transition hover:text-[#d9ba8b]">Reseñas</a>
              <a href="#contact" className="transition hover:text-[#d9ba8b]">Contacto</a>
            </div>
          </div>
        )}
      </nav>
    )
};

export default Header;