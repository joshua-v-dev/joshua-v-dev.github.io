const Cta = () =>
{
  return (
    <>
      <section className="relative overflow-hidden bg-gray-800 pt-20 pb-32  2xl:py-40">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-bl from-teal-400 to-teal-900  opacity-30"></div>
        <div className=" bg-gradient-tr absolute inset-x-0 bottom-0 -ml-64 -mb-12 h-3/5 -rotate-6 transform from-blue-400 to-orange-800"></div>
        <div className="container relative mx-auto px-3">
          <div className="mx-auto max-w-3xl text-center">
            <span className="bg-gradient-to-br from-yellow-200 to-orange-600 bg-clip-text text-lg font-bold text-transparent">
              LET&apos;S CHANGE THE WORLD!
            </span>
            <h2 className="font-heading my-10 text-5xl font-bold text-gray-200 lg:text-6xl">
              Let&apos;s change the World together!
            </h2>
            <div className="mx-auto max-w-md">
              <p className="mb-20 text-lg text-gray-200">
                Let&apos;s change YOUR World together!
              </p>

              <a
                className="inline-block rounded-full border border-gray-50 py-4 px-12 font-bold text-gray-200 hover:border-gray-100"
                href="#"
              >
                Contact Me Now!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cta;
