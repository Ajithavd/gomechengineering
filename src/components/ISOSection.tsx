import ArrowButton from "./ArrowButton";

const certifications = [
  {
    // tagline: "Globally Recognized Quality Standard",
    // title: "ISO 9001:2015 Certified",
    // description:
    //   "Certified quality management systems ensuring precision, consistency, and reliability across all operations.",
    image: `${import.meta.env.BASE_URL}images/ISO.jpg`,
  },
];

import { motion } from "framer-motion";

const ISOSection = () => {
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
              Certification
            </span>
            <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl md:text-[58px] leading-tight md:leading-[72px] tracking-[-1.2px] mt-4">
              International Quality Standards
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
              Committed to delivering excellence through globally recognized
              ISO-certified quality systems.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Trusted by Industrial & OEM Clients
              </span>
            </div>
          </motion.div>
        </div>

        {/* Certification Card */}
        <div className="grid grid-cols-1 gap-5">
          {certifications.map((cert) => (
            <div
            //   key={cert.title}
              className="relative w-full flex justify-center rounded-[30px]"
            >
              {/* Background Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="w-full flex justify-center"
              >
                <div className="relative w-full max-w-[280px] sm:max-w-[420px] md:max-w-[500px] aspect-[1229/1742] overflow-hidden shadow-md rounded-2xl border border-gray-100">

                    <img
                    src={`${import.meta.env.BASE_URL}images/ISO.jpg`}
                    alt="ISO Certification"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    />

                </div>
            </motion.div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 " />

              {/* Content */}
              <div className="relative max-w-[600px]">
                <span className="text-primary font-bold text-xl leading-6 tracking-[-0.4px]">
                  {/* {cert.tagline} */}
                </span>

                <h3 className="text-white font-extrabold text-[36px] leading-[44px] mt-4">
                  {/* {cert.title} */}
                </h3>

                <p className="text-white/90 text-base leading-[26px] mt-4">
                  {/* {cert.description} */}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ISOSection;