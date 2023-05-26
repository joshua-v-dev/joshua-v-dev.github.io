import Image from "next/image";

const HomeHero = () => {
  return (
    <>
      <section className="z-100 mx-auto flex min-h-screen max-w-xs flex-col items-center justify-start overflow-hidden bg-transparent pt-5 lg:max-w-6xl lg:flex-1">
        <div className="relative mx-auto flex flex-col items-center justify-center">
          <Image
            className="rounded-full object-contain"
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
            alt=""
            width={150}
            height={150}
          />
        </div>

        <div className="relative mx-auto flex flex-col items-center justify-center">
          <h1 className="tracking-tightest shadow-accent-2-500/50 py-2 text-center text-lg font-extrabold text-accent-2 outline-1 brightness-190 md:text-4xl lg:text-5xl xl:text-7xl">
            <span className=" text-6xl font-extrabold tracking-wide lg:text-8xl xl:inline ">
              Joshua Vaughn
            </span>
          </h1>

          <h2 className="py-2 tracking-tight ">
            <span className="shadow-dark-4xl mx-auto text-5xl font-bold tracking-tight text-blue-800 xl:inline ">
              Full-Stack Web Developer
            </span>
          </h2>

          <h3 className="py-2 tracking-tight ">
            <span className=" shadow-dark-4xl inline text-2xl font-semibold tracking-tight text-blue-700 ">
              I build software solutions for the web.
            </span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
