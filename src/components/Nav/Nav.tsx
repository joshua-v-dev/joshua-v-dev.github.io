import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { LightDarkMode } from "../Button/LightDarkMode";
import { Dot } from "../Divider/Dot";
import MobileMenu from "../Menu/MobileMenu";

type TNavItemProps = {
  href: string;
  text: string;

};

function NavItem({ href, text }: TNavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}

export default function Nav() {

  return (
    <>
      <nav className="relative flex items-center justify-between  max-w-5xl border-gray-200 dark:border-gray-700 mx-auto py-6 sm:pb-16  text-gray-900 bg-transparent  dark:bg-transparent bg-opacity-60 dark:text-gray-100">
        {/* <section className="mx-auto bg-transparent p-5 lg:p-6"> */}
        {/* <div className="ml-[-0.60rem]"> */}
        <MobileMenu />



        {/* </div> */}

        <div className="hidden lg:absolute lg:top-1/2 lg:left-1/2 lg:inline-flex lg:-translate-y-1/2 lg:-translate-x-1/2 lg:transform">
          {/* <ul className="text-grey-500 flex items-center space-x-10 brightness-125">
              <li> */}


          <LightDarkMode />

          <NavItem href="/services" text="Services" />
          <Dot />
          <NavItem href="/guestbook" text="Guestbook" />
          <Dot />
          <NavItem href="/services" text="Services" />
          <Dot />
          <NavItem href="/gallery" text="Projects" />
          <Dot />
          <NavItem href="/future" text="Game" />
          {/* <Link
                  className=" hover:text-brightness-200 text-lg font-bold text-gray-500 brightness-125 hover:brightness-200"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <span>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#5a67d8"></circle>
                </svg>
              </span>
              <li>
                <Link
                  className=" hover:text-brightness-200 text-lg font-bold text-gray-500 brightness-125 hover:brightness-200"
                  href="/story"
                >
                  Story
                </Link>
              </li>
              <span>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#5a67d8"></circle>
                </svg>
              </span>
              <li>
                <Link
                  className="hover:text-brightness-200 text-lg font-bold text-gray-500 brightness-125 hover:brightness-200"
                  href="/contact"
                >
                  Contact
                </Link> */}
          {/* </li>
            </ul> */}
        </div>


        {/* </section> */}
      </nav>
    </>
  );
}
