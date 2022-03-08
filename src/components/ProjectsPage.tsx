import React from "react";
import { callouts } from "../database/database";
import Image from "next/image";
import TopPicks from "../components/TopPicks";

export default function ProjectsPage() {
  return (
    <>
      <div className="container mx-auto  grid items-center justify-center space-y-10">
        <h2 className="  text-7xl font-extrabold tracking-tight text-indigo-600 brightness-125">
          First, What brings you here?
        </h2>
        <p className=" text-semibold grid items-center  justify-center text-3xl text-white brightness-200">
          Depending on who you are I&apos;ll show you the content accordingly in
          order to increase your user experience while browsing my portfolio.
        </p>
      </div>
      <div className="flex items-center space-x-1 sm:justify-center ">
        <div className="lg:space-y-16">
          <div className="rounded-lg shadow">
            <a
              href="https://github.com/joshua-v-dev"
              className="inline-block rounded-xl border-2 border-transparent bg-indigo-600 py-2 px-4 text-lg font-medium text-gray-50 outline-double  transition  duration-200 hover:bg-indigo-700 md:px-6 md:text-lg"
            >
              Github
            </a>
          </div>
        </div>
        <div className="container relative flex h-80 w-80 justify-center ">
          <a className=" text-2xl leading-none text-white" href="#">
            <Image
              className="lg:h-125 lg:w-125 object-fit z-9999 absolute space-y-8 p-5"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643878561/JV-BLK-RD-Logo_mnvl0e.svg"
              alt=""
              layout="fill"
            />
          </a>
        </div>
        <div className="lg:space-y-16">
          <div className="rounded-lg shadow">
            <a
              href="https://www.linkedin.com/in/joshuavaughn"
              className="inline-block rounded-xl border-2 border-transparent bg-indigo-500 py-2 px-4 text-lg font-medium text-gray-50 outline-double transition  duration-200 hover:bg-indigo-600 md:px-6 md:text-lg "
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <TopPicks />
      <div className="px-auto lg:space-y-76 container mx-auto  flex items-center justify-center lg:my-auto lg:py-5 ">
        <h2 className="text-7xl font-extrabold tracking-tight text-indigo-600 brightness-125 lg:space-y-16">
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
