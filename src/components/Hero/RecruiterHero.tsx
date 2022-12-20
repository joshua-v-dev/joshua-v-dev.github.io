import Image from "next/image";
const RecruiterHero = () => {
    return (
        <div className=" flex items-center justify-center">
            <Image
                className=" rounded-full p-5 "
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1644084374/V_ortjg1.svg"
                alt="string"
                width={100}
                height={100}
            ></Image>
            <div className="text-middle p-5 lg:text-xl">
                <h4 className=" bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-5xl font-extrabold leading-10 text-transparent brightness-125 lg:py-5 lg:text-7xl">
                    Joshua Vaughn
                </h4>
            </div>
        </div>
    )
}
export default RecruiterHero;