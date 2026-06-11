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

import { motion } from "framer-motion";

const ProcessSection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-secondary rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[100px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
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
              Why Us
            </span>
            <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl md:text-[60px] leading-tight md:leading-[72px] tracking-[-1.2px] mt-4">
              Why Choose Go Mech Engineering
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
              Combining advanced machinery, precision engineering, and expert craftsmanship to deliver reliable, 
              high-quality manufacturing solutions that meet the highest industrial standards.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-background rounded-[30px] p-6 sm:p-8 md:p-10 flex flex-col h-[280px] sm:h-[350px] md:h-[400px] shadow-sm"
            >
              <span className="text-primary font-extrabold text-[50px] sm:text-[60px] md:text-[80px] leading-none">
                {step.num}
              </span>
              <div className="mt-2 sm:mt-4 mb-4">
                <div className="w-full h-[5px] rounded-[10px] bg-primary mb-3 sm:mb-5" />
                <h3 className="text-foreground font-extrabold text-lg sm:text-xl md:text-2xl leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
