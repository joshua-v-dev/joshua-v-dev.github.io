/* eslint-disable @next/next/no-img-element */
//tailwind card with image and ripple effect
const Projects = () => (
  <div className=" flex justify-center">
    <div className="max-w-sm rounded-lg bg-black shadow-lg">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img
          className="rounded-t-lg"
          src="https://res.cloudinary.com/dpytkhyme/image/upload/v1643982638/something_login_logo_oeorxu.svg"
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium text-white">
          something for everyone
        </h5>
        <p className="mb-4 text-base text-white">
          Multiplayer online game with a twist.
        </p>
        <button
          type="button"
          className=" inline-block rounded bg-violet-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
);
export default Projects;
