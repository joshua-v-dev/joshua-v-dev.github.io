import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { SetStateAction, useState } from "react";
import { classNames, pricing } from "~/lib/constants";



const Services = () => {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);
  const [selectedTier, setSelectedTier] = useState(pricing.tiers[1]);

  const handleTierSelect = (
    tier: SetStateAction<
      | {
        name: string;
        id: string;
        href: string;
        price: { monthly: string; annually: string };
        description: string;
        features: string[];
        mostPopular: boolean;
      }
      | undefined
    >
  ) => {
    setSelectedTier(tier);
  };

  const handleFrequencySelect = (
    frequency: SetStateAction<{
      value: string;
      label: string;
      priceSuffix: string;
    }>
  ) => {
    setFrequency(frequency);
  };

  return (
    <div className="my-6 bg-transparent">
      <main>
        {/* Pricing section */}
        <div className="max-w-7xl mx-auto bg-transparent px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="py-2 text-5xl font-extrabold leading-8 text-indigo-400 underline">
              Subscription Plans
            </h1>
            <p className="pt-2 text-4xl font-semibold tracking-tight text-white">
              Choose the plan that&apos;s right for your business
            </p>
          </div>
          <p className="mx-auto pt-4  max-w-xl text-center font-base text-sm leading-5 text-gray-300">
            This is a subscription based service. A turn key solution for your business to get started with a fully managed custom website or app and online presence.
            Or if you already have a website/app, we can help you with the maintenance and updates.

          </p>
          <div className="pt-16 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
            >
              <RadioGroup.Label className="sr-only">
                Payment frequency
              </RadioGroup.Label>
              {pricing.frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? "bg-indigo-500" : "",
                      "cursor-pointer rounded-full px-2.5 py-1"
                    )
                  }
                  onChange={() => selectedTier && setFrequency(option)}
                  onClick={() => {
                    if (option.value === "monthly") {
                      setSelectedTier(pricing.tiers[0]);
                      handleTierSelect(pricing.tiers[0]);
                      handleFrequencySelect(pricing.frequencies[0] as any);
                    } else {
                      setSelectedTier(pricing.tiers[1]);
                      handleTierSelect(pricing.tiers[1]);
                    }
                  }}
                >
                  <span>{option.label}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-white/5 ring-2 ring-indigo-500"
                    : "ring-1 ring-white/10",
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
                    {tier.price[frequency?.value as keyof typeof tier.price]}
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

        {/* Testimonial section */}
        {/* <div className="max-w-7xl mx-auto mt-24 px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <img
                className="h-12 self-start"
                src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
                alt=""
              />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate
                    gravida sociis enim nullam ultricies habitant malesuada
                    lorem ac. Tincidunt urna dui pellentesque sagittis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Judith Black</div>
                    <div className="mt-1 text-gray-400">CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <img
                className="h-12 self-start"
                src="https://tailwindui.com/img/logos/reform-logo-white.svg"
                alt=""
              />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                    proident duis dolore nulla veniam reprehenderit nisi officia
                    voluptate incididunt exercitation exercitation elit. Nostrud
                    veniam sint dolor nisi ullamco.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">
                      Joseph Rodriguez
                    </div>
                    <div className="mt-1 text-gray-400">CEO of Reform</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div> */}

        {/* FAQ section */}
        {/* <div className="max-w-7xl mx-auto mt-24 px-6 sm:mt-56 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              sending us an email
            </a>{" "}
            and we’ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div> */}
      </main>


    </div>
  );
};

export default Services;
