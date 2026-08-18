import Image from "next/image";
import services from "../data/services";

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-[#f7f1ea]">
      <div className="max-w-7xl mx-auto">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#7a5f4f]">
          Servicios
        </p>
        <h2 className="text-4xl font-bold text-center mb-16 text-[#2b1d1a]"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#d9ba8b]/60 bg-[#302217] p-8 shadow-[0_14px_40px_rgba(43,29,26,0.22)] transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(43,29,26,0.28)] text-center"
            >
              <div className="mb-4 mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#f0e2d1]">
                <Image
                  src={`/images/${service.icon}.jpg`}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f6efe9]">
                {service.title}
              </h3>
              <p className="text-[#f2e4d7]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
