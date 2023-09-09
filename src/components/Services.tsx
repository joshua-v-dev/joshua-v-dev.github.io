import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { classNames, frequencies, tiers } from "~/lib/constants";

const Services = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <>
      {/* <section id="main-content" className="mx-auto grid max-w-4xl p-3">
   

        <div className="mx-auto grid items-center justify-center p-8">
          <div className="p-15 mx-auto grid max-w-4xl gap-x-8 gap-y-4 bg-transparent shadow-indigo-600 sm:grid-flow-col lg:grid-cols-3">
            {tiers.map(
              (tier, i): FunctionComponentElement<PageTransitionEvent> => (
                <div
                  key={i}
                  className="border-b-1 relative grid items-center justify-evenly rounded-3xl border-4 border-t-4 border-double border-black border-indigo-600/90 border-t-indigo-600 border-opacity-90 bg-black/30 p-1 p-4 shadow-md shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105 sm:grid-flow-col md:grid-flow-row "
                >
                  <Link
                    className="mx-auto h-60 w-60 rounded-lg border-double p-2 outline-8 outline-offset-2	outline-black	brightness-100"
                    href={tier.href}
                    passHref
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light "
                  >
                    <Image
                      className="border-shadow-2 relative mx-auto grid items-center justify-center rounded-xl border border-indigo-600 border-opacity-90 bg-black/30 object-cover p-8 shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm"
                      src={tier.icon}
                      alt={tier.description}
                      width={500}
                      height={500}
                      priority
                    />

                  </Link>

                  <p className="shadow-accent-2-2xl grid justify-center p-1  text-xl font-bold leading-relaxed text-blue-400
">
                    {tier.description}
                  </p>

                  <p className="shadow-accent-2-2xl grid justify-center p-1  text-xl font-bold leading-relaxed text-blue-400
">
                    {tier.features}
                  </p>
                  <p className="shadow-accent-2-2xl grid justify-center p-1  text-xl font-bold leading-relaxed text-blue-400
">
                    {tier.cta}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section> */}
      <section id="main-content" className="mx-auto grid max-w-4xl p-3">
        <div className="my-6 bg-transparent">
          {/* Pricing section */}
          <div className="max-w-7xl mx-auto bg-transparent p-1">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mx-auto pb-4 text-4xl font-bold leading-8 text-indigo-600 underline brightness-100">
                Subscription Plans
              </h1>
              <p className="mx-auto max-w-lg pt-4 text-lg font-medium tracking-tight text-gray-100">
                Choose the plan that&apos;s right for your business
              </p>
            </div>
            <p className="mx-auto max-w-sm text-center text-xs font-normal leading-5 text-gray-400">
              A turn key solution for your business to get started with a fully
              managed custom website or app and online presence.
            </p>
            <div className="flex justify-center pt-8">
              <RadioGroup value={frequency} onChange={setFrequency}>
                <RadioGroup.Label className="sr-only">
                  Payment frequency
                </RadioGroup.Label>
                <div className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
                  {frequencies.map((option) => (
                    <RadioGroup.Option
                      key={option.value}
                      value={option}
                      className={({ active, checked }) =>
                        classNames(
                          `${
                            active
                              ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-500"
                              : ""
                          }`,
                          `${
                            checked
                              ? "bg-indigo-600 text-white"
                              : "text-gray-500"
                          }`,
                          "cursor-pointer rounded-full px-2.5 py-1"
                        )
                      }

                      // onClick={setFrequency(option) }
                    >
                      <span>{option.label}</span>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-white/5 ring-2 ring-indigo-500"
                      : "ring-1 ring-indigo-500/10",
                    "rounded-3xl p-8 xl:p-10"
                  )}
                >
                  <div className="flex items-center justify-between gap-x-4">
                    <h2
                      id={tier.id}
                      className="text-lg font-semibold leading-8 text-white"
                    >
                      {tier.name}
                    </h2>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {tier.price[frequency ? "monthly" : "yearly"]}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-300">
                      {frequency?.priceSuffix}
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                        : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                      "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    )}
                  >
                    Buy plan
                  </a>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-white"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
