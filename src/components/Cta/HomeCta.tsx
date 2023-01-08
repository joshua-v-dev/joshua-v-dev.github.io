import Link from "next/link";
const HomeCta = () => {
  return (
    <>
      <section className=" flex justify-around items-center ">
        <div className="  rounded-3xl bg-transparent">
          <div className=" py-7 px-4 sm:px-6 lg:flex lg:items-center lg:justify-evenly lg:py-14 lg:px-10 lg:gap-x-10">
            <div className="my-3 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-blue-400 sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-indigo-600">
                  Let&apos;s solve your technology needs
                </span>
              </h2>
            </div>
            <div className="flex lg:flex-shrink-0 lg:gap-x-4">
              <div className="flex gap-x-4">

                <div className="mx-auto flex rounded-md shadow lg:gap-x-4">
                  <Link
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600
                     px-4 py-2  text-base font-medium text-blue-400 brightness-150 hover:bg-indigo-700"
                  >
                    Activate Demo
                  </Link>
                </div>
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent
                     bg-indigo-600 px-4 py-2 text-base font-medium text-blue-400 brightness-150 
                     hover:bg-indigo-700"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default HomeCta;