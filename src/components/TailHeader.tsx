import React from 'react';
import Image from 'next/image';

export default function Tailheader() {
  <section className="bg-indigo-500">
    <div className="container mx-auto px-4">
      <nav className="flex items-center justify-between py-8">
        <a className="text-2xl leading-none text-gray-600" href="#">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              className="h-8"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644085059/V_2_d5qwjw.svg"
              alt=""
              width="auto"
            ></Image>
          </div>
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger block text-indigo-50 hover:text-indigo-200 focus:outline-none">
            <svg
              className="h-4 w-4"
              fill="currentColor "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="ml-auto mr-10 hidden w-auto items-center space-x-12 lg:flex">
          <li>
            <a
              className="text-sm font-medium text-indigo-50 hover:text-indigo-200"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-sm font-medium text-indigo-50 hover:text-indigo-200"
              href="#"
            >
              Company
            </a>
          </li>
          <li>
            <a
              className="text-sm font-medium text-indigo-50 hover:text-indigo-200"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-sm font-medium text-indigo-50 hover:text-indigo-200"
              href="#"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <button className="hidden text-indigo-50 hover:text-indigo-200 lg:block">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </nav>
      <div className="relative mb-48 pt-12 pb-32 md:pt-16 lg:mb-64 lg:pb-48">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
            Finish what you started today before you forget to do it.
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-50 lg:text-xl lg:leading-relaxed">
            Correct annotation helps your customers find their way around new
            features. Getting familiar with the project is the first step
            towards development.
          </p>
          <div>
            <a
              className="mb-3 block rounded border border-white bg-white px-5 py-3 text-center text-sm font-semibold text-indigo-500 transition duration-200 hover:border-indigo-50 hover:bg-indigo-50 md:mr-3 md:mb-0 md:inline-block"
              href="#"
            >
              Try for Free
            </a>
            <a
              className="block rounded border border-white px-5 py-3 text-center text-sm font-semibold text-white transition duration-200 hover:bg-white hover:text-indigo-500 md:inline-block"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <Image
            className="absolute top-0 left-0 mx-auto h-64 w-full rounded-xl object-cover lg:h-96"
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644084374/V_ortjg1.svg"
            alt=""
          ></Image>
        </div>
      </div>
    </div>
    <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 hidden w-5/6 max-w-sm">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="relative flex h-full w-full flex-col overflow-y-auto border-r bg-white py-6 px-6">
        <div className="mb-12 flex items-center">
          <a className="mr-auto text-2xl font-semibold leading-none" href="#">
            <Image
              className="h-8"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644084763/V_1_eoklqw.svg"
              alt=""
              width="auto"
            ></Image>
          </a>
          <button className="navbar-close">
            <svg
              className="h-6 w-6 cursor-pointer hover:text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500"
                href="#"
              >
                About
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500"
                href="#"
              >
                Company
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500"
                href="#"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>;
}
