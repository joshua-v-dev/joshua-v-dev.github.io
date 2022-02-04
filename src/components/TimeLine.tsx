/* eslint-disable @next/next/no-img-element */
//tailwind ui idea for timeline

const features = [
  {
    year: 2018,
    text: 'January I began learning the basics of Web Development',
  },
  { year: 2019, text: 'Started Lambda School Bootcamp' },
  {
    year: 2020,
    text: 'Improved my skills in React, Apollo, Next, Three.js & Node.js & Started Learning React Native with & without EXPO',
  },
  {
    year: 2021,
    text: 'Learned Shopify Liquid, Polaris, GraphQL & UI/UX DESIGN',
  },
  {
    year: 2022,
    text: 'I hope to further my skills & learn Python to code my first neural network',
  },
];

export default function Timeline() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-white">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.year} className="border-t border-white pt-4">
                <dt className="font-medium text-white">{feature.year}</dt>
                <dd className="mt-2 text-sm text-white">{feature.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982438/portfolio_project_thumbnails_u11j8x.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982446/portfolio_project_thumbnails_kv7dld.svg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982450/portfolio_project_thumbnails_1_dfjrl0.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982762/Kayla_s_Playground_fwistb.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
