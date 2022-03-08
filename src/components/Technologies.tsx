import React from "react";
import { features } from "../database/database";

export default function Technologies() {
  return (
    <div className=" bg-transparent py-10">
      <div className="mx-auto my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" lg:text-center">
          <h1 className="my-auto text-6xl font-extrabold  uppercase tracking-wide text-indigo-700 brightness-125">
            Technologies
          </h1>
          <p className="my-4 font-bold tracking-tight text-gray-50 sm:text-3xl">
            A better way to Full Stack
          </p>
          <p className="my-8 max-w-2xl text-3xl font-normal text-gray-50 lg:mx-auto">
            Cross platform, cross browser, cross device. No more headaches. Just
            focus on building your app.
          </p>
        </div>

        <div className="container  ">
          <dl className="space-x-4 space-y-4 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-2">
            {features.map((feature) => (
              <div key={feature.id} className="relative ">
                <dt>
                  <div className="absolute flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-gray-50">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className=" ml-16 text-3xl font-extrabold text-indigo-600 brightness-125">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-2xl text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
