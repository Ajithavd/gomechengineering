const BentoSection = () => {
  return (
    <section id="services" className="w-full py-16 md:py-[100px] px-6 md:px-10 lg:px-[160px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Separator */}
        <div className="w-full h-[5px] rounded-[10px] bg-secondary mb-16 lg:mb-[200px]" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] mb-16 lg:mb-[100px]">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold text-[30px] leading-[42px]">
              OUR CAPABILITIES
            </span>
            <h2 className="text-foreground font-extrabold text-4xl md:text-[60px] leading-[72px] tracking-[-1.2px] mt-4">
              Machinery & Infrastructure 
            </h2>
          </div>
          <div className="lg:w-1/2 flex items-center">
            <p className="text-foreground font-bold text-xl md:text-[30px] leading-[42px]">
              Modern equipment powering precision engineering — built to handle complex manufacturing with speed, 
              accuracy, and reliable performance.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Box 1 - Large with image */}
          <div className="md:col-span-2 relative h-[400px] md:h-[400px] rounded-[30px] overflow-hidden">
            <img
              src="/images/a2.jpeg"
              alt="Strategy First"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-2xl md:text-[39px] leading-[44px] tracking-[-0.8px]">
                KTM VMC with 4th Axis
              </h3>
              <p className="text-dark-foreground text-base leading-7 mt-3">
                Advanced vertical machining center
              </p>
            </div>
          </div>

          {/* Box 2 - Orange */}
          <div className="relative h-[400px] md:h-[400px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-end p-10">
            <h3 className="text-foreground font-extrabold text-2xl md:text-[38px] leading-[44px] tracking-[-0.8px]">
               KTM VMC with 4th Axis
            </h3>
            <div className="w-full h-[5px] rounded-[10px] bg-primary/70 mb-5" />

            <p className="text-foreground text-base leading-7 mt-3">
              Advanced vertical machining center designed for multi-axis operations, enabling precise machining on multiple sides 
              in a single setup—improving accuracy, reducing production time, and ensuring high efficiency for complex components .
            </p>
          </div>

          {/* Box 3 - Light gray */}
          <div className="relative h-[400px] md:h-[400px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-end p-10">
            <h3 className="text-foreground font-extrabold text-2xl md:text-[40px] leading-[44px] tracking-[-0.8px]">
              KTM CNC Lathe RIG 1200+
            </h3>
            <div className="w-full h-[5px] rounded-[10px] bg-primary mb-5" />

            <p className="text-muted-foreground text-base leading-7 mt-3">
               Heavy-duty CNC lathe engineered for high-precision turning of large and complex components, 
               ensuring consistent accuracy, smooth finishes, and reliable performance in demanding industrial applications .

            </p>
          </div>

          {/* Box 4 - Large with image */}
          <div className="md:col-span-2 relative h-[400px] md:h-[400px] rounded-[30px] overflow-hidden">
            <img
              src="/images/a3.jpeg"
              alt="Consistency Across Touchpoints"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-2xl md:text-[39px] leading-[44px] tracking-[-0.8px]">
                KTM CNC Lathe RIG 1200+
              </h3>
              <p className="text-dark-foreground text-base leading-7 mt-3">
                Heavy-duty turning operations
              </p>
            </div>
          </div>

          {/* Box 5 - Large with image */}
          <div className="md:col-span-2 relative h-[400px] md:h-[400px] rounded-[30px] overflow-hidden">
            <img
              src="/images/a1.jpeg"
              alt="Consistency Across Touchpoints"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-2xl md:text-[39px] leading-[44px] tracking-[-0.8px]">
                KTM CNC Lathe RIG 500+
              </h3>
              <p className="text-dark-foreground text-base leading-7 mt-3">
                Precision turning solutions
              </p>
            </div>
          </div>

          {/* Box 6 - Light gray */}
          <div className="relative h-[400px] md:h-[400px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-end p-10">
            <h3 className="text-foreground font-extrabold text-2xl md:text-[40px] leading-[44px] tracking-[-0.8px]">
              KTM CNC Lathe RIG 500+
            </h3>
            <div className="w-full h-[5px] rounded-[10px] bg-primary mb-5" />

            <p className="text-muted-foreground text-base leading-7 mt-3">
              Compact yet powerful CNC lathe built for precision turning of medium-sized components, 
              delivering high accuracy, smooth finishes, and efficient performance for both batch and custom production .

            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoSection;
