const HeroSection = () => {
  return (
    <section className="relative w-full bg-dark rounded-b-[100px]">
      <div className="relative min-h-[100vh] md:min-h-[750px] lg:min-h-[900px]">
        {/* Background Image */}
        <img
          src="/images/hero3.jpg"
          alt="Portfolio background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full min-h-[100vh] md:min-h-[750px] lg:min-h-[900px] px-6 md:px-10 lg:px-[160px] pb-16 lg:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-10">
            {/* Left: Headline */}
            <div className="flex-1">
              {/* <span className="text-primary font-bold text-xl md:text-[30px] leading-[42px]">Hey, I'm a</span> */}
              <h1 className="text-dark-foreground font-extrabold text-5xl md:text-7xl lg:text-[90px] leading-[1.03] tracking-[-2.4px] mt-1">
                Precision CNC Machining & 
                <br />
                Fabrication Solutions
              </h1>
            </div>

            {/* Right: Tagline */}
            <div className="lg:max-w-[480px]">
              <p className="text-dark-foreground font-bold text-xl md:text-[30px] leading-[42px]">
                Accuracy, reliability & superior craftsmanship
              </p>
              <p className="text-dark-foreground/60 text-base leading-7 mt-4">
                
              </p>
            </div>
          </div>

          {/* Feature tags */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 lg:mt-16">
            {[
              { num: "01", label: "CNC" },
              { num: "02", label: "VMC" },
              { num: "03", label: "Fabrication" },
              { num: "04", label: "Welding" },
            ].map((item) => (
              <div key={item.num}>
                <p className="text-base font-bold leading-[22px]">
                  <span className="text-primary">#</span>
                  <span className="text-dark-foreground">{item.num}</span>
                </p>
                <p className="text-dark-foreground text-base leading-7 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
