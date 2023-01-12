import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dot } from "./Dot";
import { LightDarkMode } from "./LightDarkMode";

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
          ? "font-bold text-gray-100 dark:text-gray-300"
          : "font-semibold text-white dark:text-gray-500",
        "hidden rounded-lg px-3 py-2 transition-all hover:bg-transparent hover:text-lg hover:brightness-150 dark:hover:text-accent-3  dark:hover:brightness-200 md:inline-block "
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}

const Nav = () => {
  return (
    <>
      <nav className="relative mx-auto flex max-w-3xl items-center justify-evenly border-gray-200 bg-transparent bg-opacity-60 py-3 text-gray-500 dark:border-gray-800  dark:bg-transparent dark:text-gray-600 ">
        <section className=" bg-transparent p-4 lg:p-6">
          <div className="hidden lg:absolute lg:top-1/2 lg:left-1/2 lg:inline-flex lg:-translate-y-1/2 lg:-translate-x-1/2 lg:transform">
            <ul className="text-grey-500 flex items-center space-x-5 brightness-125">
              <li>
                <LightDarkMode />
              </li>

              <li>
                <NavItem href="/services" text="Services" />
              </li>
              <Dot />

              <li>
                <NavItem href="/whitelist" text="Whitelist" />
              </li>
              <Dot />
              <li>
                <NavItem href="/contract" text="Contract" />
              </li>
              <Dot />
              <li>
                <NavItem href="/gallery" text="Gallery" />
              </li>
              <Dot />
              <li>
                <NavItem href="/future" text="Future" />
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Nav;
