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


const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
  "/images/hero6.jpg",
  "/images/hero7.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

const ImageCarouselSection = () => {
  const N = images.length;

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-24 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h3 className="text-primary font-bold text-[28px]">
          Our Machinery & Infrastructure
        </h3>
      </div>

      <div className="scene">
        <div
          className="a3d"
          style={{ ["--n" as any]: N }}
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
    </section>
  );
};

export default ImageCarouselSection;
