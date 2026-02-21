import ArrowButton from "./ArrowButton";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-24 md:py-[200px] px-6 md:px-10 lg:px-[160px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px]">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold text-[29px] leading-[42px]">
              WHO WE ARE
            </span>
            <h2 className="text-foreground font-extrabold text-4xl md:text-[59px] leading-[1.22] tracking-[-1.2px] mt-4">
              About Go Mech Engineering
            </h2>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center gap-8">
            <p className="text-foreground font-bold text-xl md:text-[30px] leading-[42px]">
              GO MECH ENGINEERING is a precision engineering company based in Chennai, specialized in CNC, VMC, 
              fabrication & welding services. We serve multiple industrial sectors with a commitment to excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-muted-foreground text-base leading-7">
                Let's Build Something Meaningful Together
              </span>
              <a
                href="https://wa.me/917305946887"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowButton label="Get in touch" variant="primary" />
              </a>
            </div>
          </div>
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
