import Image from "next/image";

const HomeHero = () => {
  return (
    <>
      <section className="pt-5 max-w-xs lg:max-w-6xl z-10 mx-auto flex min-h-screen flex-1 flex-col items-center justify-start bg-transparent overflow-hidden">
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-gradient-to-r from-accent-2 to-accent-7 opacity-50 mix-blend-multiply blur-3xl brightness-50 filter" />

          <Image
            className="rounded-full object-contain"
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
            alt=""
            width={150}
            height={150}
          />

          <h1 className="py-2 tracking-tightest shadow-accent-2-500/50 font-extrabold text-center text-accent-2 outline-1 text-lg brightness-190 lg:text-5xl md:text-4xl xl:text-7xl">
            <span className=" text-6xl font-extrabold tracking-wide lg:text-8xl xl:inline ">
              Joshua Vaughn
            </span>
          </h1>

          <h2 className="py-1 tracking-tight ">
            <span className=" shadow-dark-4xl text-5xl font-bold tracking-tight text-accent-2 brightness-100 xl:inline ">
              Full-Stack Web Developer
            </span>
          </h2>

          <h3 className="py-1 tracking-tight ">
            <span className=" shadow-dark-4xl text-2xl font-semibold tracking-tight text-accent-3 brightness-200 xl:inline ">
              I build software solutions for the web.
            </span>
          </h3>


        </div>
      </section>
    </>
  );
};

export default HomeHero;
