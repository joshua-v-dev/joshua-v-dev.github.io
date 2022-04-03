// import Image from 'next/image';
const FuturePage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-800">
        <div className="bg-gradient-zospace-1 absolute inset-x-0 bottom-0 h-full"></div>
        <div className="w-2full bg-gradient-zospace-2 absolute inset-x-0 bottom-0 -ml-64 -mb-12 h-3/5 -rotate-6 transform"></div>
        <nav className="relative">
          <div className="flex items-center justify-between py-8 px-4 lg:px-8">
            <button className="navbar-burger p-2">
              <svg
                className="h-3 w-10"
                width="39"
                height="13"
                viewBox="0 0 39 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
                <rect
                  x="19"
                  y="11"
                  width="20"
                  height="2"
                  rx="1"
                  fill="#C4C4C4"
                ></rect>
              </svg>
            </button>

            <div className="hidden lg:block">
              <a
                className="mr-10 inline-block border-b border-gray-200 text-lg font-bold text-gray-200 hover:text-gray-50"
                href="#"
              >
                Try for free!
              </a>
              <a
                className="inline-block rounded-full border border-gray-200 px-12 py-4 font-bold text-gray-200 hover:border-gray-200"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
        <div className="container relative mx-auto px-4 pt-12 md:pt-20">
          <div className="relative -mx-4 flex flex-wrap">
            <div className="mb:mb-0 mb-16 w-full px-4 lg:w-1/2 lg:pb-20 2xl:w-2/5">
              <span className="to-orange-600 bg-gradient-to-br from-yellow-200 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
                Two ways to start!
              </span>
              <h2 className="font-heading mt-7 mb-12 max-w-lg text-6xl font-bold text-gray-200 lg:mb-24 lg:max-w-md 2xl:text-7xl">
                Get perfect app for your project
              </h2>
              <div className="flex flex-wrap items-center">
                <a
                  className="mr-14 inline-block rounded-full bg-blue-500 px-12 py-5 text-lg font-bold text-gray-200 transition duration-200 hover:bg-blue-600"
                  href="#"
                >
                  Get started
                </a>
                <div className="mt-8 flex w-full sm:mt-0 sm:w-auto">
                  <button className="p-2">
                    <svg
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7597 18.6258C11.0801 18.942 11.0801 19.4502 10.7597 19.7641C10.4393 20.0781 9.92164 20.0792 9.60124 19.7641L0.240298 10.569C-0.0801018 10.255 -0.0801017 9.74688 0.240298 9.43061L9.60124 0.235462C9.92164 -0.0784849 10.4393 -0.0784848 10.7597 0.235462C11.0801 0.550571 11.0801 1.05986 10.7597 1.37381L2.22247 10.0004L10.7597 18.6258Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                  <span className="py-2 px-4">
                    <svg
                      width="2"
                      height="24"
                      viewBox="0 0 2 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 0L1 24"
                        stroke="white"
                        strokeOpacity="0.24"
                      ></path>
                    </svg>
                  </span>
                  <button className="p-2">
                    <svg
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.2403 1.37424C-0.0801003 1.05797 -0.0801003 0.549844 0.2403 0.235898C0.5607 -0.0780496 1.07836 -0.0792131 1.39876 0.235898L10.7597 9.43104C11.0801 9.74499 11.0801 10.2531 10.7597 10.5694L1.39876 19.7645C1.07836 20.0785 0.560699 20.0785 0.240298 19.7645C-0.0801019 19.4494 -0.0801019 18.9401 0.240298 18.6262L8.77752 9.99964L0.2403 1.37424Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative hidden w-1/2 px-4 lg:block">
              {/* <Image className="absolute bottom-0 max-h-128 2xl:max-h-144" src="zospace-assets/images/two-phones-bottom.png" alt=""></Image> */}
            </div>
            <div className="w-full lg:hidden">
              {/* <Image className="md:max-w-lg mx-auto" src="zospace-assets/images/zospace_app2.png" alt=""></Image> */}
            </div>
          </div>
        </div>
        <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 hidden w-5/6 max-w-sm">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative flex h-full w-full flex-col overflow-y-auto bg-gray-200 py-8">
            <div className="mb-16 flex items-center pr-6">
              <a
                className="ml-10 mr-auto text-2xl font-bold text-gray-800"
                href="#"
              >
                {/* <Image className="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto"></Image> */}
              </a>
            </div>
            <div>
              <ul>
                <li className="mb-1 px-10">
                  <a
                    className="hover:bg-blueGray-50 block rounded-xl py-4 pl-8 text-xl text-gray-800"
                    href="#"
                  >
                    Product
                  </a>
                </li>
                <li className="mb-1 px-10">
                  <a
                    className="hover:bg-blueGray-50 block rounded-xl py-4 pl-8 text-xl text-gray-800"
                    href="#"
                  >
                    Story
                  </a>
                </li>
                <li className="mb-1 px-10">
                  <a
                    className="hover:bg-blueGray-50 block rounded-xl py-4 pl-8 text-xl text-gray-800"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-1 px-10">
                  <a
                    className="hover:bg-blueGray-50 block rounded-xl py-4 pl-8 text-xl text-gray-800"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section>
        <div className="bg-cover bg-no-repeat pt-64">
          <div className="lg:clip-path-triangle bg-gray-200 py-12 lg:pt-64">
            <div className="mx-auto max-w-xl text-center">
              <div className="mb-6 flex items-center justify-center text-xs font-semibold uppercase text-blue-500">
                <a href="#">Home</a>
                <span className="mx-2 inline-block">
                  <svg
                    className="h-3 w-3 text-blue-500"
                    viewBox="0 0 8 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.875 0L0 1.875L4.125 6L0 10.125L1.875 12L7.875 6L1.875 0Z"></path>
                  </svg>
                </span>
                <a href="#">Blog</a>
                <span className="mx-2 inline-block">
                  <svg
                    className="h-3 w-3 text-blue-500"
                    viewBox="0 0 8 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.875 0L0 1.875L4.125 6L0 10.125L1.875 12L7.875 6L1.875 0Z"></path>
                  </svg>
                </span>
                <a href="#">Article</a>
              </div>
              <h2 className="font-heading mb-6 text-5xl font-bold text-blue-800">
                Lorem ipsum dolor sit amet consectutar
              </h2>
              <div className="flex items-center justify-center">
                <div className="mr-6">
                  {/* <Image className="w-14 h-14 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""></Image> */}
                </div>
                <div className="text-left">
                  <h3 className="font-heading mb-2 text-lg font-semibold text-gray-500">
                    Sara Sampton
                  </h3>
                  <p className="text-xs text-blue-500">10 Jun 2021 | 19:40</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl pb-24">
            <p className="mb-6 text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              eveniet est laborum exercitationem!
            </p>
            <p className="mb-6 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              illo ipsa magni dolore doloribus? Velit laboriosam est nostrum
              ducimus, amet enim sed quidem excepturi?
            </p>
            <p className="mb-6 text-lg text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur aperiam ipsum vel facilis, quibusdam velit. Et, ipsam
              repellat? Possimus id exercitationem aut voluptatum cumque, nemo
              quaerat officiis accusamus.
            </p>
            <p className="mb-6 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              illo ipsa magni dolore doloribus? Velit laboriosam est nostrum
              ducimus, amet enim sed quidem excepturi?
            </p>
          </div>
        </div>
      </section>
      <section className="skewed-bottom-right">
        <nav className="relative flex items-center justify-between bg-gray-900 px-6 py-6">
          <a
            className="text-3xl font-bold leading-none text-gray-200"
            href="#"
          ></a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center p-3 text-gray-200">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform  lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
            <li>
              <a className="text-sm text-gray-300 hover:text-gray-200" href="#">
                Start
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="current-fill h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <a className="text-sm font-bold text-gray-200" href="#">
                About Us
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="current-fill h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <a className="text-sm text-gray-300 hover:text-gray-200" href="#">
                Services
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="current-fill h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <a className="text-sm text-gray-300 hover:text-gray-200" href="#">
                Platform
              </a>
            </li>
            <li className="text-gray-800">
              <svg
                className="current-fill h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </li>
            <li>
              <a className="text-sm text-gray-300 hover:text-gray-200" href="#">
                Testimonials
              </a>
            </li>
          </ul>
          <a
            className="hidden rounded-l-xl rounded-t-xl bg-pink-500 py-2 px-6 text-sm font-bold text-gray-200 transition duration-200 hover:bg-pink-600 lg:inline-block"
            href="#"
          >
            Contact Us
          </a>
        </nav>
        <div className="radius-for-skewed bg-gray-900 pt-12 pb-20 lg:pt-20">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="mb-12 flex w-full items-center px-4 md:mb-20 lg:mb-0 lg:w-1/2">
                <div className="w-full text-center lg:text-left">
                  <div className="mx-auto max-w-md lg:mx-0">
                    <h2 className="mb-3 text-4xl font-bold text-gray-200 lg:text-5xl">
                      <span>Build &amp; Launch without</span>
                      <span className="text-purple-600">problems</span>
                    </h2>
                  </div>
                  <div className="mx-auto max-w-sm lg:mx-0">
                    <p className="mb-6 leading-loose text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                    <div>
                      <a
                        className="mb-3 inline-block w-full rounded-l-xl rounded-t-xl bg-purple-600 py-2 px-6 font-semibold leading-loose text-gray-200 transition duration-200 hover:bg-purple-700 lg:mb-0 lg:mr-3 lg:w-auto"
                        href="#"
                      >
                        Get Started
                      </a>
                      <a
                        className="inline-block w-full rounded-l-xl rounded-t-xl border-2 border-gray-700 bg-gray-900 py-2 px-6 font-semibold leading-loose text-gray-200 transition duration-200 hover:border-gray-600 lg:w-auto"
                        href="#"
                      >
                        How it works
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
                {/* <div className="relative" >
            <Image className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""></Image>
            <Image className="hidden md:block absolute"  src="atis-assets/elements/blue-up.svg" alt=""></Image>
            <Image className="hidden md:block absolute"  src="atis-assets/elements/wing-purple-down.svg" alt=""></Image>
            <Image className="hidden md:block absolute"  src="atis-assets/elements/bullets-dark-right.svg" alt=""></Image>
            <Image className="hidden md:block absolute" src="atis-assets/elements/bullets-yellow-left.svg" alt=""></Image>
          </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mr-for-radius">
          <svg
            className="h-8 w-full text-gray-900 md:h-12 lg:h-20"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 hidden w-5/6 max-w-sm">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex h-full w-full flex-col overflow-y-auto border-r bg-gray-200 py-6 px-6">
            <div className="mb-8 flex items-center">
              {/* <a className="mr-auto text-3xl font-bold leading-none" href="#">
          <Image className="h-10" src="atis-assets/logo/atis/atis-color-black.svg" alt="" width="auto"></Image>
        </a> */}
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600"
                    href="#"
                  >
                    Start
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600"
                    href="#"
                  >
                    Platform
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="mb-3 block rounded-l-xl rounded-t-xl bg-gray-50 px-4 py-3 text-center text-xs font-semibold leading-none hover:bg-gray-100"
                  href="#"
                >
                  Sign In
                </a>
                <a
                  className="mb-2 block rounded-l-xl rounded-t-xl bg-pink-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-gray-200 hover:bg-pink-700"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
              <p className="my-4 text-center text-xs text-gray-400">
                <span>&copy; 2020 All rights reserved.</span>
              </p>
              <div className="text-center">
                <a className="inline-block px-1" href="#">
                  {/* <Image src="atis-assets/social/facebook-purple.svg" alt=""></Image> */}
                </a>
                <a className="inline-block px-1" href="#">
                  {/* <Image src="atis-assets/social/twitter-purple.svg" alt=""></Image> */}
                </a>
                <a className="inline-block px-1" href="#">
                  {/* <Image src="atis-assets/social/instagram-purple.svg" alt=""></Image> */}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
export default FuturePage;
