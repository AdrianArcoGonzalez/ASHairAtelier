import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Visítanos</h2>

        <div className={styles.grid}>
          <div className={styles.infoColumn}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrap}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className={styles.infoLabel}>Dirección</h3>
                <p className={styles.infoText}>
                  Carrer Mare de Déu de Núria, 17
                </p>
                <p className={styles.infoText}>08401 Granollers, Barcelona</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrap}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className={styles.infoLabel}>Teléfono</h3>
                <a href="tel:696576674" className={styles.phoneLink}>
                  696 576 674
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrap}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <h3 className={styles.infoLabel}>Instagram</h3>
                <a
                  href="https://www.instagram.com/ashairatelier/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.phoneLink}
                >
                  @ashairatelier
                </a>
              </div>
            </div>
          </div>

          <div className={styles.scheduleColumn}>
            <div className={styles.scheduleHeader}>
              <div className={styles.iconWrap}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className={styles.infoLabel}>Horario de Apertura</h3>
            </div>

            <div className={styles.scheduleList}>
              <div className={styles.scheduleRow}>
                <span className={styles.dayLabel}>Lunes</span>
                <span className={styles.hourText}>Cerrado</span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.dayLabel}>Martes</span>
                <span className={styles.hourText}>
                  9:30 - 13:00, 15:30 - 19:00
                </span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.dayLabel}>Miércoles</span>
                <span className={styles.hourText}>
                  9:30 - 13:00, 15:30 - 19:00
                </span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.dayLabel}>Jueves</span>
                <span className={styles.hourText}>
                  9:30 - 13:00, 15:30 - 19:00
                </span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.dayLabel}>Viernes</span>
                <span className={styles.hourText}>9:30 - 19:00</span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.dayLabel}>Sábado</span>
                <span className={styles.hourText}>9:00 - 14:00</span>
              </div>
              <div className={styles.scheduleRow}>
                <span className={styles.dayLabel}>Domingo</span>
                <span className={styles.hourText}>Cerrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
