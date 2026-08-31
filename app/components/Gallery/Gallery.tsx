import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const localGallery = [
    "/images/atelier1.webp",
    "/images/atelier2.webp",
    "/images/atelier3.webp",
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.galleryInner}>
        <h2 className={styles.title}>El Atelier</h2>

        <div className={styles.showcase}>
          <div className={styles.primaryCard}>
            <Image
              src={localGallery[1]}
              alt="Interior del atelier"
              className={styles.primaryImage}
              priority
              height={510}
              width={382}
              quality={100}
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>

          <div className={styles.secondaryGrid}>
            {[localGallery[2], localGallery[0]].map((photo, index) => (
              <div key={`${photo}-${index}`} className={styles.secondaryCard}>
                <Image
                  src={photo}
                  alt={`Foto del atelier ${index + 1}`}
                  className={styles.secondaryImage}
                  height={510}
                  width={382}
                  quality={100}
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
