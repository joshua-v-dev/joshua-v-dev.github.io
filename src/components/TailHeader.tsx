

export default function Tailheader(){
<section className="bg-indigo-500">
  <div className="container px-4 mx-auto">
    <nav className="flex justify-between items-center py-8">
      <a className="text-gray-600 text-2xl leading-none" href="#">
        <img className="h-8" src="plain-assets/logos/plain-light.svg" alt="" width="auto"></img>
      </a>
      <div className="lg:hidden">
        <button className="block navbar-burger text-indigo-50 hover:text-indigo-200 focus:outline-none">
          <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul className="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
        <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">About</a></li>
        <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">Company</a></li>
        <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">Services</a></li>
        <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">Testimonials</a></li>
      </ul>
      <button className="hidden lg:block text-indigo-50 hover:text-indigo-200">
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </nav>
    <div className="relative pt-12 md:pt-16 pb-32 lg:pb-48 mb-48 lg:mb-64">
      <div className="max-w-2xl mb-16 mx-auto text-center">
        <h2 className="mb-4 text-white text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">Finish what you started today before you forget to do it.</h2>
        <p className="mb-8 text-gray-50 text-base leading-relaxed lg:text-xl lg:leading-relaxed">Correct annotation helps your customers find their way around new features. Getting familiar with the project is the first step towards development.</p>
        <div><a className="block md:inline-block px-5 py-3 md:mr-3 mb-3 md:mb-0 text-sm text-center bg-white hover:bg-indigo-50 text-indigo-500 font-semibold border border-white hover:border-indigo-50 rounded transition duration-200" href="#">Try for Free</a><a className="block md:inline-block px-5 py-3 text-sm text-center font-semibold text-white hover:text-indigo-500 hover:bg-white border border-white rounded transition duration-200" href="#">Learn More</a></div>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <img className="absolute top-0 left-0 mx-auto w-full h-64 lg:h-96 rounded-xl object-cover" src="plain-assets/images/indigo-600-horizontal.png" alt=""></img>
      </div>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-12">
        <a className="mr-auto text-2xl font-semibold leading-none" href="#">
          <img className="h-8" src="plain-assets/logos/plain-indigo.svg" alt="" width="auto"></img>
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 cursor-pointer hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded" href="#">About</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded" href="#">Company</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded" href="#">Services</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded" href="#">Testimonials</a></li>
        </ul>
      </div>
      <div className="mt-auto">
        <p className="mt-6 mb-4 text-sm text-center text-gray-500">
          <span>© 2022 All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</section>
}