import Image from "next/image";

interface GalleryProps {
  photos: string[];
}

export default async function Gallery({ photos }: GalleryProps) {
  return (
    <section id="gallery" className="py-20 px-4 bg-[#efe2d5]">
      <div className="max-w-7xl mx-auto">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#734f42]">
          Galería
        </p>
        <h2 className="text-4xl font-bold text-center mb-16 text-[#2b1d1a]"></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={`${photo}-${index}`}
              className="h-64 overflow-hidden rounded-[28px] border border-[#d8c4ad] shadow-[0_18px_40px_rgba(69,48,41,0.10)] transition hover:shadow-[0_20px_46px_rgba(69,48,41,0.18)]"
            >
              <Image
                src={photo}
                alt={`Foto del local ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                height={350}
                width={350}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
