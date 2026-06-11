import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";

const services = [
  {
    tagline: "Technical Excellence",
    title: "Precision-Driven Manufacturing",
    description:
      "Delivering high-performance machined components through advanced technology, skilled craftsmanship, and engineering expertise",
    image: "/images/gallery1.jpeg",
  },
  {
    tagline: "Consistent Quality",
    title: "Built to Exceptional Standards",
    description:
      "Every part is manufactured and inspected to maintain dimensional accuracy, superior finish, and long-term reliability.",
    image: "/images/gallery2.png",
  },
  {
    tagline: "Trusted Partnership",
    title: "Supporting Your Manufacturing Goals",
    description:
      "Combining technical expertise, responsive service, and reliable delivery to become a dependable extension of your supply chain.",
    image: "/images/gallery3.jpeg",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Separator */}
        <div className="w-full h-[5px] rounded-[10px] bg-secondary mb-12 lg:mb-24" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] mb-12 lg:mb-[80px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold text-xl sm:text-[29px] leading-tight sm:leading-[42px]">
              Services
            </span>
            <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl md:text-[58px] leading-tight md:leading-[72px] tracking-[-1.2px] mt-4">
              What We Offer
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col justify-center gap-8"
          >
            <p className="text-foreground font-bold text-lg sm:text-xl md:text-[30px] leading-normal md:leading-[42px]">
              From custom design prototyping to batch engineering production, delivering high-tolerance components that meet demanding industrial standards.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Let's Build Something Meaningful Together
              </span>
              <a href="#contact">
                <ArrowButton label="Get in touch" variant="primary" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-secondary rounded-[30px] p-8 sm:p-10 flex flex-col justify-end h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Optional Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <span className="text-primary font-bold text-sm sm:text-base tracking-wider uppercase">
                  {service.tagline}
                </span>
                <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-[30px] leading-tight mt-2 sm:mt-4">
                  {service.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mt-2 sm:mt-4">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
