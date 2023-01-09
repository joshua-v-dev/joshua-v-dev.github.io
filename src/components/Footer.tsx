import Link from "next/link";

type TExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ExternalLink = ({ href, children }: TExternalLinkProps) => (
  <Link
    className="text-blue-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="sm:flex-cols-2 mx-auto block justify-center sm:flex-row sm:items-center lg:flex lg:max-w-2xl lg:flex-col lg:items-start">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />

      <div className=" grid max-w-2xl gap-4 pb-16   sm:grid-cols-2 lg:grid-cols-1">
        <div className="flex space-y-4 sm:flex-row lg:flex-col">
          <Link
            href="/"
            className="text-blue-500 transition hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-blue-500 transition hover:text-gray-600"
          >
            About
          </Link>
          <Link
            href="/future"
            className="text-blue-500 transition hover:text-gray-600"
          >
            Coming Soon!
          </Link>
        </div>
        <div className="flex flex-col space-y-4 ">
          <ExternalLink
            className="text-blue-500"
            href="https://twitter.com/JoshuaVStories"
          >
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
            href="/uses"
            className="text-blue-500 transition hover:text-gray-600"
          >
            Uses
          </Link>
          <Link
            href="/whitelist"
            className="text-blue-500 transition hover:text-gray-600"
          >
            Whitelist
          </Link>
          <Link
            href="/snippets"
            className="text-blue-500 transition hover:text-gray-600"
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
