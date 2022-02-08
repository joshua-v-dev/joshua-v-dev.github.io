//tailwind 2x2 column grid

import React from 'react';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Microservices',
    description:
      'Headless services that can be deployed to any cloud provider. No need to worry about infrastructure, just deploy your services and let them do the rest.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Next.js with TypeScript and Tailwindcss Production Build',
    description:
      'Secure, Scalable, and Fast. Built with Next.js, TypeScript, and Tailwindcss. Production ready for production deployment.',
    icon: ScaleIcon,
  },
  {
    name: 'Design Tools',
    description:
      'Built with Sketch, Figma, and Adobe XD. No need to worry about design. Just focus on building your app.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Modern UX Principles and Architecture',
    description:
      'Built with React Hooks, Context, and Redux. No need to worry about the details. Just focus on building your app.',
    icon: AnnotationIcon,
  },
];

export default function Technologies() {
  return (
    <div className=" bg-transparent py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" lg:text-center">
          <h1 className=" text-4xl font-extrabold  uppercase tracking-wide text-indigo-700 brightness-125">
            Technologies
          </h1>
          <p className="mt-6 text-3xl font-extrabold leading-8 tracking-tight text-gray-50 sm:text-4xl">
            A better way to Full Stack
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-50 lg:mx-auto">
            Cross platform, cross browser, cross device. No more headaches. Just
            focus on building your app.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-gray-50">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-50">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
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
