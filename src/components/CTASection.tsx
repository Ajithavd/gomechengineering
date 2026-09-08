import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";

const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-secondary">
      {/* Top white shape */}
      <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[100px] bg-background rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[100px] z-10" />

      <div className="relative rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[100px] bg-dark overflow-hidden min-h-[480px] sm:min-h-[600px] md:min-h-[700px]">
        <img
          src={`${import.meta.env.BASE_URL}images/hero1.jpg`}
          alt="CTA background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black/60 to-transparent" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[480px] sm:min-h-[600px] md:min-h-[700px] px-6 pt-32 md:pt-44 pb-16"
        >
          <span className="text-primary font-bold text-xl sm:text-[29px] leading-tight sm:leading-[42px] mt-2 sm:mt-4">
            START YOUR PROJECT
          </span>
          <h2 className="text-dark-foreground font-extrabold text-3xl sm:text-4xl md:text-[60px] leading-tight md:leading-[72px] tracking-[-1.2px] mt-4">
            Let's Bring Your
            <br />
            Vision to Life
          </h2>

          <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-4 max-w-[580px]">
            Partner with us - To transform technical drawings into high-precision components with consistent quality, dependable delivery and manufacturing expertise you can trust.
          </p>

          {/* CEO Quote */}
          <div className="mt-8 max-w-[650px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 mx-4">
            <blockquote className="text-dark-foreground italic text-sm sm:text-base md:text-lg leading-relaxed">
              “At Go Mech Engineering, precision is not just a standard — it’s our commitment. Every component we 
              manufacture reflects our dedication to 
              quality and excellence.”
            </blockquote>
            <p className="mt-3 text-primary text-sm sm:text-base font-semibold">
              — Managing Director
            </p>
          </div>

          <div className="mt-8">
            <a href="#contact">
              <ArrowButton label="Get In Touch" variant="light" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
