// const logos = [
//   "/images/logo-1.png",
//   "/images/logo-2.png",
//   "/images/logo-3.png",
//   "/images/logo-4.png",
//   "/images/logo-5.png",
// ];

// const LogosSection = () => {
//   return (
//     <section className="w-full bg-secondary rounded-b-[100px] py-16 md:py-24 overflow-hidden">
//       <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[160px]">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <p className="text-foreground text-sm font-bold leading-5 whitespace-nowrap shrink-0">
//             Our
//             <br />
//             Clients
//           </p>

//           {/* Marquee */}
//           <div className="relative flex-1 overflow-hidden w-full">
//             <div className="flex animate-marquee gap-10 items-center">
//               {[...logos, ...logos, ...logos].map((logo, i) => (
//                 <img
//                   key={i}
//                   src={logo}
//                   alt="Client logo"
//                   className="h-[30px] w-[200px] object-contain shrink-0 opacity-80"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogosSection;


const clientTexts = [
  "Sams Precision Components",
  "Rainbow Industries",
  " Sri Sai Heavy Engineering",
  "Global Engineering",
  "Sri Krishna Industries",
  "Excel Engineering",

];

const LogosSection = () => {
  return (
    <section className="w-full bg-secondary rounded-b-[100px] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[160px]">
        <div className="flex flex-col md:flex-row items-center gap-8">

          <p className="text-foreground text-orange-600 text-xl font-bold leading-5 whitespace-nowrap shrink-0">
            
            Clients
          </p>

          {/* Marquee */}
          <div className="relative flex-1 overflow-hidden w-full">
            <div className="flex animate-marquee gap-10 items-center">
              {[...clientTexts, ...clientTexts, ...clientTexts].map((text, i) => (
                <span
                  key={i}
                  className="text-xl font-semibold text-foreground opacity-90 whitespace-nowrap shrink-0"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogosSection;
