import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function TailHero() {
  return (
    <div className="relative h-screen bg-transparent sm:mx-auto lg:space-y-16 ">
      <div className="sm:container lg:mx-auto lg:flex lg:items-center lg:justify-center lg:space-y-16 ">
        <div className="g-16 relative z-10 bg-transparent pb-6 sm:pb-8 md:pb-16  lg:max-w-4xl xl:pb-28">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          ></svg>

          <Popover>
            <div className="relative px-4 pt-1 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <div className="flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Tooling</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:space-x-8 md:pr-4"></div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-transparent shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div className="relative">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-12 w-12" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3"></div>
                  <a
                    href="#"
                    className="inline-block w-full bg-transparent px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                  >
                    Discord
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="flex items-center justify-center">
            <a className="inline-block text-2xl font-bold text-white" href="#">
              <div className="relative h-32 w-32">
                <Image
                  className="relative  object-contain"
                  src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644093867/V_3_eq6srr.svg"
                  alt=""
                  layout="fill"
                ></Image>
              </div>
            </a>
          </div>
          <main className=" max-w-8xl flex justify-center sm:px-6 lg:space-y-16 lg:p-7">
            <div className=" p-3 text-center lg:space-y-8">
              <h1 className="text-7xl font-extrabold tracking-tight text-indigo-700 shadow-indigo-500/50 outline-1 brightness-150 sm:text-3xl md:text-4xl">
                <span className="block text-8xl xl:inline xl:max-w-none">
                  Joshua Vaughn
                </span>{" "}
              </h1>
              <span className="block text-5xl font-extrabold tracking-tight text-purple-700 brightness-105 xl:inline xl:max-w-none ">
                Full Stack Web Developer
              </span>

              <p className="block space-y-6 text-base font-bold text-gray-500 brightness-125 sm:mx-auto  sm:max-w-xl sm:text-lg  md:text-xl lg:mx-0 lg:text-3xl xl:max-w-none">
                Innovation one idea at a time
              </p>
             
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
