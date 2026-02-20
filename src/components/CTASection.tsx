import ArrowButton from "./ArrowButton";

const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-secondary">
      {/* Top white shape */}
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-background rounded-b-[100px] z-10" />

      <div className="relative rounded-b-[100px] bg-dark overflow-hidden min-h-[600px] md:min-h-[900px] lg:min-h-[800px]">
        <img
          src="/images/hero-bg.jpg"
          alt="CTA background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[600px] md:min-h-[900px] lg:min-h-[850px] px-6">
          <span className="text-primary font-bold text-[29px] leading-[42px]">
            Start Your Brand
          </span>
          <h2 className="text-dark-foreground font-extrabold text-4xl md:text-[60px] leading-[72px] tracking-[-1.2px] mt-4">
            Let's Bring Your
            <br />
            Brand to Life
          </h2>
          {/* <p className="text-dark-foreground text-base leading-7 mt-6 max-w-[580px]">
            Ready to make something amazing together? Whether you're starting
            fresh or evolving your brand, I'm here to help.
          </p> */}

          <p className="text-dark-foreground text-base leading-7 mt-6 max-w-[580px]">
            Ready to collaborate on your next project? From precision machining to
            complete fabrication solutions, we are here to deliver excellence.
          </p>

          {/* CEO Quote */}
          <div className="mt-10 max-w-[650px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <blockquote className="text-dark-foreground italic text-lg leading-relaxed">
              “At Go Mech Engineering, precision is not just a standard — it’s our
              commitment. Every component we manufacture reflects our dedication
              to quality and excellence.”
            </blockquote>
            <p className="mt-4 text-primary font-semibold">
              — Managing Director
            </p>
          </div>


          {/* <div className="mt-8">
            <ArrowButton label="Get In Touch" variant="light" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
