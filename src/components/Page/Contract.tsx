import Image from "next/image";
import Button from "components/MultiComp/Button";
const Contract = () => {
  return (
    <>
      <section
        className="border-b-1 container my-10 grid grid-flow-row items-center justify-center  rounded-3xl border-4 border-t-4 border-double border-black
								 border-indigo-600/90 border-t-indigo-600 border-opacity-90  bg-black/30 p-12 py-10  shadow-md
								 shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm"
      >
        <div className=" p-10 md:py-28">
          <div className=" mx-auto">
            <div className=" flex flex-wrap xl:items-center">
              <div className="mb-16 w-full  md:mb-0 md:w-1/2">
                <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-green-700 brightness-200 md:text-5xl lg:text-6xl">
                  Web technology can revolutionize any business
                </h1>
                <p className=" text-lg font-semibold  text-indigo-500 brightness-125 md:text-xl lg:text-3xl">
                  In this modern age a business only truly exists if it&apos;s
                  online. The best apps are the tell tale sign of the best
                  businesses. Let me help you create the best app for your
                  business.
                </p>

                <div className="m-auto grid items-start justify-start p-0">
                  <Button />
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
