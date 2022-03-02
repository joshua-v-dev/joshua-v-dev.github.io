//tailwind ui idea for timeline

import React from "react";
import Technologies from "./Technologies";
import Acomplishments from "./Acomplishments";
import Image from "next/image";
import { TimeLineData } from "../database/database";

export default function Timeline() {
  return (
    <>
      <div className="grid bg-transparent">
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-2 items-center gap-y-20 gap-x-20 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="mx-auto my-auto grid">
            <h2 className="text-7xl font-extrabold tracking-tight text-white sm:text-4xl">
              Roadmap
            </h2>
            <p className="mt-8  text-2xl text-white">
              Technologies I have used so far to build my projects & a little
              bit about my future.
            </p>

            <dl className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {TimeLineData.map(
                (TimeLineData, i): JSX.Element => (
                  <div key={i} className="grid-col grid">
                    <div
                      key={TimeLineData.year}
                      className="border-t border-white pt-4"
                    >
                      <dt className="  text-white">{TimeLineData.year}</dt>
                      <dd className=" mt-2 text-white">{TimeLineData.text}</dd>
                    </div>
                  </div>
                )
              )}
            </dl>
          </div>
          <div className=" relative mt-28 grid h-full w-full grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982438/portfolio_project_thumbnails_u11j8x.png"
              alt="string"
              className="rounded-lg bg-gray-100"
              layout="fill"
              priority
            />

            <div className="relative h-full w-full">
              <Image
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982446/portfolio_project_thumbnails_kv7dld.svg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
                layout="fill"
                priority
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982450/portfolio_project_thumbnails_1_dfjrl0.png"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
                layout="fill"
                priority
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982762/Kayla_s_Playground_fwistb.png"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
                layout="fill"
                priority
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643978160/Simple_Lined_Black_Onboarding_Page_Wireframe_Website_UI_Prototype_maycmm.svg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Technologies />
      <Acomplishments />
    </>
  );
}
