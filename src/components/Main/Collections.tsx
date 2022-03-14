import Image from "next/image";
import { callouts } from "../../database/database";
export default function Collections() {
  return (
    <>
      <div className="px-auto lg:space-y-76 container mx-auto  flex items-center justify-center lg:my-auto lg:py-5 ">
        <h2 className="text-7xl font-extrabold tracking-tight text-indigo-600 brightness-125 lg:space-y-16">
          Collections
        </h2>
      </div>
      <div className="container  mx-auto grid grid-flow-col grid-rows-2 gap-12  sm:py-24 lg:max-h-max lg:max-w-max ">
        {callouts.map((callouts) => (
          <div
            key={callouts.id}
            className="bg-transparent object-contain px-5 py-5 sm:px-7 lg:px-7 "
          >
            <div className="relative flex flex-wrap overflow-hidden  pb-64">
              <a
                href=""
                className=" overflow-hidden rounded-lg shadow-md hover:shadow-xl"
              >
                <Image
                  src={callouts.imageSrc}
                  alt={callouts.imageAlt}
                  className="max-h-fit max-w-fit bg-emerald-600"
                  layout="fill"
                  priority
                />
              </a>
            </div>
            <div key={callouts.id} className="container justify-center p-4">
              <h3 className="inline-block  rounded-full bg-indigo-700 px-3 py-1  text-justify text-xl font-semibold uppercase leading-none tracking-wide text-gray-50">
                <a href={callouts.href}>
                  <span key={callouts.id} className="  inset-0 font-bold" />
                  {callouts.name}
                </a>
              </h3>
              <p
                key={callouts.id}
                className="p-1 text-lg font-bold text-gray-50 "
              >
                {callouts.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <section>
  <div className="skew skew-top mr-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
    </svg>
  </div>
  <div className="skew skew-top ml-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
    </svg>
  </div>
  <div className="py-20 bg-gray-900 radius-for-skewed">
    <div className="container mx-auto px-4">
      <div className="mb-8 md:mb-16 max-w-lg mx-auto text-center">
        <span className="text-purple-600 font-bold">Dolor sit amet consectutar</span>
        <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">Latest Projects</h2>
        <div className="inline-flex flex-wrap py-1 sm:px-1 sm:space-x-1 bg-gray-800 rounded text-sm">
          <button className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-purple-600 text-gray-500 hover:text-white rounded hover:shadow-md font-bold focus:outline-none transition duration-200">Category 1</button>
          <button className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 bg-purple-600 text-white shadow-md rounded font-bold focus:outline-none transition duration-200">Category 2</button>
          <button className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-purple-600 text-gray-500 hover:text-white rounded hover:shadow-md font-bold focus:outline-none transition duration-200">Category 3</button>
          <button className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-purple-600 text-gray-500 hover:text-white rounded hover:shadow-md font-bold focus:outline-none transition duration-200">Category 4</button>
        </div>
      </div>
      <div className="flex flex-wrap mb-8 -mx-4">
        {/* <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
          <a href="#">
            <Image className="mx-auto h-64 w-full rounded object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""></Image>
          </a>
        </div> */}
        {/* <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
          <a href="#">
            <Image className="mx-auto h-64 w-full rounded object-cover" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt=""></Image>
          </a>
        </div> */}
        {/* <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
          <div className="relative mx-auto h-64 w-full rounded-lg">
            <Image className="relative h-full w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""></Image>
            <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center"><a className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose" href="#">View Project</a></div>
          </div>
        </div> */}
        {/* <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
          <a href="#">
            <Image className="mx-auto h-64 w-full rounded object-cover" src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt=""></Image>
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
          <a href="#">
            <Image className="mx-auto h-64 w-full rounded object-cover" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""></Image>
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
          <a href="#">
            <Image className="mx-auto h-64 w-full rounded object-cover" src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt=""></Image>
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
          <a href="#">
            <Image className="mx-auto h-64 w-full rounded object-cover" src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1127&amp;q=80" alt=""></Image>
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
          <a href="#">
            <Image className="mx-auto h-64 w-full rounded object-cover" src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt=""></Image>
          </a>
        </div> */}
      </div>
      <div className="text-center"><a className="inline-block py-2 px-6 leading-loose rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-gray-50 font-bold tansition duration-200" href="#">View More Projects</a></div>
    </div>
  </div>
  <div className="skew skew-bottom mr-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
    </svg>
  </div>
  <div className="skew skew-bottom ml-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
    </svg>
  </div>
</section>
    </>
  );
}
