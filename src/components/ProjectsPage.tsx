/* eslint-disable @next/next/no-img-element */
import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import ImageCarousel from './ImageCarousel';

const callouts = [
  {
    name: 'Portfolio',
    description: 'Built with React, Tailwind CSS, and Next.js',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg',

    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'MERN STACK',
    description: 'Built with React, MongoDB, Express, Node, and React Hooks',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643976423/mernstack_1_cpteis.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'SHOPIFY',
    description: 'Built with React,Liquid,Next,Polaris,GraphQL',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643976704/shopify_lvz0ui.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'UX Design',
    description: 'Google Certification Course',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643977258/googleux_t7xakq.png',

    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Indie Game Dev',
    description: 'React Native, Babylon.js, Unity, Blender',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643977162/gamedev_tsn54s.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'FREELANCE CLIENTS',
    description: 'Built with React,Liquid,Next,Polaris,GraphQL',
    imageSrc:
      'https://res.cloudinary.com/dpytkhyme/image/upload/v1643977144/freelance_wr4fsa.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-extrabold text-white">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-white">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-white">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ImageCarousel />
      <BackgroundAnimation />
    </>
  );
}
