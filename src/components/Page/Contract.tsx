import Image from "next/image";

const Contract = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-transparent bg-center">
        <div className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap xl:items-center">
              <div className="mb-16 w-full px-4 md:mb-0 md:w-1/2">
                <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-50 brightness-125 md:text-5xl lg:text-6xl">
                  Web technology can revolutionize any business
                </h1>
                <p className="mb-8 text-lg font-medium text-gray-50 brightness-125 md:text-xl">
                  In this modern age a business only truly exists if it&apos;s
                  online. The best apps are the tell tale sign of the best
                  businesses. Let me help you create the best app for your
                  business.
                </p>
                <div className="flex flex-wrap">
                  <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                    <a
                      className="border-violet-500 bg-violet-500 text-violet-50 hover:bg-violet-600 focus:ring-violet-500 inline-block w-full rounded-xl border py-3 px-5 text-center text-base font-medium leading-4 shadow-sm focus:ring-2 focus:ring-opacity-50 md:text-lg"
                      href="#"
                    >
                      Request a Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative mx-auto my-auto max-w-max md:mr-0">
                  <Image
                    className="-left-18 absolute -top-12 z-10 w-28 md:w-auto"
                    src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643879107/Green_Purple_Computing_Technology_Logo_t9rm0q.svg"
                    alt=""
                    width="500"
                    height="500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contract;
