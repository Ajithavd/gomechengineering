const steps = [
  {
    num: "01",
    title: "Precision & Accuracy",
    description:
      "High-tolerance machining ensuring consistent quality, exact specifications, and reliable performance across every component produced.",
  },
  {
    num: "02",
    title: "Advance Machinery",
    description:
      " Modern CNC and VMC machines enabling efficient, accurate, and high-quality production for complex manufacturing requirements.",
  },
  {
    num: "03",
    title: "Skilled Workforce",
    description:
      "Experienced professionals delivering precision, problem-solving, and consistent excellence in handling complex manufacturing challenges effectively.",
  },
  {
    num: "04",
    title: "On-Time Delivery",
    description:
      "Streamlined processes ensuring timely project completion with reliability, efficiency, and strong commitment to delivery schedules.",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full py-24 md:py-[200px] px-6 md:px-10 lg:px-[160px] bg-secondary rounded-b-[100px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] mb-16 lg:mb-[100px]">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold text-[30px] leading-[42px]">
              Why Us
            </span>
            <h2 className="text-foreground font-extrabold text-4xl md:text-[60px] leading-[72px] tracking-[-1.2px] mt-4">
              Why Choose Go Mech Engineering
            </h2>
          </div>
          <div className="lg:w-1/2 flex items-center">
            <p className="text-foreground font-bold text-xl md:text-[30px] leading-[42px]">
              Combining advanced machinery, precision engineering, and expert craftsmanship to deliver reliable, 
              high-quality manufacturing solutions that meet the highest industrial standards.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-background rounded-[30px] p-10 flex flex-col h-[350px] md:h-[400px]"
            >
              <span className="text-primary font-extrabold text-[60px] md:text-[80px] leading-none">
                {step.num}
              </span>
              <div className="mt-4 mb-6">
                <div className="w-full h-[5px] rounded-[10px] bg-primary mb-5" />
                <h3 className="text-foreground font-extrabold text-xl md:text-2xl leading-7">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-[22px] mt-3">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
