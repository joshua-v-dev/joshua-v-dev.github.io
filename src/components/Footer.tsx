import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-transparent py-8">
        <div className="container mx-auto px-4">
          <div className=" flex flex-wrap items-center justify-between">
            <div className=" px-4 lg:mb-0 ">
              <p className="mt-3 hidden text-lg text-indigo-800 brightness-200 lg:block">
                Joshua Vaughn #FullStackDeveloper
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center px-4 lg:w-1/2 lg:justify-end">
              <ul className="mb-6 inline-flex w-full flex-wrap lg:mb-0 lg:mr-12 lg:w-auto">
                <li className="mr-6 mb-2 md:mb-0">
                  <a
                    className="text-lg font-medium text-indigo-800 brightness-200 hover:text-indigo-700"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="mr-6 mb-2 md:mb-0">
                  <a
                    className="text-lg font-medium text-indigo-800 brightness-200 hover:text-indigo-700"
                    href="#"
                  >
                    Projects
                  </a>
                </li>
                <li className="mr-6 mb-2 md:mb-0">
                  <a
                    className="text-lg font-medium text-indigo-800 brightness-200 hover:text-indigo-700"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-2 md:mb-0">
                  <a
                    className="text-lg font-medium text-indigo-800 brightness-200 hover:text-indigo-700"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <a
                className="text-md inline-block rounded border border-indigo-700 bg-indigo-800 px-5 py-3 font-semibold text-white brightness-200 transition duration-200 hover:border-indigo-600 hover:bg-indigo-600"
                href="#"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <p className="mt-6 text-lg text-indigo-800 brightness-200 lg:hidden">
            JOSHUA VAUGHN #FullStackDeveloper
          </p>
        </div>
      </section>
    </>
  );
};
export default Footer;
