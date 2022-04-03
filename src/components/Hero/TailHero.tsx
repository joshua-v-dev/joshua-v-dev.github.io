import Image from "next/image";

export default function TailHero ()
{
  return (
    <div className="relative h-screen bg-transparent mx-auto flex lg:items-start sm:items-center  ">

      <div className="z-10 bg-transparent mx-auto">

        <div className="flex select-none items-center justify-center">
          <a
            className="text-2xl font-bold text-gray-200"
            href="#"
          >
            <div className="relative h-36 w-36">
              <Image
                className="rounded-full object-contain"
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
                alt=""
                layout="fill"
              ></Image>
            </div>
          </a>
        </div>
        <main className="  flex select-none justify-center py-6">
          <div className=" text-center ">
            <h1 className=" text-8xl font-extrabold tracking-tight text-green-400  shadow-green-500/50 outline-1 brightness-150 sm:text-3xl md:text-4xl">
              <span className=" text-8xl sm:text-7xl font-extrabold tracking-wide xl:inline ">
                Joshua Vaughn
              </span>
            </h1>
            <div className="my-2">
              <span className=" text-5xl font-extrabold tracking-tighter text-green-600 brightness-150 xl:inline ">
                Full Stack Web Developer
              </span>
            </div>
            <p className=" text-2xl font-extrabold tracking-tight text-gray-500 brightness-150  ">
              Innovation one idea at a time
            </p>
          </div>
        </main>
      </div>
    </div>

  );
}
