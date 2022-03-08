import React from "react";
import { callouts } from "../database/database";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <div className="py-auto px-auto container  mx-auto flex items-center justify-center  ">
        <h2 className="text-7xl font-extrabold tracking-tight text-white">
          Collections
        </h2>
      </div>
      <div className="container  mx-auto grid grid-flow-col grid-rows-2 gap-12  sm:py-24 lg:max-h-max lg:max-w-max ">
        {callouts.map((callouts) => (
          <div
            key={callouts.id}
            className="bg-transparent object-contain px-5 py-5 sm:px-7 lg:px-7 "
          >
            <div className="relative flex flex-wrap overflow-hidden  pb-64">
              <a
                href=""
                className=" overflow-hidden rounded-lg shadow-md hover:shadow-xl"
              >
                <Image
                  src={callouts.imageSrc}
                  alt={callouts.imageAlt}
                  className="max-h-fit max-w-fit bg-emerald-600"
                  layout="fill"
                  priority
                />
              </a>
            </div>
            <div key={callouts.id} className="container justify-center p-4">
              <h3 className="inline-block  rounded-full bg-indigo-700 px-3 py-1  text-justify text-xl font-semibold uppercase leading-none tracking-wide text-gray-50">
                <a href={callouts.href}>
                  <span key={callouts.id} className="  inset-0 font-bold" />
                  {callouts.name}
                </a>
              </h3>
              <p
                key={callouts.id}
                className="p-1 text-lg font-bold text-gray-50 "
              >
                {callouts.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
