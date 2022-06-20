const ServicesHero = () =>
{
    return (
        <div className="mx-auto max-w-3xl text-center">
            <span className=" bg-gradient-to-r from-blue-500 to-indigo-800 bg-clip-text text-5xl font-extrabold text-transparent brightness-125">
                Two ways to start!
            </span>
            <h2 className=" bg-gradient-to-r  from-blue-500 to-indigo-800 bg-clip-text text-5xl font-bold leading-loose text-transparent brightness-125 lg:text-6xl">
                We can build something great together
            </h2>
            <div className="mx-auto max-w-lg">
                <p className=" text-2xl font-bold text-gray-200">
                    Let&apos;s start building your digital solution today
                </p>
                <a
                    className="mb-4 inline-block rounded-full bg-blue-500 py-4 px-12 font-bold text-gray-200 transition duration-200 hover:bg-blue-600 sm:mb-0 sm:mr-4"
                    href="#"
                >
                    Contract Me
                </a>
                <a
                    className="inline-block rounded-full border border-gray-50 py-4 px-12 font-bold text-gray-200 hover:border-gray-100"
                    href="#"
                >
                    Recruit Me
                </a>
            </div>
        </div>
    )
}
export default ServicesHero;