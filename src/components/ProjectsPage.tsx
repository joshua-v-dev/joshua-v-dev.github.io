/* eslint-disable @next/next/no-img-element */
import React from "react";
import { callouts } from "../database/database";

export default function ProjectsPage() {
  return (
    <div className=" bg-transparent">
      <div className="mx-auto  my-auto max-w-7xl px-5 py-5 sm:px-7 lg:px-7 ">
        <div className=" max-w-2xl space-x-1 sm:py-24 lg:max-w-none lg:py-12">
          <h2 className="my-5 text-4xl font-extrabold tracking-tight text-white">
            Collections
          </h2>

          {callouts.map((callouts) => (
            <div key={callouts.id} className=" lg:grid lg:grid-cols-3">
              <div className="border-2">
                <div className="relative top-2 w-full overflow-hidden rounded-full group-hover:opacity-75 sm:h-64">
                  <img
                    src={callouts.imageSrc}
                    alt={callouts.imageAlt}
                    className=" h-auto w-auto object-scale-down p-5"
                  />
                </div>
              </div>
              <div
                key={callouts.id}
                className="relative mr-2 items-center border-2"
              >
                <h3 className=" items-center py-5 text-center text-white underline">
                  <a href={callouts.href}>
                    <span key={callouts.id} className="absolute inset-0" />
                    {callouts.name}
                  </a>
                </h3>
                <p
                  key={callouts.id}
                  className="te4xl text-center font-semibold text-white"
                >
                  {callouts.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
