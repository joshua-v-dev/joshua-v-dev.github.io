/* eslint-disable @next/next/no-img-element */
import React from 'react';

const callouts = [
  {
    id: 1,
    name: 'PORTFOLIO',
    description: 'React, Tailwind CSS, and Next.js',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg',

    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    id: 2,
    name: 'MERN STACK',
    description: 'React, MongoDB, Express, Node.js',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643976423/mernstack_1_cpteis.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    id: 3,
    name: 'SHOPIFY',
    description: 'Hydrogen, Liquid, Next.js, Tailwind CSS, GraphQL',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643976704/shopify_lvz0ui.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    id: 4,
    name: 'UX DESIGN',
    description: 'Google Certification Course',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643977258/googleux_t7xakq.png',

    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    id: 5,
    name: 'INDIE GAME DEVELOPMENT',
    description: 'React Native, Babylon.js, Blender',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1644118954/indiegamedev_1_fls4tq.svg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    id: 6,
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
