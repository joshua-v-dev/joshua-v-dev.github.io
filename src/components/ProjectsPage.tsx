/* eslint-disable @next/next/no-img-element */
import React from 'react';

const callouts = [
  {
    name: 'PORTFOLIO',
    description: 'React, Tailwind CSS, and Next.js',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg',

    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'MERN STACK',
    description: 'React, MongoDB, Express, Node.js',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643976423/mernstack_1_cpteis.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'SHOPIFY',
    description: 'Hydrogen, Liquid, Next.js, Tailwind CSS, GraphQL',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643976704/shopify_lvz0ui.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'UX DESIGN',
    description: 'Google Certification Course',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643977258/googleux_t7xakq.png',

    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'INDIE GAME DEVELOPMENT',
    description: 'React Native, Babylon.js, Blender',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1644118954/indiegamedev_1_fls4tq.svg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'FREELANCE CLIENTS',
    description: 'Hydrogen, Liquid, Next.js, Tailwind CSS, GraphQL',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643977144/freelance_wr4fsa.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className=" bg-transparent">
        <div className="mx-auto  my-auto max-w-7xl px-4 sm:px-7 lg:px-7 ">
          <div className=" max-w-2xl space-x-1 sm:py-24 lg:max-w-none lg:py-12">
            <h2 className="mt-11 text-4xl font-extrabold tracking-tight text-white">
              Collections
            </h2>

            <div className="mt-7 lg:grid lg:grid-cols-4  ">
              {callouts.map((callout) => (
                <>
                  <div key={callout.name} className="border-2 lg:space-y-1 ">
                    <div className="relative w-full overflow-hidden rounded-lg  group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-auto w-auto object-contain "
                      />
                    </div>
                  </div>
                  <div className="relative mr-2 border-2 ">
                    <h3 className="text-5x1 m-20 text-center text-white underline">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-3x1 text-center font-semibold text-white">
                      {callout.description}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
