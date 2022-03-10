import React from "react";
import { features } from "../../database/database";

export default function Technologies() {
  return (
    <div className=" bg-transparent py-64">
      <div className="mx-auto max-w-7xl space-y-8 px-2 sm:px-4 lg:px-6">
        <div className=" relative space-y-4 lg:text-center">
          <h1 className=" text-6xl font-extrabold uppercase tracking-wide text-indigo-700 brightness-125">
            Technologies
          </h1>
          <p className="space-y-4 font-bold tracking-tight text-gray-50 sm:text-3xl lg:mx-auto">
            A better way to Full Stack
          </p>
          <p className="max-w-2xl text-3xl font-normal text-gray-50 lg:mx-auto">
            Cross platform, cross browser, cross device. No more headaches. Just
            focus on building your app.
          </p>
        </div>

        <dl className="mx-auto grid grid-cols-2 gap-x-10 gap-y-12 space-y-2 space-x-2">
          {features.map((feature) => (
            <div key={feature.id} className="relative  ">
              <dt>
                <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-gray-50">
                  <feature.icon
                    className="relative h-6 w-6 "
                    aria-hidden="true"
                  />
                </div>
                <p className="px-12 text-3xl font-extrabold text-indigo-600 brightness-125">
                  {feature.name}
                </p>
              </dt>
              <dd className="p-6 text-2xl text-white">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
