// import React, { useState, useEffect } from "react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
// import { ArrowRightIconNorm, ArrowLeftIconNorm } from './MediaNorm'
// import Image from "next/image";
// import { featuredProducts } from "../database/database";
//
// let slideInterval: NodeJS.Timer;
// export default function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//
//   useEffect(() => {
//     slideInterval = setInterval(() => {
//       setCurrentIndex((currentIndex) => {
//         if (currentIndex === featuredProducts.length - 1) {
//           return 0;
//         }
//         return currentIndex + 1;
//       });
//     }, 4000);
//   }, []);
//
//   useEffect(() => {
//     return () => {
//       clearInterval(slideInterval);
//     };
//   }, []);
//
//   return (
//     <div className="slider">
//       <div className="slider__container">
//         <div className="slider__container__left">
//           <div className="slider__container__left__arrow">
//             <ArrowLeftIconNorm>
//               <ArrowLeftIcon
//                 className="slider__container__left__arrow__icon "
//                 onClick={() => {
//                   setCurrentIndex((currentIndex) => {
//                     if (currentIndex === 0) {
//                       return featuredProducts.length - 1;
//                     }
//                     return currentIndex - 1;
//                   });
//                 }}
//               />
//             </ArrowLeftIconNorm>
//           </div>
//         </div>
//         <div className="slider__container__center">
//           <div className="slider__container__center__slide">
//             <Image
//               src={featuredProducts[currentIndex]?.toString()}
//               width={300}
//               height={300}
//               alt="featured product"
//               priority
//             />
//           </div>
//         </div>
//         <div className="slider__container__right">
//           <div className="slider__container__right__arrow">
//             <ArrowRightIconNorm>
//               <ArrowRightIcon
//                 className="slider__container__right__arrow__icon"
//                 onClick={() => {
//                   setCurrentIndex((currentIndex) => {
//                     if (currentIndex === featuredProducts.length - 1) {
//                       return 0;
//                     }
//                     return currentIndex + 1;
//                   });
//                 }}
//               />
//             </ArrowRightIconNorm>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export {};
