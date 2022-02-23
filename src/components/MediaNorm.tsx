// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { buildUrl } from "cloudinary-build-url";
// import {stitches} from '../../stitches.config'
//
// export default function MediaNorm() {
//   const url = buildUrl(
//     "https://res.cloudinary.com/dpytkhyme/image/upload/v1645573359/deep_space_bg_multi_right_a1opj9.png",
//     {
//       cloud: {
//         cloudName: "fay",
//       },
//       transformations: {
//         effect: {
//           name: "sepia",
//           value: 40,
//         },
//       },
//     }
//   );
//
//
//
//   const [image, setImage] = useState();
//
//   useEffect(() => {
//     setTimeout(() => {
//       setImage(url);
//     }, 2000);
//   }, [url]);
//
//   return (
//     <div className={stitches.container}>
//       <main className={stitches.main}>
//         <h1 className={stitches.title}>Out of this world!</h1>
//
//         <div className={stitches.grid}>
//           <div className={stitches.card}>
//             <Image src="/galaxy.jpg" alt="Galaxy" width={1000} height={750} />
//             <h3>Local Image</h3>
//           </div>
//
//           <div className={stitches.card}>
//             <Image
//               src=""
//               alt="Galaxy"
//               width={1000}
//               height={750}
//             />
//             <h3>Cloudinary - Static</h3>
//           </div>
//
//           <div className={stitches.card}>
//             <Image src={url} alt="Galaxy" width={1000} height={750} />
//             <h3>Cloudinary - Dynamic</h3>
//           </div>
//
//           <div className={stitches.card}>
//             <div
//               style={{
//                 position: "relative",
//                 height: 0,
//                 paddingTop: `${(750 / 1000) * 100}%`,
//                 backgroundImage: `url(${url})`,
//                 backgroundPosition: "center center",
//                 backgroundSize: `100%`,
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                 }}
//               >
//                 {image && (
//                   <Image src={image} alt="Galaxy" width={1000} height={750} />
//                 )}
//               </div>
//             </div>
//             <h3>Cloudinary - Blurred Placeholder</h3>
//           </div>
//         </div>
//       </main>
//
//       <footer className={stitches.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <Image
//             src="/vercel.svg"
//             alt="Vercel Logo"
//             className={stitches.logo}
//           />
//         </a>
//       </footer>
//     </div>
//   );
// }
//
export {};
