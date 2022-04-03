import React, { ReactElement } from "react";
import Image from "next/image";
import { TimeLineData } from "../../database/database";

export default function Timeline() {
  return (
    <>
      <div className=" grid gap-y-10 gap-x-10 space-y-7 space-x-7 sm:px-6 sm:py-32 lg:max-w-max lg:grid-cols-2 lg:px-1">
        <div className=" grid space-y-5 space-x-5">
          <h1 className="text-9xl font-extrabold uppercase tracking-tight  text-indigo-700 brightness-125 sm:text-4xl lg:pl-4">
            Roadmap
          </h1>
          <p className="text-2xl font-semibold text-gray-200 brightness-125">
            Technologies I have used so far to build my projects & a little bit
            about my future.
          </p>

          <dl className="grid max-w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {TimeLineData.map(
              (TimeLineData, i): ReactElement => (
                <div key={i} className="grid-col grid">
                  <div
                    key={TimeLineData.year}
                    className="space-y-5 border-t border-gray-200 p-5"
                  >
                    <dt className="text-2xl text-gray-200 underline">
                      {TimeLineData.year}
                    </dt>
                    <dd className="space-y-5 text-xl text-gray-200">
                      {TimeLineData.text}
                    </dd>
                  </div>
                </div>
              )
            )}
          </dl>
        </div>
        <div className="relative grid grid-cols-2 grid-rows-2 gap-3 sm:gap-6 lg:max-w-none lg:gap-8">
          <div className="relative h-full w-full ">
            <Image
              src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982438/portfolio_project_thumbnails_u11j8x.png"
              alt="string"
              className="rounded-lg bg-gray-100"
              layout="fill"
              priority
            />
          </div>
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
    </>
  );
}
