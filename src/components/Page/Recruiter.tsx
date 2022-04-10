import Image from "next/image";
import Link from "next/link";

const Recruiter = () => {
  return (
    <>
      <section className="container max-w-max overflow-hidden rounded-xl bg-transparent py-5 opacity-100 2xl:py-10">
        <div className=" flex items-center justify-center">
          <Image
            className=" rounded-full p-5 "
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644084374/V_ortjg1.svg"
            alt=""
            width="100"
            height="100"
          ></Image>
          <div className="text-middle p-5 lg:text-xl">
            <h4 className=" bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-5xl font-extrabold leading-10 text-transparent brightness-125 lg:py-5 lg:text-7xl">
              Joshua Vaughn
            </h4>
          </div>
        </div>

        <div className=" mx-auto px-4">
          <Image
            className="relative grid overflow-hidden rounded-xl "
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1649554635/Untitled_design_2_mazwcv.png"
            alt=""
            width="1500"
            height="350"
          ></Image>
          <div className="mx-auto max-w-7xl space-y-8 text-center">
            <div className="mx-auto grid py-5 ">
              <Link passHref href="/cta">
                <button
                  type="button"
                  className=" bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-7xl font-extrabold text-transparent brightness-125"
                >
                  Hire Me!
                </button>
              </Link>
            </div>
            <p className="mx-auto  max-w-max text-3xl font-bold text-gray-200">
              I wake up everyday hoping to bring a smile to someones face with a
              product I built.
            </p>
            <h2 className="grid border-b border-t border-gray-500 bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text  py-5  text-6xl font-extrabold text-transparent brightness-125 2xl:text-7xl">
              I Love Software
            </h2>

            <div className=" lg:grid-row-1 grid gap-10 sm:max-w-lg lg:max-w-max lg:grid-flow-col">
              <p className="grid text-3xl font-bold text-gray-200">
                Building applications that help increase the quality of life in
                any person that uses the technology is why I get up in the
                morning.
              </p>
              <p className="grid  text-3xl font-bold text-gray-200">
                I am trending to contribute my skills as a full stack developer
                to a company that has a similar vision.
              </p>
              <p className="grid text-3xl font-bold text-gray-200">
                There are so many exciting things to say about software
                development. Helping a company is my one of my primary goals as
                a software developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Recruiter;
