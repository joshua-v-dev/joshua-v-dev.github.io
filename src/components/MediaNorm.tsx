// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { buildUrl } from "cloudinary-build-url";
// import globalStyles from "../styles/globalStyles";
//
// export default function Home() {
//   const url = buildUrl("galaxy_ne5p8f", {
//     cloud: {
//       cloudName: "fay",
//     },
//     transformations: {
//       effect: {
//         name: "pixelate",
//         value: 40,
//       },
//     },
//   });
//
//   const urlBlurred = buildUrl("galaxy_ne5p8f", {
//     cloud: {
//       cloudName: "fay",
//     },
//     transformations: {
//       quality: 1,
//     },
//   });
//
//   const [image, setImage] = useState();
//
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setImage(url);
//   //   }, 2000);
//   // }, [url]);
//
//   return (
//     <div className={globalStyles.container}>
//       <main className={globalStyles.main}>
//         <h1 className={globalStyles.title}>Out of this world!</h1>
//
//         <div className={globalStyles.grid}>
//           <div className={globalStyles.card}>
//             <Image src="/galaxy.jpg" alt="Galaxy" width={1000} height={750} />
//             <h3>Local Image</h3>
//           </div>
//
//           <div className={globalStyles.card}>
//             <Image
//               src="https://res.cloudinary.com/fay/image/upload/v1617047570/galaxy_ne5p8f.jpg"
//               alt="Galaxy"
//               width={1000}
//               height={750}
//             />
//             <h3>Cloudinary - Static</h3>
//           </div>
//
//           <div className={globalStyles.card}>
//             <Image src={url} alt="Galaxy" width={1000} height={750} />
//             <h3>Cloudinary - Dynamic</h3>
//           </div>
//
//           <div className={globalStyles.card}>
//             <div
//               style={{
//                 position: "relative",
//                 height: 0,
//                 paddingTop: `${(750 / 1000) * 100}%`,
//                 backgroundImage: `url(${urlBlurred})`,
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
//       <footer className={globalStyles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <Image
//             src="/vercel.svg"
//             alt="Vercel Logo"
//             className={globalStyles.logo}
//           />
//         </a>
//       </footer>
//     </div>
//   );
// }
export {};
