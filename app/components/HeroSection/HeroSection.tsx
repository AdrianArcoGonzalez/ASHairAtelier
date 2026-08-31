import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground} />

      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>AS Hair Atelier</p>

        <h1 className={styles.heroTitle}>Tu Belleza es Nuestro Arte</h1>

        <p className={styles.heroText}>
          El arte de cuidar y transformar tu cabello. Profesionales certificados
          con los mejores productos y técnicas.
        </p>

        <a href="#contact" className={styles.heroButton}>
          Pedir Cita
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
