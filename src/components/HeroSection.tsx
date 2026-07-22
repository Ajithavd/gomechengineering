import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full bg-dark rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[100px]">
      <div className="relative min-h-[100vh] md:min-h-[750px] lg:min-h-[900px] ">
        {/* Background Image */}
        <img
          src="/images/imgs1.png"
          alt="Portfolio background"
          className="absolute inset-0 w-full h-full object-cover "
        />
        {/* Overlay gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[90vh] md:min-h-[750px] lg:min-h-[900px] px-6 md:px-10 lg:px-[160px] pt-28 pb-16 lg:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-10">
            {/* Left: Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
              {/* <span className="text-primary font-bold text-xl md:text-[30px] leading-[42px]">Hey, I'm a</span> */}
              <h1 className="text-dark-foreground font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-[90px] leading-[1.03] tracking-[-2.4px]">
                CNC MILLING & 
                <br />
                TURNING SOLUTIONS
              </h1>
            </motion.div>

            {/* Right: Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:max-w-[480px]"
            >
              <p className="text-dark-foreground font-bold text-xl sm:text-2xl md:text-[30px] leading-snug lg:leading-[42px]">
                Accuracy, reliability & superior craftsmanship
              </p>
              <p className="text-dark-foreground/60 text-base leading-7 mt-4">
                
              </p>
            </motion.div>
          </div>

          {/* Feature tags */}
          <div className="relative grid grid-cols-2 md:flex md:justify-between gap-6 md:gap-0 mt-12 lg:mt-24 border-t border-dark-foreground/10 pt-8">
            {[
              { num: "01", label: "CNC" },
              { num: "02", label: "VMC" },
              { num: "03", label: "Fabrication" },
              { num: "04", label: "Welding" },
            ].map((item, index) => (
              <motion.div 
                key={item.num} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <p className="text-sm md:text-base font-bold leading-none">
                  <span className="text-primary">#</span>
                  <span className="text-dark-foreground">{item.num}</span>
                </p>
                <p className="text-dark-foreground/80 text-sm md:text-base leading-relaxed mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
