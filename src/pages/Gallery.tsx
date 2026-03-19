import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const galleryItems = [
  {
    src: "/images/gallery1.jpeg",
    alt: "Dream Area Project",
    quote: "Precision is not just a goal — it's our standard.",
  },
  {
    src: "/images/gallery2.png",
    alt: "CNC Machining",
    quote: "Engineering tomorrow's solutions, today.",
  },
  {
    src: "/images/gallery3.jpeg",
    alt: "Orange Blox Project",
    quote: "Where innovation meets craftsmanship.",
  },
  {
    src: "/images/gallery4.png",
    alt: "Metal Fabrication",
    quote: "Built with strength. Designed with purpose.",
  },
  {
    src: "/images/gallery5.jpeg",
    alt: "Nova Scene Project",
    quote: "Every detail matters. Every weld counts.",
  },
  {
    src: "/images/gallery6.png",
    alt: "Industrial Welding",
    quote: "Turning raw materials into masterpieces.",
  },
  {
    src: "/images/gallery7.jpeg",
    alt: "Strategy First",
    quote: "Quality that speaks for itself.",
  },
  {
    src: "/images/gallery8.png",
    alt: "Consistency",
    quote: "Consistency across every touchpoint.",
  },
  {
    src: "/images/gallery9.jpeg",
    alt: "Go Mech Engineering",
    quote: "Innovating Success, Delivering Excellence.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const Gallery = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="w-full py-20">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[160px]">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT: Parallax Image */}
              <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden shadow-xl">
                <div
                  className="parallax w-full h-full"
                  style={{
                    backgroundImage: "url('/images/hero1.jpg')",
                  }}
                />

                {/* Top → Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* RIGHT: Glassmorphism Text Box */}
              <div className="
                backdrop-blur-xl 
                bg-white/10 
                border border-white/20 
                shadow-[0_8px_30px_rgba(0,0,0,0.3)] 
                rounded-3xl 
                p-10 
                text-white
              ">
                <h2 className="text-4xl text-black font-bold mb-4">
                  Engineering Excellence in Action
                </h2>

                <p className="text-lg leading-relaxed text-gray-600">
                  Explore our gallery showcasing precision engineering, advanced machinery, 
                  and high-quality manufacturing projects completed by Go Mech Engineering.
                </p>

                <button className="
                  mt-6 px-6 py-3 rounded-xl 
                  bg-gradient-to-r from-orange-500 to-red-600 
                  text-white font-bold shadow-lg 
                  hover:opacity-90 transition
                ">
                  Learn More
                </button>
              </div>

            </div>

          </div>
        </section>


      {/* Hero */}
      <section className="pt-[120px] pb-16 px-6 md:px-10 lg:px-[160px]">
        <div className="max-w-[1600px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold text-[29px] leading-[42px]"
          >
            Our Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground font-extrabold text-4xl md:text-[60px] leading-[1.2] tracking-[-1.2px] mt-4"
          >
            Engineering Excellence 
            <br />
            in Every Detail
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-7 mt-6 max-w-[600px] mx-auto"
          >
            Explore a visual showcase of our precision manufacturing, advanced machinery, and expertly crafted engineering projects that reflect our commitment to quality, innovation, and industrial excellence.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-10 lg:px-[160px] pb-24">
        <motion.div
          className="max-w-[1600px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="break-inside-avoid group relative overflow-hidden rounded-[24px] cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{
                  height: i % 3 === 0 ? "500px" : i % 3 === 1 ? "380px" : "440px",
                }}
              />
              {/* Overlay with quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <div className="w-10 h-[3px] bg-primary mb-4 rounded-full" />
                  <p className="text-dark-foreground font-bold text-lg leading-7 drop-shadow-lg">
                    "{item.quote}"
                  </p>
                  <p className="text-dark-foreground/60 text-sm mt-2">{item.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Gallery;
