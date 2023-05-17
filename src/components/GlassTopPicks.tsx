import Image from "next/image";
import Link from "next/link";
import { FunctionComponentElement } from "react";
import { topPicks } from "~/lib/constants";

const GlassTopPicks = () => {
  return (
    <>
      <section id="main-content" className="mx-auto grid max-w-4xl p-3">
        <div className="grid items-center justify-center p-3">
          <h2 className=" shadow-accent-1-xl p-1 text-5xl font-bold tracking-tight text-accent-1 brightness-125">
            What brings you here?
          </h2>
          <p className=" shadow-accent-2-xl grid p-2 text-2xl font-bold text-accent-2 brightness-150">
            Depending on who you are I&apos;ll show you the content accordingly
            in order to increase your user experience while browsing my
            portfolio.
          </p>
        </div>

        <div className="mx-auto grid items-center justify-center p-4">
          <div className="mx-auto grid max-w-4xl gap-x-8 bg-transparent p-1 shadow-indigo-600 sm:grid-flow-col lg:grid-cols-3">
            {topPicks.map(
              (topPicks, i): FunctionComponentElement<PageTransitionEvent> => (
                <div
                  key={i}
                  className="border-b-1 relative grid items-center justify-evenly rounded-3xl border-4 border-t-4 border-double border-black border-indigo-600/90 border-t-indigo-600 border-opacity-90 bg-black/30 p-1 p-4 shadow-md shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 sm:grid-flow-col md:grid-flow-row "
                >
                  <Link
                    className="mx-auto h-60 w-60 rounded-lg border-double p-2 outline-8 outline-offset-2	outline-black	brightness-100"
                    href={topPicks.href}
                    passHref
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light "
                  >
                    <Image
                      className="border-shadow-2 relative mx-auto grid items-center justify-center rounded-xl border border-indigo-600 border-opacity-90 bg-black/30 object-cover p-1 shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm"
                      src={topPicks.src}
                      alt={topPicks.imageAlt}
                      width={500}
                      height={500}
                      priority
                    />
                  </Link>
                  <h5 className="shadow-accent-2-2xl grid justify-center p-1  text-xl font-bold leading-relaxed text-indigo-700 brightness-125">
                    {topPicks.name}
                  </h5>
                  <p className="shadow-accent-4-xl grid justify-center p-1 text-sm font-bold  text-accent-2">
                    {topPicks.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-center p-1">
                    <Link
                      href={topPicks.href}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <div className=" grid items-end justify-end p-2">
                        <button
                          type="button"
                          className="grid grid-flow-col-dense justify-end rounded-3xl border-2 border-t-2
                       border-double border-indigo-600 border-t-indigo-600  border-opacity-90 bg-black/30 px-3 py-2 text-xs font-normal uppercase leading-normal text-gray-200 shadow-md
                      shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                        >
                          Learn More
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default GlassTopPicks;

// const collections = [
//   {
//     name: "Women's",
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
//     imageAlt: 'Woman wearing an off-white cotton t-shirt.',
//   },
//   {
//     name: "Men's",
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
//     imageAlt: 'Man wearing a charcoal gray cotton t-shirt.',
//   },
//   {
//     name: 'Desk Accessories',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
//     imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
//   },
// ]

// export default function GlassTopPicks() {
//   return (
//     <div className="relative bg-white">
//       {/* Background image and overlap */}
//       <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
//         <div className="relative w-full flex-1 bg-gray-800">
//           <div className="absolute inset-0 overflow-hidden">
//             <img
//               src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
//               alt=""
//               className="h-full w-full object-cover object-center"
//             />
//           </div>
//           <div className="absolute inset-0 bg-gray-900 opacity-50" />
//         </div>
//         <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
//       </div>

//       <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
//         {/* Background image and overlap */}
//         <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
//           <div className="relative w-full flex-1 bg-gray-800">
//             <div className="absolute inset-0 overflow-hidden">
//               <img
//                 src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
//                 alt=""
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gray-900 opacity-50" />
//           </div>
//           <div className="h-48 w-full bg-white" />
//         </div>
//         <div className="relative py-32">
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Mid-Season Sale</h1>
//           <div className="mt-4 sm:mt-6">
//             <a
//               href="#"
//               className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
//             >
//               Shop Collection
//             </a>
//           </div>
//         </div>
//       </div>

//       <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
//         <h2 id="collection-heading" className="sr-only">
//           Collections
//         </h2>
//         <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
//           {collections.map((collection) => (
//             <div
//               key={collection.name}
//               className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
//             >
//               <div>
//                 <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
//                   <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
//                     <img
//                       src={collection.imageSrc}
//                       alt={collection.imageAlt}
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
//                 </div>
//                 <div className="absolute inset-0 flex items-end rounded-lg p-6">
//                   <div>
//                     <p aria-hidden="true" className="text-sm text-white">
//                       Shop the collection
//                     </p>
//                     <h3 className="mt-1 font-semibold text-white">
//                       <a href={collection.href}>
//                         <span className="absolute inset-0" />
//                         {collection.name}
//                       </a>
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }
