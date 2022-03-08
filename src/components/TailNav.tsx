import React from "react";

export default function TailNav() {
  return (
    <>
      <section className=" bg-transparent py-8 px-6 lg:px-8">
        <nav className="relative my-0 mx-auto flex ">
          <div className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform lg:block">
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
          <div className="hidden lg:block">
            <a
              className="inline-block rounded-full border border-gray-200 px-8 py-2 font-bold text-white hover:border-white"
              href="#"
            >
              Want To Play A Game?
            </a>
          </div>
        </nav>
      </section>
    </>
  );
}
