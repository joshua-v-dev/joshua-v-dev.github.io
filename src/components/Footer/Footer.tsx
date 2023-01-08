import Link from 'next/link';

type TExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ExternalLink = ({ href, children }: TExternalLinkProps) => (
  <Link
    className="text-blue-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="block sm:flex-cols-2 lg:flex sm:flex-row lg:flex-col justify-center sm:items-center lg:items-start lg:max-w-2xl mx-auto">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <div className=" max-w-2xl grid sm:grid-cols-2 lg:grid-cols-1   gap-4 pb-16">
        <div className="flex sm:flex-row lg:flex-col space-y-4">
          <Link
            href="/"
            className="text-blue-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-blue-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/future"
            className="text-blue-500 hover:text-gray-600 transition"
          >
            Coming Soon!
          </Link>
        </div>
        <div className="flex flex-col space-y-4 ">
          <ExternalLink className="text-blue-500" href="https://twitter.com/JoshuaVStories">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/joshua-v-dev">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/@joshuavstories1529">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/uses"
            className="text-blue-500 hover:text-gray-600 transition"
          >
            Uses
          </Link>
          <Link
            href="/guestbook"
            className="text-blue-500 hover:text-gray-600 transition"
          >
            Guestbook
          </Link>
          <Link
            href="/snippets"
            className="text-blue-500 hover:text-gray-600 transition"
          >
            Snippets
          </Link>
          {/* <Link
            href="/tweets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Tweets
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
