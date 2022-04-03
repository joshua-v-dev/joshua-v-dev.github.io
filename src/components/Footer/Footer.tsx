import React, { FunctionComponent } from "react";
import Image from "next/image";

type FooterProps = {
  children: React.ReactNode;
  title?: string;
  primary?: boolean;
  label?: string;
};
const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <section className="max-h-max bg-transparent py-6 ">
        <div className="container mx-auto ">
          <div className="sm:grid sm:items-center  sm:justify-center lg:flex lg:space-x-32">
            <div className="relative h-20 w-20 lg:flex">
              <Image
                className="bg-opacity-3  relative rounded-full object-contain"
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
                alt=""
                layout="fill"
              ></Image>
            </div>

            <p className="bg-gradient-to-r from-blue-500 to-indigo-800 bg-clip-text text-5xl font-black text-transparent brightness-125">
              #FullStackDeveloper
            </p>

            <div className="grid grid-flow-col grid-cols-4 items-center lg:flex">
              <ul className="grid grid-flow-row grid-rows-1 gap-x-5 lg:flex">
                <li>
                  <a
                    className="text-lg font-medium text-gray-200 brightness-200 hover:text-indigo-700"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-lg font-medium text-gray-200 brightness-200 hover:text-indigo-700"
                    href="#"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-lg font-medium text-gray-200 brightness-200 hover:text-indigo-700"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-lg font-medium text-gray-200 brightness-200 hover:text-indigo-700"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
