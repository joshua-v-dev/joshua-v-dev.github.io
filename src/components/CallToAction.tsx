import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative mx-auto bg-gray-800 pb-32 pt-20  2xl:py-40">
      {/* <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-bl from-teal-400 to-teal-900  opacity-30"></div> */}
      {/* <div className=" bg-gradient-tr to-orange-800 absolute inset-x-0 bottom-0 -ml-64 -mb-12 h-3/5 -rotate-6 transform from-blue-400"></div> */}
      <div className=" relative mx-auto px-3">
        <div className=" text-center">
          <span className="bg-gradient-to-br from-yellow-200 to-orange-600 bg-clip-text text-lg font-bold text-transparent">
            LET&apos;S CHANGE THE WORLD!
          </span>
          <h2 className="font-heading text-5xl font-bold text-gray-200 lg:text-6xl">
            Let&apos;s change the World together!
          </h2>
          <div className="mx-auto ">
            <p className=" text-lg text-gray-200">
              Let&apos;s change YOUR World together!
            </p>

            <Link
              className="inline-block rounded-full border border-gray-50 px-12 py-4 font-bold text-gray-200 hover:border-gray-100"
              href="#"
            >
              Contact Me Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
