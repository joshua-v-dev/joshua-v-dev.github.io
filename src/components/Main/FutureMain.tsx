import Link from "next/link";

const FutureMain = () => {
  return (
    <section>
      <section className="skewed-bottom-right my-5 rounded-md">
        <div className="radius-for-skewed bg-gray-900 pt-12 pb-20 lg:pt-12">
          <div className=" mx-auto px-4">
            <div className=" flex flex-wrap">
              <div className="mb-8 flex  items-center px-4 md:mb-20 lg:mb-0 lg:w-1/2">
                <div className=" text-center lg:text-left">
                  <div className="mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl font-bold text-gray-200 lg:text-5xl">
                      <span>Build &amp; Launch without</span>
                      <span className="text-purple-600">problems</span>
                    </h2>
                  </div>
                  <div className="mx-auto lg:mx-0">
                    <p className="mb-4 leading-loose text-gray-400">
                      Easter Egg: Everybody get up it&apos;s time to slam now We
                      got a real jam goin&apos; down Welcome to the Space Jam
                      Here&apos;s your chance, do your dance At the Space Jam
                      Alright Come on and slam, and welcome to the jam Come on
                      and slam, if you wanna jam! ... Bugs Bunny Rules!
                    </p>
                    <div>
                      <Link
                        className="mb-2 inline-block  rounded-r-xl rounded-t-xl bg-purple-600 py-2 px-6 font-semibold leading-loose text-gray-200 transition duration-200 hover:bg-purple-700 lg:mb-0 lg:mr-3 lg:w-auto"
                        href="#"
                      >
                        Get Started
                      </Link>
                      <Link
                        className="inline-block  rounded-r-xl rounded-t-xl border-2 border-gray-700 bg-gray-900 py-2 px-6 font-semibold leading-loose text-gray-200 transition duration-200 hover:border-gray-600 lg:w-auto"
                        href="#"
                      >
                        How it works
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-for-radius">
          <svg
            className="bottom-3 h-6 w-12  text-gray-900 md:h-8 lg:h-12"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
      </section>

      <section className="lg:grid-col-2 lg:my-12 lg:grid lg:grid-flow-col">
        <div className="bg-transparent bg-cover bg-no-repeat pt-20">
          <div className=" my-3 bg-transparent ">
            <div className="mx-auto text-center">
              <div className="flex items-center justify-center">
                <div className="text-center ">
                  <h3 className="  font-extrabold leading-snug  text-indigo-800 brightness-150 lg:text-7xl ">
                    Joshua Vaughn
                  </h3>
                  <p className="text-xs font-bold leading-loose text-yellow-800 brightness-150 lg:text-5xl">
                    Full Stack Web Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <h2 className=" text-5xl font-bold leading-loose  text-purple-800 decoration-from-font brightness-150 lg:text-5xl">
                  The future is now!
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-auto px-4">
          <div className="mx-auto pb-12">
            <p className="mb-6 text-lg text-gray-500 lg:text-2xl">
              These are the things that I am doing in the future for my web
              development projects.
            </p>
            <p className="mb-6 text-lg text-gray-500 lg:text-2xl">
              Have you ever wondered where the internet is going? I have been
              working on this project for a while now and I am excited to see
              what the future holds. I believe we are at the pinnacle of what we
              can do with the internet. I am excited to see what the future
              holds.
            </p>
            <p className="mb-6 text-lg text-gray-500 lg:text-2xl">
              Everytime I see a new project I am excited to see what the future
              holds. I am excited to see what the future holds.
            </p>
            <p className="mb-6 text-lg text-gray-500 lg:text-2xl">
              With ever changing technology, I am excited to see what the future
              holds. I am excited to see what the future holds. Plus I am
              excited to see what the future holds.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
export default FutureMain;
