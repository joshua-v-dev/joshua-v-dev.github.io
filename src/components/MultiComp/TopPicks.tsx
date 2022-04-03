import React, { FunctionComponentElement } from "react";
import Image from "next/image";
import { topPicks } from "../../database/database";

export default function TopPicks() {
  return (
    <>
      <div className="container my-10 grid items-center justify-center ">
        <div
          className="container grid grid-flow-col-dense  grid-cols-3
				 gap-x-24 bg-transparent shadow-indigo-600 sm:grid-cols-1  "
        >
          {topPicks.map(
            (topPicks, i): FunctionComponentElement<PageTransitionEvent> => (
              <div
                key={i}
                className="border-b-1 container grid grid-flow-row items-center  justify-center rounded-3xl border-4 border-t-4 border-double
								 border-black border-indigo-600/90 border-t-indigo-600  border-opacity-90 bg-black/30 p-12  shadow-md 
								 shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 "
              >
                <a
                  className="relative mx-auto h-64 w-64 rounded-lg border-double outline-8
									  outline-offset-2 
									outline-black 
									brightness-100"
                  href={topPicks.href}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light "
                >
                  <Image
                    className="flex items-center justify-center rounded-md object-cover p-2"
                    src={topPicks.src}
                    alt={topPicks.imageAlt}
                    layout="fill"
                    priority
                  />
                </a>
                <h5 className="grid justify-center p-2 text-3xl  font-semibold  leading-relaxed text-indigo-700 brightness-125">
                  {topPicks.name}
                </h5>
                <p className="grid justify-center text-sm font-semibold text-teal-500 brightness-95">
                  {topPicks.description}
                </p>
                <div className="flex flex-wrap items-center justify-center">
                  <a
                    href={topPicks.href}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <div className="container mt-5 -mb-10 grid items-end justify-end p-3">
                      <button
                        type="button"
                        className="grid grid-flow-col-dense justify-end rounded-md border-2 border-black bg-indigo-900 px-3 py-2 text-sm font-normal uppercase leading-normal text-gray-200 shadow-sm brightness-150 transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                      >
                        Learn More
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
