import cn from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import useDelayedRender from "src/lib/useDelayedRender";
import styles from "src/styles/mobile-menu.module.css";
import { CrossIcon, MenuIcon } from "~/lib/icons";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "hidden";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <nav className="absolute h-full w-full bg-transparent ">
        <button
          className={cn(styles.burger, "visible md:hidden")}
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
        {isMenuMounted && (
          <ul
            className={cn(
              styles.menu,
              "opacity-2 shadow-dark-md absolute flex flex-col rounded-md bg-gradient-to-r from-accent-3 via-accent-4 to-accent-5 dark:border-gray-600",
              isMenuRendered && styles.menuRendered
            )}
          >
            <li
              className="border-b border-gray-300 text-lg font-semibold text-gray-500 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "150ms" }}
            >
              <Link href="/" className="flex w-auto pb-4">
                Home
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "175ms" }}
            >
              <Link href="/products" className="flex w-auto pb-4">
                Products
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "200ms" }}
            >
              <Link href="/services" className="flex w-auto pb-4">
                Services
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "250ms" }}
            >
              <Link href="/contract" className="flex w-auto pb-4">
                Contract
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "275ms" }}
            >
              <Link href="/gallery" className="flex w-auto pb-4">
                Gallery
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "300ms" }}
            >
              <Link href="/future" className="flex w-auto pb-4">
                Future
              </Link>
            </li>

          </ul>
        )}
      </nav>
    </>
  );
};

export default MobileMenu;
