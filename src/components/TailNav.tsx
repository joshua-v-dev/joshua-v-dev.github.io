import React from "react";
// import Image from "next/image";

export default function TailNav() {
  return (
    <section className="bg-transparent py-8 px-4 lg:px-10">
      <nav className="items-evenly relative  flex">
        {/* <a className="text-2xl font-bold text-white" href="#">
          <div w-full h-full>
            <Image
              className=" items-between h-auto w-auto justify-evenly"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644093867/V_3_eq6srr.svg"
              alt=""
              layout="fill"
            ></Image>
          </div>
        </a> */}
        <div className="lg:hidden">
          <button className="navbar-burger p-2">
            <svg
              className="h-3 w-10"
              width="39"
              height="13"
              viewBox="0 0 39 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
              <rect
                x="19"
                y="11"
                width="20"
                height="2"
                rx="1"
                fill="#C4C4C4"
              ></rect>
            </svg>
          </button>
        </div>
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
            className="inline-block rounded-full border border-gray-200 px-12 py-4 font-bold text-white hover:border-white"
            href="#"
          >
            Want To Play A Game?
          </a>
        </div>
      </nav>
    </section>
  );
}
