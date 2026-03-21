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
  "/images/gallery1.jpeg",
  "/images/gallery2.png",
  "/images/gallery3.jpeg",
  "/images/gallery4.png",
  "/images/gallery5.jpeg",
  "/images/gallery6.png",
  "/images/gallery7.jpeg",
  "/images/gallery8.png",
  "/images/gallery9.jpeg",
  "/images/gallery10.jpeg",
  // "/images/gallery8.jpeg",
];

const ImageCarouselSection = () => {
  const N = images.length;

  return (
    <section className="relative hidden lg:block left-1/2 right-1/2 -mx-[50vw] w-screen py-16 bg-white overflow-hidden">
  
  {/* Header */}
  <div className="text-center max-w-[900px] mx-auto mb-8 px-4">
    
    <h3 className="text-primary font-bold text-[42px] leading-tight mb-4">
      Our Machinery & Infrastructure
    </h3>

    <p className="text-[18px] text-gray-700 leading-relaxed">
      Our products showcase <span className="font-semibold text-black">precision engineering</span> and 
      <span className="font-semibold text-black"> superior craftsmanship</span> across every component. 
      Designed to meet industrial standards, each piece reflects 
      <span className="font-semibold text-black"> quality, durability, and accuracy</span>.
    </p>

  </div>

  {/* Carousel */}
  <div className="scene mt-4">
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

</section>
  );
};

export default ImageCarouselSection;
