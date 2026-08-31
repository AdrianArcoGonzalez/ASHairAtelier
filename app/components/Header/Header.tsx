"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

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
    <nav ref={navRef} className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <div className={styles.brandText}>AS Hair Atelier</div>
        </div>

        <div className={styles.nav}>
          <a href="#services" className={styles.navLink}>
            Servicios
          </a>
          <a href="#gallery" className={styles.navLink}>
            Galería
          </a>
          <a href="#testimonials" className={styles.navLink}>
            Reseñas
          </a>
          <a href="#contact" className={styles.navLink}>
            Contacto
          </a>
        </div>

        <div className={styles.headerActions}>
          <a href="#contact" className={styles.ctaButton}>
            Pedir Cita
          </a>

          <button
            className={styles.mobileToggle}
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
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuList}>
            <a
              href="#services"
              className={styles.mobileMenuLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#gallery"
              className={styles.mobileMenuLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </a>
            <a
              href="#testimonials"
              className={styles.mobileMenuLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Reseñas
            </a>
            <a
              href="#contact"
              className={styles.mobileMenuLink}
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
