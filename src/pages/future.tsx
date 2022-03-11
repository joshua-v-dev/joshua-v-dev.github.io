import Image from 'next/image';
const FuturePage = () => {
  return (
    <>
     <section className="relative bg-gray-800 overflow-hidden">
  <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1"></div>
  <div className="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"></div>
  <nav className="relative">
    <div className="flex py-8 px-4 lg:px-8 justify-between items-center">
      <button className="p-2 navbar-burger">
        <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg>
      </button>
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <a className="text-2xl text-white font-bold" href="#">
          <Image className="h-7" src="zospace-assets/logos/zospace-logo.svg" alt="" width="auto"></Image>
        </a>
      </div>
      <div className="hidden lg:block"><a className="inline-block mr-10 text-lg text-white hover:text-gray-50 font-bold border-b border-gray-200" href="#">Try for free!</a><a className="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full" href="#">Sign Up</a></div>
    </div>
  </nav>
  <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
    <div className="relative flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-16 mb:mb-0 lg:pb-20">
        <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">Two ways to start!</span>
        <h2 className="max-w-lg lg:max-w-md mt-7 mb-12 lg:mb-24 text-6xl 2xl:text-7xl text-white font-bold font-heading">Get perfect app for your project</h2>
        <div className="flex flex-wrap items-center">
          <a className="inline-block mr-14 px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Get started</a>
          <div className="w-full sm:w-auto mt-8 sm:mt-0 flex">
            <button className="p-2">
              <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7597 18.6258C11.0801 18.942 11.0801 19.4502 10.7597 19.7641C10.4393 20.0781 9.92164 20.0792 9.60124 19.7641L0.240298 10.569C-0.0801018 10.255 -0.0801017 9.74688 0.240298 9.43061L9.60124 0.235462C9.92164 -0.0784849 10.4393 -0.0784848 10.7597 0.235462C11.0801 0.550571 11.0801 1.05986 10.7597 1.37381L2.22247 10.0004L10.7597 18.6258Z" fill="white"></path>
              </svg>
            </button>
            <span className="py-2 px-4">
              <svg width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0L1 24" stroke="white" strokeOpacity="0.24"></path>
              </svg>
            </span>
            <button className="p-2">
              <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.2403 1.37424C-0.0801003 1.05797 -0.0801003 0.549844 0.2403 0.235898C0.5607 -0.0780496 1.07836 -0.0792131 1.39876 0.235898L10.7597 9.43104C11.0801 9.74499 11.0801 10.2531 10.7597 10.5694L1.39876 19.7645C1.07836 20.0785 0.560699 20.0785 0.240298 19.7645C-0.0801019 19.4494 -0.0801019 18.9401 0.240298 18.6262L8.77752 9.99964L0.2403 1.37424Z" fill="white"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block w-1/2 px-4">
        <Image className="absolute bottom-0 max-h-128 2xl:max-h-144" src="zospace-assets/images/two-phones-bottom.png" alt=""></Image>
      </div>
      <div className="lg:hidden w-full">
        <Image className="md:max-w-lg mx-auto" src="zospace-assets/images/zospace_app2.png" alt=""></Image>
      </div>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
      <div className="flex items-center mb-16 pr-6">
        <a className="ml-10 mr-auto text-2xl text-gray-800 font-bold" href="#">
          <Image className="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto"></Image>
        </a>
      </div>
      <div>
        <ul>
          <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Product</a></li>
          <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Story</a></li>
          <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Features</a></li>
          <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="#">Contact</a></li>
        </ul>
      </div>
      <div className="mt-auto px-10">
        <div className="pt-6"><a className="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full" href="#">Sign in</a><a className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Sign up</a></div>
        <p className="mt-6 mb-4 text-lg text-center">
          <span>2021 &copy; Zospace. All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</section>
    </>
  );
};
export default FuturePage;
