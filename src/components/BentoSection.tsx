import { motion } from "framer-motion";

const BentoSection = () => {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
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
            <span className="text-primary font-bold text-xl sm:text-[30px] leading-tight sm:leading-[42px]">
              OUR CAPABILITIES
            </span>
            <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl md:text-[60px] leading-tight md:leading-[72px] tracking-[-1.2px] mt-4">
              Machinery & Infrastructure 
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:w-1/2 flex items-center"
          >
            <p className="text-foreground font-bold text-lg sm:text-xl md:text-[30px] leading-normal md:leading-[42px]">
              Modern equipment powering precision engineering — built to handle complex manufacturing with speed, 
              accuracy, and reliable performance.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Box 1 - Large with image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group order-1 md:order-1"
          >
            <img
              src="/images/a2.jpeg"
              alt="Strategy First"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-3 sm:mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-xl sm:text-2xl md:text-[39px] leading-tight tracking-[-0.8px]">
                KTM VMC with 4th Axis
              </h3>
              <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
                Advanced vertical machining center
              </p>
            </div>
          </motion.div>

          {/* Box 2 - Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-center items-center text-center p-6 sm:p-10 order-2 md:order-2"
          >
            <h3 className="text-foreground font-extrabold text-xl sm:text-2xl md:text-[32px] leading-tight tracking-[-0.8px]">
               KTM VMC with 4th Axis
             </h3>
            <div className="w-20 h-[5px] rounded-[10px] bg-primary/70 my-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Advanced vertical machining center designed for multi-axis operations, enabling precise machining on multiple sides 
              in a single setup—improving accuracy, reducing production time, and ensuring high efficiency for complex components.
            </p>
          </motion.div>

          {/* Box 3 - Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-center items-center text-center p-6 sm:p-10 order-4 md:order-3"
          >
            <h3 className="text-foreground font-extrabold text-xl sm:text-2xl md:text-[32px] leading-tight tracking-[-0.8px]">
              KTM CNC Lathe RIG 1200+
            </h3>
            <div className="w-20 h-[5px] rounded-[10px] bg-primary my-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
               Heavy-duty CNC lathe engineered for high-precision turning of large and complex components, 
               ensuring consistent accuracy, smooth finishes, and reliable performance in demanding industrial applications.
            </p>
          </motion.div>

          {/* Box 4 - Large with image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group order-3 md:order-4"
          >
            <img
              src="/images/a3.jpeg"
              alt="Consistency Across Touchpoints"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-3 sm:mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-xl sm:text-2xl md:text-[39px] leading-tight tracking-[-0.8px]">
                KTM CNC Lathe RIG 1200+
              </h3>
              <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
                Heavy-duty turning operations
              </p>
            </div>
          </motion.div>

          {/* Box 5 - Large with image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group order-5 md:order-5"
          >
            <img
              src="/images/a1.jpeg"
              alt="Consistency Across Touchpoints"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-3 sm:mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-xl sm:text-2xl md:text-[39px] leading-tight tracking-[-0.8px]">
                KTM CNC Lathe RIG 500+
              </h3>
              <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
                Precision turning solutions
              </p>
            </div>
          </motion.div>

          {/* Box 6 - Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-center items-center text-center p-6 sm:p-10 order-6 md:order-6"
          >
            <h3 className="text-foreground font-extrabold text-xl sm:text-2xl md:text-[32px] leading-tight tracking-[-0.8px]">
              KTM CNC Lathe RIG 500+
            </h3>
            <div className="w-20 h-[5px] rounded-[10px] bg-primary my-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Compact yet powerful CNC lathe built for precision turning of medium-sized components, 
              delivering high accuracy, smooth finishes, and efficient performance for both batch and custom production.
            </p>
          </motion.div>

          {/* Box 7 - Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-center items-center text-center p-6 sm:p-10 order-8 md:order-7"
          >
            <h3 className="text-foreground font-extrabold text-xl sm:text-2xl md:text-[32px] leading-tight tracking-[-0.8px]">
              Tolerance & Precision
            </h3>
            <div className="w-20 h-[5px] rounded-[10px] bg-primary my-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We maintain high precision machining standards across all components: achieving tolerances down to ±0.01 mm, executing strict quality audits, and ensuring parts conform exactly to technical drawings.
            </p>
          </motion.div>

          {/* Box 8 - Large with image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group order-7 md:order-8"
          >
            <img
              src="/images/pr4.png"
              alt="Consistency Across Touchpoints"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-3 sm:mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-xl sm:text-2xl md:text-[39px] leading-tight tracking-[-0.8px]">
                Precision Quality Control
              </h3>
              <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
                Strict dimensional verification for perfect fitting
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoSection;
