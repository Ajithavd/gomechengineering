import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px]">
          <motion.div 
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold text-[24px] sm:text-[29px] leading-tight sm:leading-[42px]">
              About Go Mech Engineering
            </span>
            <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl md:text-[39px] leading-[1.22] tracking-[-1.2px] mt-4">
               Trusted Precision Machining & Engineering Solutions

            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col justify-center gap-8"
          >
            <p className="text-foreground font-semibold text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-[32px]">
              Go Mech Engineering is a precision engineering company specializing in CNC machining, VMC operations, and Welding solutions. 
              Based in Ambattur, Chennai, the company serves industrial and OEM clients across multiple sectors. With modern machinery and skilled expertise - Go Mech Engineering delivers reliable, high-quality components with accuracy, consistency, and timely project execution.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-muted-foreground text-base leading-7">
                Let's Build Something Meaningful Together
              </span>
              <a href="#contact">
                <ArrowButton label="Get in touch" variant="primary" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Images */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 lg:mt-[100px]">
          {["/images/about1.jpg", "/images/about2.jpg", "/images/hero4.jpg"].map(
            (src, i) => (
              <div key={i} className="overflow-hidden rounded-[30px]">
                <img
                  src={src}
                  alt={`Design showcase ${i + 1}`}
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )
          )}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
