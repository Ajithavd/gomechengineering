import ArrowButton from "./ArrowButton";

const services = [
  {
    tagline: "Your brand, visually defined.",
    title: "Identity Design",
    description:
      "Logos, typography, color systems, and complete visual direction.",
    image: "/images/gallery1.jpeg",
  },
  {
    tagline: "Clarity behind the visuals.",
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and creative direction aligned with your goals.",
    image: "/images/gallery2.png",
  },
  {
    tagline: "Ongoing expert guidance.",
    title: "Creative Consulting",
    description:
      "Ongoing design support, art direction, and guidance for your brand team.",
    image: "/images/gallery3.jpeg",
  },
];

const ServicesSection = () => {
  return (
    <section  className="w-full py-16 md:py-[100px] px-6 md:px-10 lg:px-[160px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Separator */}
        <div className="w-full h-[5px] rounded-[10px] bg-secondary mb-16 lg:mb-[200px]" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] mb-16">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold text-[29px] leading-[42px]">
              Services
            </span>
            <h2 className="text-foreground font-extrabold text-4xl md:text-[58px] leading-[72px] tracking-[-1.2px] mt-4">
              What I Can Help You With
            </h2>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center gap-8">
            <p className="text-foreground font-bold text-xl md:text-[30px] leading-[42px]">
              From strategy to execution, delivering tailored solutions that elevate your brand with clarity, 
              creativity, and measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-muted-foreground text-base leading-7">
                Let's Build Something Meaningful Together
              </span>
              <ArrowButton label="Get in touch" variant="primary" />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-secondary rounded-[30px] p-10 flex flex-col justify-end h-[400px] md:h-[500px] overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Optional Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative">
                <span className="text-primary font-bold text-xl leading-6 tracking-[-0.4px]">
                  {service.tagline}
                </span>
                <h3 className="text-white font-extrabold text-[30px] leading-9 mt-4">
                  {service.title}
                </h3>
                <p className="text-white text-sm leading-[22px] mt-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
