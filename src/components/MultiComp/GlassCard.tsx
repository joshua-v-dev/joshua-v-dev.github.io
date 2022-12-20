import Image from "next/image";
const GlassCard = () => {
    return (
        <div className="border-b-1 container grid grid-flow-row items-center  justify-center rounded-3xl border-4 border-t-4 border-double
								 border-black border-indigo-600/90 border-t-indigo-600  border-opacity-90 bg-black/30 p-12  shadow-md
								 shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm hover:scale-105">
            <a
                className="relative mx-auto h-64 w-64 rounded-lg border-double outline-8
									  outline-offset-2 
									outline-black 
									brightness-100"

                data-mdb-ripple="true"
                data-mdb-ripple-color="light "
            >
                <Image
                    className="flex items-center justify-center rounded-md object-cover p-2"
                    src="string"
                    alt="string"

                    priority
                />
            </a>
            <h5 className="grid justify-center p-2 text-3xl  font-semibold  leading-relaxed text-indigo-700 brightness-125">
                {"string"}
            </h5>
            <p className="grid justify-center text-sm font-semibold text-teal-500 brightness-95">
                {"string"}
            </p>

        </div>
    )
}
export default GlassCard;