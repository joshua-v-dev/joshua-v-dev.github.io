import Link from "next/link";
// import NowPlaying from './NowPlaying';

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
