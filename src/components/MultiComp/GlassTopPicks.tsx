import Image from "next/image";
import Link from "next/link";
import { FunctionComponentElement } from "react";
import { topPicks } from "../../lib/constants";

export default function GlassTopPicks() {
  return (
    <>
      <div className="container">
        <div
          className="mx-auto my-2 grid sm:grid-flow-col gap-x-3 lg:grid-cols-3 bg-transparent shadow-indigo-600">
          {topPicks.map(
            (topPicks, i): FunctionComponentElement<PageTransitionEvent> => (
              <div
                key={i}
                className="relative border-b-1 grid sm:grid-flow-col md:grid-flow-row items-center justify-evenly rounded-3xl border-4 border-t-4 border-double
								 border-black border-indigo-600/90 border-t-indigo-600 border-opacity-90 bg-black/30 p-9 shadow-md 
								 shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 "
              >
                <Link
                  className=" mx-auto h-60 w-60 rounded-lg border-double outline-8
									  outline-offset-2 
									outline-black 
									brightness-100"
                  href={topPicks.href}
                  passHref
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light "
                >

                  <Image
                    className="flex items-center justify-center rounded-md object-cover p-2"
                    src={topPicks.src}
                    alt={topPicks.imageAlt}
                    width={500}
                    height={500}
                    priority
                  />
                </Link>
                <h5 className="grid justify-center p-2 text-3xl  font-semibold  leading-relaxed text-indigo-700 brightness-125">
                  {topPicks.name}
                </h5>
                <p className="grid justify-center text-sm font-semibold text-teal-500 brightness-95">
                  {topPicks.description}
                </p>
                <div className="flex flex-wrap items-center justify-center">
                  <Link
                    href={topPicks.href}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <div className="container grid items-end justify-end p-3">
                      <button
                        type="button"
                        className="grid grid-flow-col-dense justify-end rounded-3xl border-2 border-t-2
                       border-double border-indigo-600 border-t-indigo-600  border-opacity-90 bg-black/30 px-3 py-2 text-sm font-normal uppercase leading-normal text-gray-200 shadow-md
                      shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
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
    </>
  );
}
