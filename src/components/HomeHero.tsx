import Image from "next/image";
import SkipToContent from "./SkipToContent";

const HomeHero = () => {
  return (
    <>
      <section className="z-10 mx-auto flex min-h-screen flex-1 flex-col items-center justify-start bg-transparent text-center  ">
        <div className="relative flex flex-col items-center justify-center">
          <Image
            className="rounded-full object-contain"
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1648330190/JV_LOGO_BLUE_NEON_flabe5.png"
            alt=""
            width={150}
            height={150}
          />

          <h1 className=" tracking-tightest shadow-accent-2-500/50 text-9xl font-extrabold  text-accent-2 outline-1 brightness-190 sm:text-3xl md:text-4xl">
            <span className=" text-9xl font-extrabold tracking-wide sm:text-7xl xl:inline ">
              Joshua Vaughn
            </span>
          </h1>

          <h2 className="tracking-tight ">
            <span className=" shadow-dark-4xl text-6xl font-extrabold tracking-tight text-dark brightness-100 xl:inline ">
              Full Stack Web Developer
            </span>
          </h2>

          <h3 className="tracking-leading">
            <span className=" shadow-dark-2xl text-4xl font-extrabold text-accent-7 brightness-50 ">
              Innovation one idea at a time
            </span>
          </h3>
        </div>
        <SkipToContent />
      </section>
    </>
  );
};

export default HomeHero;
