import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";

interface Project {
  title: string;
  description: string[];
  image: string;
  imagePosition: "left" | "right";
}

const projects: Project[] = [
  {
    title: "CNC & VMC Machining",
    description: [
      "Turning & milling operations",
      "Tight tolerances",
      "Protyping Batch Production",
      "Tool Room Work"
    ],
    image: `${import.meta.env.BASE_URL}images/hero5.jpg`,
    imagePosition: "left",
  },
  {
    title: "Welding Solutions",
    description: [
      "Precision &  Welding",
      "Durable industrial applications",
      "Multiple welding processes",
    ],
    image: `${import.meta.env.BASE_URL}images/hero7.jpg`,
    imagePosition: "right",
  },
];


const ProjectCard = ({ project }: { project: Project }) => {
  const isLeft = project.imagePosition === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-[100px] justify-center items-center`}
    >
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="w-full lg:w-[63.75%] overflow-hidden rounded-[30px]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[250px] sm:h-[400px] lg:h-[400px] object-cover transition-transform duration-500 hover:scale-110"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-[33%] flex flex-col justify-end gap-5 py-4"
      >
        
        <h3 className="text-foreground font-extrabold text-3xl md:text-[40px] leading-[44px] tracking-[-0.8px]">
          {project.title}
        </h3>
        <div className="w-full h-[5px] rounded-[10px] bg-primary" />
        <div className="text-muted-foreground text-base leading-7">
          <ul className="text-muted-foreground text-base leading-7 space-y-3">
            {project.description.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
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
              WHAT WE DO
            </span>
            <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl md:text-[60px] leading-tight md:leading-[72px] tracking-[-1.2px] mt-4">
              Core Services
            </h2>
            <h3 className="text-foreground font-bold text-lg sm:text-xl md:text-[30px] leading-normal md:leading-[42px] mt-2">
              Built on precision. Powered by expertise.
            </h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:w-1/2 flex items-center"
          >
            <p className="text-foreground font-bold text-lg sm:text-xl md:text-[30px] leading-normal md:leading-[42px]">
              Engineered for excellence, our core services integrate precision CNC machining 
              and welding processes to create reliable solutions for complex industrial applications.
            </p>
          </motion.div>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-16 lg:gap-[100px]">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
