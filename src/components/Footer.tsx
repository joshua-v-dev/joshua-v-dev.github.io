import Link from "next/link";
// import { NowPlaying } from './NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-white transition-all hover:text-lg hover:brightness-150 dark:hover:text-accent-3  dark:hover:brightness-200"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);
const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center py-2">
      <hr className="border-1 w-full border-gray-200 py-2 dark:border-gray-800" />
      {/* <NowPlaying data={undefined} /> */}
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-white transition-all hover:text-lg hover:brightness-150 dark:hover:text-accent-3  dark:hover:brightness-200"
          >
            Home
          </Link>
          <Link
            href="/story"
            className="text-white transition-all hover:text-lg hover:brightness-150 dark:hover:text-accent-3  dark:hover:brightness-200"
          >
            Story
          </Link>
          <Link
            href="/services"
            className="text-white transition-all hover:text-lg hover:brightness-150 dark:hover:text-accent-3  dark:hover:brightness-200"
          >
            Services
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://linkedin.com/JoshuaVStories">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/joshua-v-dev">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/@joshuavstories1529">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/gallery"
            className="text-white transition-all hover:text-lg hover:brightness-150 dark:hover:text-accent-3  dark:hover:brightness-200"
          >
            Gallery
          </Link>
          <Link
            href="/products"
            className="text-white transition-all hover:text-lg hover:brightness-150 dark:hover:text-accent-3  dark:hover:brightness-200"
          >
            Products
          </Link>

          <Link
            href="/contract"
            className="text-white transition-all hover:text-lg hover:brightness-150 dark:hover:text-accent-3  dark:hover:brightness-200"
          >
            Contract
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{/* Footer */ }
{/* <footer className="mt-24 sm:mt-56" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">
    Footer
  </h2>
  <div className="max-w-7xl mx-auto px-6 pb-8 lg:px-8">
    <div className="border-t border-white/10 pt-16 sm:pt-24 xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="grid grid-cols-2 gap-8 xl:col-span-2">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Solutions
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Support
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Company
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Legal
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 xl:mt-0">
        <h3 className="text-sm font-semibold leading-6 text-white">
          Subscribe to our newsletter
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-300">
          The latest news, articles, and resources, sent to your inbox
          weekly.
        </p>
        <form className="mt-6 sm:flex sm:max-w-md">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
            required
            className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
            placeholder="Enter your email"
          />
          <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
      <div className="flex space-x-6 md:order-2">
        {footerNavigation.social.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-500 hover:text-gray-400"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
        &copy; 2020 Your Company, Inc. All rights reserved.
      </p>
    </div>
  </div>
</footer> */}