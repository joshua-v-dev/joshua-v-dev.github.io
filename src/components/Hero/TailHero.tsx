import Image from "next/image";

export default function TailHero ()
{
  return (
    <div className="relative h-screen bg-transparent sm:mx-auto lg:space-y-20 ">
      <div className="sm:container lg:mx-auto lg:flex lg:items-center lg:justify-center lg:space-y-14 ">
        <div className="g-16 relative z-10 bg-transparent pb-6 sm:pb-8 md:pb-16  lg:max-w-4xl xl:pb-28">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-gray-200 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          ></svg>


          <div className="flex items-center justify-center select-none">
            <a className="inline-block text-2xl font-bold text-gray-200" href="#">
              <div className="relative h-36 w-36">
                <Image
                  className="relative  object-contain rounded-full bg-opacity-3"
                  src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
                  alt=""
                  layout="fill"
                ></Image>
              </div>
            </a>
          </div>
          <main className=" py-4 max-w-8xl flex justify-center sm:px-6 lg:space-y-16 lg:p-7 select-none">
            <div className=" p-3 text-center lg:space-y-6">
              <h1 className="select-none text-8xl font-extrabold tracking-tight text-blue-900  shadow-green-500/50 outline-1 brightness-150 sm:text-3xl md:text-4xl">
                <span className="block text-9xl font-extrabold tracking-wide xl:inline xl:max-w-none">
                  Joshua Vaughn
                </span>
              </h1>
              <div className="my-2">
                <span className="block text-5xl font-extrabold tracking-tighter text-blue-700 brightness-200 xl:inline xl:max-w-none ">
                  Full Stack Web Developer
                </span>
              </div>
              <p className="block text-xl font-extrabold tracking-tight text-gray-500 brightness-125 sm:mx-auto  sm:max-w-xl sm:text-lg  md:text-xl lg:mx-0 lg:text-3xl xl:max-w-none">
                Innovation one idea at a time
              </p>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
