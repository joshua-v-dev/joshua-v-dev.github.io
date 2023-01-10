import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex h-screen items-start justify-center bg-transparent  ">
      <div className="z-10  mx-auto bg-transparent">
        <div className="flex select-none items-center justify-center">
          <Link className="text-2xl font-bold text-gray-200" href="#">
            <div className="relative h-36 w-36">
              <Image
                className="rounded-full object-contain"
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </Link>
        </div>
        <main className="  flex select-none justify-center py-6">
          <div className=" text-center ">
            <h1 className=" text-9xl font-extrabold tracking-tightest text-accent-2  shadow-accent-2-500/50 outline-1 brightness-190 sm:text-3xl md:text-4xl">
              <span className=" text-9xl font-extrabold tracking-wide sm:text-7xl xl:inline ">
                Joshua Vaughn
              </span>
            </h1>
            <div className="my-2">
              <span className=" text-6xl font-extrabold tracking-tight text-dark shadow-dark-4xl brightness-100 xl:inline ">
                Full Stack Web Developer
              </span>
            </div>
            <p className=" text-4xl font-extrabold tracking-leading text-zinc-700 shadow-dark-2xl ">
              Innovation one idea at a time
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
