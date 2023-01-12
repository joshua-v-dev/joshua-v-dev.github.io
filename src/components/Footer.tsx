import Link from "next/link";
// import NowPlaying from './NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);
const Footer = () => {
  return (
    <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      {/* <NowPlaying data={undefined} /> */}
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            href="/story"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Story
          </Link>
          <Link
            href="/services"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Services
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/JoshuaVStories">
            Twitter
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
            className="text-gray-500 transition hover:text-gray-600"
          >
            Gallery
          </Link>
          <Link
            href="/whitelist"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Whitelist
          </Link>
          <Link
            href="/future"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Alpha Projects
          </Link>
          <Link
            href="/contract"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Contract
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
