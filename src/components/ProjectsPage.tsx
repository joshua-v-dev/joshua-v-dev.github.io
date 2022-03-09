import React from "react";
import Image from "next/image";
import TopPicks from "../components/TopPicks";
import ImageCarousel from "../components/ImageCarousel";
import SliderOverlay from "../components/SliderOverlay";
import Cta from "../components/Cta";

export default function ProjectsPage() {
  return (
    <>
      <SliderOverlay />
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
              className="inline-block rounded-xl border-2 border-transparent bg-red-500 py-2 px-4 text-3xl font-bold text-gray-900 outline-double  transition  duration-200 hover:bg-indigo-700 md:px-6 md:text-lg"
            >
              Github
            </a>
          </div>
        </div>
        <div className="container relative flex h-80 w-80 justify-center ">
          <a className=" text-2xl leading-none text-gray-900" href="#">
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
              className="inline-block rounded-xl border-2 border-transparent bg-yellow-400 py-2 px-4 text-xl font-bold text-gray-900 outline-double transition  duration-200 hover:bg-indigo-600 md:px-6 md:text-lg "
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <TopPicks />
      <ImageCarousel />

      <Cta />
    </>
  );
}
