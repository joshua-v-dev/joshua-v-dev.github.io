import React from "react";
import Image from "next/image";
import { topPicks } from "../../database/database";

export default function Projects() {
  return (
    <>
      <div className=" grid  items-center justify-center space-y-12 p-16">
        <div className="container grid grid-flow-col grid-cols-3 justify-center gap-x-24 gap-y-8  bg-transparent lg:max-w-none ">
          {topPicks.map(
            (topPicks, i): JSX.Element => (
              <div
                key={i}
                className="grid max-w-lg items-center justify-center gap-2 border-2 bg-black px-4 shadow-xl"
              >
                <a
                  href={topPicks.href}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light "
                >
                  <div className="relative  lg:h-96 lg:w-96">
                    <Image
                      className=" object-contain"
                      src={topPicks.imageSrc}
                      alt={topPicks.imageAlt}
                      layout="fill"
                      priority
                    />
                  </div>
                </a>
                <h5 className="flex justify-center space-y-4 p-1 text-xl font-medium text-white">
                  {topPicks.name}
                </h5>
                <p className="flex justify-center text-base text-white">
                  {topPicks.description}
                </p>
                <div className="flex items-center justify-center p-6">
                  <button
                    type="button"
                    className=" rounded bg-indigo-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
