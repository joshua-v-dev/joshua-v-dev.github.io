import Image from "next/image";

export default function TailHero() {
  return (
    <div className="relative h-screen bg-transparent sm:mx-auto lg:space-y-16 ">
      <div className="sm:container lg:mx-auto lg:flex lg:items-center lg:justify-center lg:space-y-16 ">
        <div className="g-16 relative z-10 bg-transparent pb-6 sm:pb-8 md:pb-16  lg:max-w-4xl xl:pb-28">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          ></svg>

 
          <div className="flex items-center justify-center">
            <a className="inline-block text-2xl font-bold text-white" href="#">
              <div className="relative h-32 w-32">
                <Image
                  className="relative  object-contain"
                  src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644093867/V_3_eq6srr.svg"
                  alt=""
                  layout="fill"
                ></Image>
              </div>
            </a>
          </div>
          <main className=" max-w-8xl flex justify-center sm:px-6 lg:space-y-16 lg:p-7">
            <div className=" p-3 text-center lg:space-y-8">
              <h1 className="text-7xl font-extrabold tracking-tight text-indigo-700 shadow-indigo-500/50 outline-1 brightness-150 sm:text-3xl md:text-4xl">
                <span className="block text-8xl xl:inline xl:max-w-none">
                  Joshua Vaughn
                </span>{" "}
              </h1>
              <span className="block text-5xl font-extrabold tracking-tight text-purple-700 brightness-105 xl:inline xl:max-w-none ">
                Full Stack Web Developer
              </span>

              <p className="block space-y-6 text-base font-bold text-gray-500 brightness-125 sm:mx-auto  sm:max-w-xl sm:text-lg  md:text-xl lg:mx-0 lg:text-3xl xl:max-w-none">
                Innovation one idea at a time
              </p>
             
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
