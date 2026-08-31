import Image from "next/image";
import styles from "./Services.module.css";
import services from "./data/services";

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesInner}>
        <p className={styles.eyebrow}>Servicios</p>
        <h2 className={styles.title}>Nuestros Servicios</h2>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardArt}>
                <Image
                  src={`/images/${service.icon}.jpg`}
                  alt={service.title}
                  width={420}
                  height={420}
                  quality={100}
                  sizes="(max-width: 768px) 160px, 220px"
                  className={styles.icon}
                />
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
