import ArrowButton from "./ArrowButton";

const services = [
  {
    tagline: "Your brand, visually defined.",
    title: "Brand Identity Design",
    description:
      "Logos, typography, color systems, and complete visual direction.",
  },
  {
    tagline: "Clarity behind the visuals.",
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and creative direction aligned with your goals.",
  },
  {
    tagline: "Ongoing expert guidance.",
    title: "Creative Consulting",
    description:
      "Ongoing design support, art direction, and guidance for your brand team.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-16 md:py-[100px] px-6 md:px-10 lg:px-[160px] overflow-hidden">
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
              From strategy to visuals, I offer tailored services to help your
              brand grow with clarity and impact.
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
              className="bg-secondary rounded-[30px] p-10 flex flex-col justify-end h-[400px] md:h-[500px]"
            >
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-auto mt-0" />
              <div>
                <span className="text-primary font-bold text-xl leading-6 tracking-[-0.4px]">
                  {service.tagline}
                </span>
                <h3 className="text-foreground font-extrabold text-[30px] leading-9 mt-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-[22px] mt-4">
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
