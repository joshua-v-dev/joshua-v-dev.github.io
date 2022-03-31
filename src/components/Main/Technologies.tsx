import React from "react";
import { features } from "../../database/database";

export default function Technologies ()
{
  return (
    <div className="grid grid-flow-row  mx-auto bg-transparent lg:my-24">
      <div className="mx-auto max-w-7xl space-y-8  sm:px-4 ">
        <div className=" relative space-y-4 lg:text-center">
          <h1 className=" text-6xl font-extrabold uppercase tracking-wide text-indigo-700 brightness-125">
            Technologies
          </h1>
          <p className=" font-bold tracking-tight text-gray-50 sm:text-3xl lg:mx-auto">
            A better way to Full Stack
          </p>
          <p className=" max-w-2xl text-xl font-normal text-gray-50 lg:mx-auto">
            Cross platform, cross browser, cross device. No more headaches. Just
            focus on building your app.
          </p>

          <div className="grid grid-flow-row ">
            <dl className=" grid grid-cols-2  gap-x-8 gap-y-8  ">
              { features.map( ( feature ) => (
                <div key={ feature.id } className="relative  ">

                  <dt>
                    <div className="mx-auto grid h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-gray-50">
                      <feature.icon
                        className="relative h-6 w-6 "
                        aria-hidden="true"
                      />
                    </div>
                    <p className="p-1 text-3xl font-extrabold text-indigo-600 brightness-125">
                      { feature.name }
                    </p>
                  </dt>
                  <dd className="p-1 text-2xl text-gray-200">{ feature.description }</dd>
                </div>
              ) ) }
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
