import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type FooterProps = {

  title?: string;
  primary?: boolean;
  label?: string;
};
const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <section className="mx-auto bg-transparent">
        <div className="grid items-center justify-center grid-cols-1 lg:flex lg:items-center ">
          <div className="relative px-5 h-20 w-20 lg:flex">
            <Image
              className="bg-opacity-3 rounded-full object-contain"
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
              alt="JV_LOGO_BLUE_NEON"
              width={200}
              height={200}

            />
          </div>
          <div className="flex" >
            <p className="sm:grid lg:inline-flex p-5 bg-gradient-to-r from-blue-500 to-indigo-800 bg-clip-text text-5xl font-black text-transparent brightness-125">
              #FullStackDeveloper
            </p>
          </div>
          <div className="relative flex">
            <ul className="grid grid-flow-row grid-rows-2 sm:grid-flow-col lg:flex-row lg:inline-flex lg:gap-x-10 lg:py-10 lg:items-center lg:justify-center ">
              <li>
                <Link
                  className="text-lg font-medium text-gray-200 brightness-200 hover:text-indigo-700"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg font-medium text-gray-200 brightness-200 hover:text-indigo-700"
                  href="#"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg font-medium text-gray-200 brightness-200 hover:text-indigo-700"
                  href="#"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg font-medium text-gray-200 brightness-200 hover:text-indigo-700"
                  href="#"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
