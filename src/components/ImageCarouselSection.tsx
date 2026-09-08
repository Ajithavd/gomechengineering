// import { useEffect, useState } from "react";

// const images = [
//   "/images/hero4.jpg",
//   "/images/hero4.jpg",
//   "/images/hero4.jpg",
//   "/images/hero4.jpg",
//   "/images/hero4.jpg",
//   "/images/hero4.jpg",
//   "/images/hero4.jpg",
//   "/images/hero4.jpg",
// ];

// const ImageCarouselSection = () => {
//   const [activeIndex, setActiveIndex] = useState(3);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   const getStyle = (index: number) => {
//     const diff = index - activeIndex;

//     if (diff === 0) {
//       return "translate-x-0 scale-110 z-30 rotate-0 opacity-100";
//     }

//     if (diff === -1 || diff === images.length - 1) {
//       return "-translate-x-[180px] rotate-[-20deg] scale-95 opacity-80 z-20";
//     }

//     if (diff === 1 || diff === -(images.length - 1)) {
//       return "translate-x-[180px] rotate-[20deg] scale-95 opacity-80 z-20";
//     }

//     if (diff === -2 || diff === images.length - 2) {
//       return "-translate-x-[350px] rotate-[-35deg] scale-90 opacity-50 z-10";
//     }

//     if (diff === 2 || diff === -(images.length - 2)) {
//       return "translate-x-[350px] rotate-[35deg] scale-90 opacity-50 z-10";
//     }

//     return "opacity-0 scale-75";
//   };

//   return (
//     <section className="w-full py-20 bg-background overflow-hidden">
//       <div className="text-center mb-16">
//         <h3 className="text-primary font-bold text-[28px]">
//           Our Machinery & Infrastructure
//         </h3>
//       </div>

//       <div className="relative flex justify-center items-center h-[500px] perspective-[2000px]">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute transition-all duration-700 ease-in-out ${getStyle(
//               index
//             )}`}
//           >
//             <img
//               src={img}
//               alt={`Machine ${index}`}
//               className="w-[320px] h-[420px] object-cover rounded-3xl shadow-2xl"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImageCarouselSection;


import { useRef, useState } from "react";

const images = [
  `${import.meta.env.BASE_URL}images/gallery1.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery2.png`,
  `${import.meta.env.BASE_URL}images/gallery3.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery4.png`,
  `${import.meta.env.BASE_URL}images/gallery5.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery6.png`,
  `${import.meta.env.BASE_URL}images/gallery7.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery8.png`,
  `${import.meta.env.BASE_URL}images/gallery9.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery10.jpeg`,
];

const ImageCarouselSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-16 bg-white overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-[900px] mx-auto mb-8 px-6">
        
        <h3 className="text-primary font-bold text-3xl sm:text-[42px] leading-tight mb-4">
          Our Machinery & Infrastructure
        </h3>

        <p className="text-base sm:text-[18px] text-gray-700 leading-relaxed">
          Our products showcase <span className="font-semibold text-black">precision engineering</span> and 
          <span className="font-semibold text-black"> superior craftsmanship</span> across every component. 
          Designed to meet industrial standards, each piece reflects 
          <span className="font-semibold text-black"> quality, durability, and accuracy</span>.
        </p>

      </div>

      {/* 3D Carousel for Desktop */}
      <div className="scene mt-4 hidden lg:flex">
        <div
          className="a3d"
          style={{ ["--n" as any]: images.length }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Machine ${index}`}
              className="card"
              style={{ ["--i" as any]: index }}
            />
          ))}
        </div>
      </div>

      {/* Swipeable / Draggable Carousel for Mobile/Tablet */}
      <div className="lg:hidden mt-8 px-6">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-5 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing select-none scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-[260px] sm:w-[320px] shrink-0 pointer-events-none">
              <img
                src={img}
                alt={`Machine ${index}`}
                className="w-full h-[340px] sm:h-[420px] object-cover rounded-3xl shadow-lg border border-gray-100"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <span className="text-xs font-semibold text-muted-foreground animate-pulse">
            Drag or swipe left/right to view
          </span>
        </div>
      </div>

    </section>
  );
};

export default ImageCarouselSection;
