export default function HomeCta ()
{
  return (
    <>
      <section className="mx-auto flex justify-center ">
        <div className="container max-w-screen-xl  overflow-hidden rounded-3xl bg-transparent">
          <div className="mx-auto max-w-5xl py-7 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-14 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-400 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-indigo-600">
                Let&apos;s solve your technology needs
              </span>
            </h2>
            <div className="flex lg:flex-shrink-0 lg:space-x-4">
              <div className="inline-flex rounded-md shadow lg:space-x-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 brightness-150 px-4 py-2 text-base font-medium text-indigo-600 hover:bg-indigo-700"
                >
                  Activate Demo
                </a>
              </div>
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base brightness-150 font-medium text-teal-600 hover:bg-indigo-50"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
