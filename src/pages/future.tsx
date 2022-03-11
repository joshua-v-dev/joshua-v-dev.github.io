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
    
    </nav>
  </div>
</section>
<section>
  <div className="pt-64 bg-cover bg-no-repeat">
    <div className="py-12 lg:pt-64 bg-white lg:clip-path-triangle">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6 text-xs text-blue-500 font-semibold uppercase">
          <a href="#">Home</a>
          <span className="inline-block mx-2">
            <svg className="text-blue-500 h-3 w-3" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.875 0L0 1.875L4.125 6L0 10.125L1.875 12L7.875 6L1.875 0Z"></path>
            </svg>
          </span>
          <a href="#">Blog</a>
          <span className="inline-block mx-2">
            <svg className="text-blue-500 h-3 w-3" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.875 0L0 1.875L4.125 6L0 10.125L1.875 12L7.875 6L1.875 0Z"></path>
            </svg>
          </span>
          <a href="#">Article</a>
        </div>
        <h2 className="mb-6 text-5xl text-blue-800 font-bold font-heading">Lorem ipsum dolor sit amet consectutar</h2>
        <div className="flex items-center justify-center">
          <div className="mr-6">
            <Image className="w-14 h-14 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""></Image>
          </div>
          <div className="text-left">
            <h3 className="mb-2 text-lg text-gray-500 font-semibold font-heading">Sara Sampton</h3>
            <p className="text-blue-500 text-xs">10 Jun 2021 | 19:40</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container px-4 mx-auto">
    <div className="max-w-2xl mx-auto pb-24">
      <p className="mb-6 text-lg text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque eveniet est laborum exercitationem!</p>
      <p className="mb-6 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illo ipsa magni dolore doloribus? Velit laboriosam est nostrum ducimus, amet enim sed quidem excepturi?</p>
      <p className="mb-6 text-lg text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aperiam ipsum vel facilis, quibusdam velit. Et, ipsam repellat? Possimus id exercitationem aut voluptatum cumque, nemo quaerat officiis accusamus.</p>
      <p className="mb-6 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illo ipsa magni dolore doloribus? Velit laboriosam est nostrum ducimus, amet enim sed quidem excepturi?</p>
    </div>
  </div>
</section>
<section className="skewed-bottom-right">
  <nav className="relative px-6 py-6 flex justify-between items-center bg-gray-900">
    <a className="text-white text-3xl font-bold leading-none" href="#">
      <Image className="h-12" src="atis-assets/logo/atis/atis-color-white.svg" alt="" width="auto"></Image>
    </a>
    <div className="lg:hidden">
      <button className="navbar-burger flex items-center text-white p-3">
        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
      <li><a className="text-sm text-gray-300 hover:text-white" href="#">Start</a></li>
      <li className="text-gray-800">
        <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-white font-bold" href="#">About Us</a></li>
      <li className="text-gray-800">
        <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-300 hover:text-white" href="#">Services</a></li>
      <li className="text-gray-800">
        <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-300 hover:text-white" href="#">Platform</a></li>
      <li className="text-gray-800">
        <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-300 hover:text-white" href="#">Testimonials</a></li>
    </ul>
    <a className="hidden lg:inline-block py-2 px-6 bg-pink-500 hover:bg-pink-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200" href="#">Contact Us</a>
  </nav>
  <div className="bg-gray-900 pt-12 lg:pt-20 pb-20 radius-for-skewed">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
          <div className="w-full text-center lg:text-left">
            <div className="max-w-md mx-auto lg:mx-0">
              <h2 className="mb-3 text-4xl lg:text-5xl text-white font-bold">
                <span>Build &amp; Launch without</span>
                <span className="text-purple-600">problems</span>
              </h2>
            </div>
            <div className="max-w-sm mx-auto lg:mx-0">
              <p className="mb-6 text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
              <div><a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a><a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a></div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
          <div className="relative" >
            <Image className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""></Image>
            <Image className="hidden md:block absolute"  src="atis-assets/elements/blue-up.svg" alt=""></Image>
            <Image className="hidden md:block absolute"  src="atis-assets/elements/wing-purple-down.svg" alt=""></Image>
            <Image className="hidden md:block absolute"  src="atis-assets/elements/bullets-dark-right.svg" alt=""></Image>
            <Image className="hidden md:block absolute" src="atis-assets/elements/bullets-yellow-left.svg" alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mr-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
    </svg>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-3xl font-bold leading-none" href="#">
          <Image className="h-10" src="atis-assets/logo/atis/atis-color-black.svg" alt="" width="auto"></Image>
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded" href="#">Start</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded" href="#">About Us</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded" href="#">Services</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded" href="#">Platform</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded" href="#">Testimonials</a></li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6"><a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign In</a><a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-pink-600 hover:bg-pink-700 rounded-l-xl rounded-t-xl" href="#">Sign Up</a></div>
        <p className="my-4 text-xs text-center text-gray-400">
          <span>&copy; 2020 All rights reserved.</span>
        </p>
        <div className="text-center">
          <a className="inline-block px-1" href="#">
            <Image src="atis-assets/social/facebook-purple.svg" alt=""></Image>
          </a>
          <a className="inline-block px-1" href="#">
            <Image src="atis-assets/social/twitter-purple.svg" alt=""></Image>
          </a>
          <a className="inline-block px-1" href="#">
            <Image src="atis-assets/social/instagram-purple.svg" alt=""></Image>
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
