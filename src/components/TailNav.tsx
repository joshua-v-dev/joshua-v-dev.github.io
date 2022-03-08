import React from "react";

export default function TailNav() {
  return (
    <>
      <section className=" bg-transparent py-8 px-4 lg:px-10 ">
        <nav className="relative flex items-center justify-between ">
          <div className="hidden lg:flex">
            <a
              className=" rounded-full border border-gray-200 px-8 py-2 font-bold text-white hover:border-white lg:flex"
              href="#"
            >
              Want To Play A Game?
            </a>
          </div>
          <div className="hidden lg:absolute lg:top-1/2 lg:left-1/2 lg:block lg:-translate-y-1/2 lg:-translate-x-1/2 lg:transform">
            <ul className="flex items-center space-x-10 text-white">
              <li>
                <a className="text-lg font-bold text-white" href="#">
                  Projects
                </a>
              </li>
              <span>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                </svg>
              </span>
              <li>
                <a className="text-lg font-bold text-white" href="#">
                  Services
                </a>
              </li>
              <span>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                </svg>
              </span>
              <li>
                <a className="text-lg font-bold text-white" href="#">
                  Story
                </a>
              </li>
              <span>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                </svg>
              </span>
              <li>
                <a className="text-lg font-bold text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}
