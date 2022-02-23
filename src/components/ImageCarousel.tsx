import React from "react";
import Image from "next/image";
const ImageCarousel = () => {
  return (
    <>
      <h2 className="my-10  grid items-center justify-center text-6xl font-extrabold tracking-tight text-white">
        Featured
      </h2>
      <div className="relative h-full w-full">
        <div
          id="carouselDarkVariant"
          className=" carousel carousel-dark carousel-fade relative  my-auto grid content-center items-center bg-transparent "
          data-bs-ride="carousel"
        >
          {/* <!-- Inner --> */}

          <div className="carousel-inner relative right-4 flex w-full overflow-hidden p-12 ">
            {/* <!-- Single item --> */}

            <div className="container  mx-auto my-20  max-w-screen-lg border-gray-900  p-10">
              <div className="relative h-auto w-auto">
                <Image
                  src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg"
                  className="mx-auto   "
                  layout="fill"
                  alt="game"
                  priority
                ></Image>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643978160/Simple_Lined_Black_Onboarding_Page_Wireframe_Website_UI_Prototype_maycmm.svg"
                className="block w-full"
                layout="fill"
                alt="Mountaintop"
              ></Image>
            </div>
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl">UI Themes </h5>
              <p>Soon I will have themes available for download</p>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643978847/online-shopping-poster_zsnuxd.svg"
                className="block w-full"
                alt="Woman Reading a Book"
                layout="fill"
              ></Image>
            </div>
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl">E-Commerce Solutions</h5>
              <p>Stores, Apps, Templates</p>
            </div>
          </div>
        </div>
        {/* <!-- Inner -->

  <!-- Controls --> */}

        <button
          className="  carousel-control-prev absolute left-56 top-0 bottom-0 flex items-center  justify-center border-0 p-0 text-center hover:no-underline hover:outline-none  focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon flex rounded-lg bg-purple-900 p-2"
            aria-hidden="true"
          ></span>
          <span className="mx-2  text-white">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 right-44 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span className="mx-2 text-white">Next</span>
          <span
            className="carousel-control-next-icon flex rounded-lg bg-purple-900 p-2  "
            aria-hidden="true"
          ></span>
        </button>
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators mx-auto my-auto flex w-32  max-w-screen-lg items-center justify-center rounded-full bg-gray-200 px-2">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
          <div className=" absolute mt-16  hidden items-center justify-center text-center md:block">
            <h5 className=" text-3xl text-blue-400">New Game Coming Soon!</h5>
            <p className=" text-2xl text-blue-400">
              We definitely have something that you are going to love
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageCarousel;
