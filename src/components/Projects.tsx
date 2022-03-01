//tailwind card with image and ripple effect

// YOU NEED TO REARANGE AND RENAME ABSTRACTIONS OF UX PIECES FOR DIFFERENT PROJECT MAPPING //
// THAT IS WHY YOU ARE GETTING MULTIPLE RERENDERS, DONT FORGET
// SEARCH IMAGES URL LOCATIONS WITH SEARCH AND USE THAT TO STITCH IT ALL TOGETHER

import React from "react";
import Image from "next/image";
import { topPicks } from "../database/database";

export default function Projects() {
  return (
    <div className=" bg-transparent">
      <h2 className=" my-12 flex items-center justify-center text-6xl font-extrabold tracking-tight text-white">
        Top Picks
      </h2>

      <div className="auto-rows-3  justify-items-cover grid grid-flow-row-dense  grid-cols-3 justify-center   object-cover pl-44">
        {topPicks.map(
          (topPicks, i): JSX.Element => (
            <>
              <div key={i} className="max-w-sm rounded-lg bg-black shadow-lg">
                <a
                  href={topPicks.href}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light "
                >
                  <div className="relative h-full w-full">
                    <Image
                      className=" rounded-t-lg"
                      src={topPicks.imageSrc}
                      alt={topPicks.imageAlt}
                      layout="fill"
                      priority
                    />
                  </div>
                </a>
                <h5 className="mb-4 text-xl font-medium text-white">
                  {topPicks.name}
                </h5>
                <p className="mb-8 text-base text-white">
                  {topPicks.description}
                </p>
                <div className="p-6">
                  <button
                    type="button"
                    className=" inline-block rounded bg-indigo-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}
