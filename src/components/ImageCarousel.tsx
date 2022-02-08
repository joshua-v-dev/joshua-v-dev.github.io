/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ImageCarousel = () => {
  return (
    <div
      id="carouselDarkVariant"
      className=" carousel carousel-dark carousel-fade relative grid bg-transparent "
      data-bs-ride="carousel"
    >
      <div className="carousel-caption absolute hidden text-center md:block">
        <h5 className=" text-3xl text-sky-400">New Game Coming Soon!</h5>
        <p className=" text-2xl text-sky-400">
          We definitely have something that you are going to love
        </p>
      </div>
      {/* <!-- Inner --> */}
      <div className="carousel-inner relative right-4 m-12 flex w-full overflow-hidden p-12 ">
        {/* <!-- Single item --> */}
        <div className="container mx-auto max-w-screen-lg border-zinc-900 bg-stone-200 p-10">
          <img
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg"
            className="mx-auto border-zinc-900   "
            alt="game"
          />
        </div>

        {/* <!-- Single item --> */}
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643978160/Simple_Lined_Black_Onboarding_Page_Wireframe_Website_UI_Prototype_maycmm.svg"
            className="block w-full"
            alt="Mountaintop"
          />
          <div className="carousel-caption absolute hidden text-center md:block">
            <h5 className="text-xl">UI Themes </h5>
            <p>Soon I will have themes available for download</p>
          </div>
        </div>

        {/* <!-- Single item --> */}
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643978847/online-shopping-poster_zsnuxd.svg"
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption absolute hidden text-center md:block">
            <h5 className="text-xl">E-Commerce Solutions</h5>
            <p>Stores, Apps, Templates</p>
          </div>
        </div>
      </div>
      {/* <!-- Inner -->

  <!-- Controls --> */}

      <button
        className="  carousel-control-prev absolute left-60 top-0 bottom-0 flex items-center  justify-center border-0 p-0 text-center hover:no-underline hover:outline-none  focus:no-underline focus:outline-none"
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
        className="carousel-control-next absolute top-0 bottom-0 right-40 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
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
      <div className="carousel-indicators  mx-auto max-w-screen-lg rounded-full bg-stone-200 px-2">
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
      </div>
    </div>
  );
};
export default ImageCarousel;
