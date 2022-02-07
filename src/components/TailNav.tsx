export default function TailNav() {
  return (
    <section className=" max-h-7 bg-transparent py-8 px-4 lg:px-10">
      <nav className="relative flex items-center justify-between">
        <a className="text-2xl font-bold text-white" href="#">
          <img
            className="h-24"
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644093867/V_3_eq6srr.svg"
            alt=""
            width="auto"
          ></img>
        </a>
        <div className="lg:hidden">
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
        </div>
        <div className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform lg:block">
          <ul className="flex items-center space-x-10 text-white">
            <li>
              <a className="text-lg font-bold text-white" href="#">
                Projects
              </a>
            </li>
            <span>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
              </svg>
            </span>
            <li>
              <a className="text-lg font-bold text-white" href="#">
                Services
              </a>
            </li>
            <span>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
              </svg>
            </span>
            <li>
              <a className="text-lg font-bold text-white" href="#">
                Story
              </a>
            </li>
            <span>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
              </svg>
            </span>
            <li>
              <a className="text-lg font-bold text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <a
            className="inline-block rounded-full border border-gray-200 px-12 py-4 font-bold text-white hover:border-white"
            href="#"
          >
            Want To Play A Game?
          </a>
        </div>
      </nav>
      <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 hidden w-5/6 max-w-sm">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav className="relative flex h-full w-full flex-col overflow-y-auto bg-white py-8">
          <div className="mb-16 flex items-center pr-6">
            <a className="ml-10 text-2xl font-bold text-gray-800" href="#">
              <img
                className="h-7"
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644093867/V_3_eq6srr.svg"
                alt=""
                width="auto"
              ></img>
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
          <div className="mt-auto px-10">
            <div className="pt-6">
              <a
                className="mb-4 block rounded-full border border-gray-50 py-4 px-12 text-center font-bold text-gray-800 hover:border-gray-100"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block rounded-full bg-blue-500 py-4 px-12 text-center font-bold text-white transition duration-200 hover:bg-blue-600"
                href="#"
              >
                Sign up
              </a>
            </div>
            <p className="mt-6 mb-4 text-center text-lg">
              <span>2021 &copy; Zospace. All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}
