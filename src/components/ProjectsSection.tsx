import ArrowButton from "./ArrowButton";

interface Project {
  title: string;
  description: string[];
  image: string;
  imagePosition: "left" | "right";
}

// const projects: Project[] = [
//   {
//     title: "CNC & VMC Machining",
//     description:
//       "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
//     image: "/images/hero2.jpg",
//     imagePosition: "left",
//   },
//   {
//     title: "Orange Blox",
//     description:
//       "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
//     image: "/images/hero6.jpg",
//     imagePosition: "right",
//   },
//   {
//     title: "Nova Scene",
//     description:
//       "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
//     image: "/images/hero5.jpg",
//     imagePosition: "left",
//   },
// ];

const projects: Project[] = [
  {
    title: "CNC & VMC Machining",
    description: [
      "Turning & milling operations",
      "Tight tolerances",
      "Batch & custom production",
    ],
    image: "/images/hero5.jpg",
    imagePosition: "left",
  },
  {
    title: "Metal Fabrication",
    description: [
      "Structural & custom fabrication",
      "Industrial-grade finishing",
      "Complex assemblies",
    ],
    image: "/images/hero6.jpg",
    imagePosition: "right",
  },
  {
    title: "Welding Solutions",
    description: [
      "Precision & certified welding",
      "Durable industrial applications",
      "Multiple welding processes",
    ],
    image: "/images/hero7.jpg",
    imagePosition: "left",
  },
];


const ProjectCard = ({ project }: { project: Project }) => {
  const isLeft = project.imagePosition === "left";

  return (
    <div
      className={`flex flex-col ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-5 lg:gap-[100px] items-end flex justify-center items-center `}
    >
      <div className="w-full lg:w-[63.75%] overflow-hidden rounded-[30px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] md:h-[500px] lg:h-[400px] object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="w-full lg:w-[33%] flex flex-col justify-end gap-5 py-4">
        
        <h3 className="text-foreground font-extrabold text-3xl md:text-[40px] leading-[44px] tracking-[-0.8px]">
          {project.title}
        </h3>
        <div className="w-full h-[5px] rounded-[10px] bg-primary" />
        <p className="text-muted-foreground text-base leading-7">
          {/* {project.description} */}
                    <ul className="text-muted-foreground text-base leading-7 space-y-3">
                      {project.description.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">✔</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
        </p>
        {/* <ArrowButton label="Click Here" variant="muted" /> */}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="w-full py-16 md:py-[100px] px-6 md:px-10 lg:px-[160px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Separator */}
        <div className="w-full h-[5px] rounded-[10px] bg-secondary mb-16 lg:mb-[200px]" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] mb-16 lg:mb-[100px]">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold text-[30px] leading-[42px]">
              WHAT WE DO
            </span>
            <h2 className="text-foreground font-extrabold text-4xl md:text-[60px] leading-[72px] tracking-[-1.2px] mt-4">
              Core Services
            </h2>
            <h3 className="text-foreground font-bold text-xl md:text-[30px] leading-[42px]">
              Built on precision. Powered by expertise.
            </h3>
          </div>
          <div className="lg:w-1/2 flex items-center">
            <p className="text-foreground font-bold text-xl md:text-[30px] leading-[42px]">
              Engineered for excellence, our core services integrate precision CNC machining, robust metal fabrication, 
              and certified welding processes to create reliable solutions for complex industrial applications.
            </p>
          </div>
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
