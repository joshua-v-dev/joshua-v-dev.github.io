import Image from "next/image";

export default function TailHero ()
{
  return (
    <div className="relative h-screen w-screen bg-transparent mx-auto flex items-start  ">

      <div className=" relative z-10 bg-transparent mx-auto lg:max-w-6xl ">

        <div className="flex select-none items-center justify-center">
          <a
            className="inline-block sm:text-lg text-2xl font-bold text-gray-200"
            href="#"
          >
            <div className="relative h-36 w-36">
              <Image
                className="relative rounded-full object-contain"
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
                alt=""
                layout="fill"
              ></Image>
            </div>
          </a>
        </div>
        <main className=" max-w-max flex select-none justify-center py-4 sm:px-6 lg:p-7">
          <div className=" p-3 text-center ">
            <h1 className="select-none text-8xl font-extrabold tracking-tight text-green-400  shadow-green-500/50 outline-1 brightness-150 sm:text-3xl md:text-4xl">
              <span className="block text-8xl sm:text-7xl font-extrabold tracking-wide xl:inline ">
                Joshua Vaughn
              </span>
            </h1>
            <div className="my-2">
              <span className="block text-5xl font-extrabold tracking-tighter text-green-600 brightness-150 xl:inline ">
                Full Stack Web Developer
              </span>
            </div>
            <p className="shadow-inner-xl block text-2xl font-extrabold tracking-tight text-gray-500 brightness-150 sm:mx-auto sm:max-w-content  sm:text-lg md:text-xl lg:mx-0 lg:text-3xl ">
              Innovation one idea at a time
            </p>
          </div>
        </main>
      </div>
    </div>

  );
}
