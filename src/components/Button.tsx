const Button = () => {
  return (
    <div className=" -mb-10 mt-5 grid items-center justify-center p-3">
      <button
        type="button"
        className=" grid grid-flow-col-dense justify-end rounded-3xl border-2 border-t-2
                       border-double border-indigo-600 border-t-indigo-600  border-opacity-90 bg-black/20 px-3 py-2 text-sm font-normal uppercase leading-normal text-gray-100 shadow-md
                      shadow-indigo-600 outline-2 outline-offset-2 outline-black brightness-125 backdrop-blur-sm transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-500 active:shadow-lg"
      >
        Learn More
      </button>
    </div>
  );
};

export default Button;
