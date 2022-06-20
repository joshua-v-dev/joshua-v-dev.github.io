import React, { FunctionComponent } from "react";
import Image from "next/image";

type FooterProps = {
  children: React.ReactNode;
  title?: string;
  primary?: boolean;
  label?: string;
};
const Footer: FunctionComponent<FooterProps> = () =>
{
  return (
    <>
      <section className="mx-auto max-w-full bg-transparent my-5 ">
        <div className="sm:grid sm:items-center  sm:justify-center lg:flex lg:items-center  lg:space-x-64">
          <div className="relative h-20 w-20 lg:flex  ">
            <Image
              className="bg-opacity-3  relative rounded-full object-contain"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
              alt=""
              layout="fill"
            ></Image>
          </div>
          <div className="flex max-w-max lg:space-x-32 gap-32" >
            <p className="inline-flex py-10 bg-gradient-to-r from-blue-500 to-indigo-800 bg-clip-text text-5xl font-black text-transparent brightness-125">
              #FullStackDeveloper
            </p>

            <ul className="grid grid-flow-row grid-rows-2 lg:flex-row lg:inline-flex lg:gap-x-10 lg:py-10 lg:items-center lg:justify-center ">
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
      </section>
    </>
  );
};
export default Footer;
