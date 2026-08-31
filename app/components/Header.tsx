"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;

      if (!navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full border-b border-[#d8c4ad]/40 bg-[#302217] text-[#f6efe9] shadow-[0_10px_30px_rgba(43,29,26,0.18)]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden bg-transparent">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
          </div>
          <div>
            <div className="text-xl font-bold tracking-[0.12em] text-[#f6efe9]">
              AS Hair Atelier
            </div>
          </div>
        </div>

        <button
          className="text-[#f6efe9] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-[#f6efe9] md:flex">
          <a href="#services" className="transition hover:text-[#d9ba8b]">
            Servicios
          </a>
          <a href="#gallery" className="transition hover:text-[#d9ba8b]">
            Galería
          </a>
          <a href="#testimonials" className="transition hover:text-[#d9ba8b]">
            Reseñas
          </a>
          <a href="#contact" className="transition hover:text-[#d9ba8b]">
            Contacto
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#d8c4ad]/20 bg-[#302217] md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4 text-sm uppercase tracking-[0.15em] text-[#f6efe9]">
            <a
              href="#services"
              className="transition hover:text-[#d9ba8b]"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#gallery"
              className="transition hover:text-[#d9ba8b]"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </a>
            <a
              href="#testimonials"
              className="transition hover:text-[#d9ba8b]"
              onClick={() => setIsMenuOpen(false)}
            >
              Reseñas
            </a>
            <a
              href="#contact"
              className="transition hover:text-[#d9ba8b]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
