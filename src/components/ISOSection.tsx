import ArrowButton from "./ArrowButton";

const certifications = [
  {
    // tagline: "Globally Recognized Quality Standard",
    // title: "ISO 9001:2015 Certified",
    // description:
    //   "Certified quality management systems ensuring precision, consistency, and reliability across all operations.",
    image: "/images/iso-certificate.jpg",
  },
];

const ISOSection = () => {
  return (
    <section className="w-full py-16 md:py-[100px] px-6 md:px-10 lg:px-[160px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* Separator */}
        <div className="w-full h-[5px] rounded-[10px] bg-secondary mb-16 lg:mb-[200px]" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] mb-16">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold text-[29px] leading-[42px]">
              Certification
            </span>
            <h2 className="text-foreground font-extrabold text-4xl md:text-[58px] leading-[72px] tracking-[-1.2px] mt-4">
              International Quality Standards
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center gap-8">
            <p className="text-foreground font-bold text-xl md:text-[30px] leading-[42px]">
              Committed to delivering excellence through globally recognized
              ISO-certified quality systems.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-muted-foreground text-base leading-7">
                Trusted by Industrial & OEM Clients
              </span>
              <ArrowButton label="View Certificate" variant="primary" />
            </div>
          </div>
        </div>

        {/* Certification Card */}
        <div className="grid grid-cols-1 gap-5">
          {certifications.map((cert) => (
            <div
            //   key={cert.title}
              className="relative w-full flex justify-center rounded-[30px]"
            >
              {/* Background Image */}
              <div className="w-full flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-[9/16] overflow-hidden ">

                    <img
                    src="/images/ISO.jpg"
                    alt="ISO Certification"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    />

                </div>
            </div>

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