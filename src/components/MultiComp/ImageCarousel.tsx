import React, { useState, useEffect } from "react";
import { featuredProducts } from "../../database/database";

let slideInterval: any;

const ImageCarousel = () =>
{
  const [ currentIndex, setCurrentIndex ] = useState( 0 );

  useEffect( () =>
  {
    slideInterval = setInterval( () =>
    {
      setCurrentIndex( ( currentIndex ) =>
      {
        if ( currentIndex === featuredProducts.length - 1 )
        {
          return 0;
        }
        return currentIndex + 1;
      } );
    }, 4000 );
  }, [] );

  useEffect( () =>
  {
    return () =>
    {
      clearInterval( slideInterval );
    };
  }, [] );
  return (
    <section className="container mx-auto grid items-center justify-center  rounded-3xl bg-teal-500 bg-opacity-30 py-24 px-48 brightness-125">
      <div className="flex flex-wrap items-center">
        <button
          className="hidden h-16 w-16 rounded-full bg-indigo-600 p-5 transition duration-200 hover:bg-indigo-700 lg:block"
          onClick={ () =>
          {
            setCurrentIndex( ( currentIndex ) =>
            {
              if ( currentIndex === 0 )
              {
                return featuredProducts.length - 1;
              }
              return currentIndex - 1;
            } );
          } }
        >
          <svg
            className="text-indigo-400 hover:text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-heading mb-4 text-3xl font-extrabold leading-tight text-gray-200 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
            Check out my Blog!
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-indigo-500 lg:text-2xl lg:leading-relaxed">
            Checkout the latest news at my blog joshuasstories.tech. Keep up to
            date with me.
          </p>
          <a
            className="inline-block rounded border border-gray-200 bg-indigo-600 px-5 py-3 text-sm font-semibold text-gray-200 transition duration-200 hover:bg-indigo-700"
            href={ featuredProducts[ currentIndex ]?.toString() }
          >
            Learn More
          </a>
        </div>
        <button
          className="hidden h-16 w-16 rounded-full bg-indigo-600 hover:text-indigo-500 hover:bg-indigo-700 p-5 transition duration-200  lg:block"
          onClick={ () =>
          {
            setCurrentIndex( ( currentIndex ) =>
            {
              if ( currentIndex === featuredProducts.length - 1 )
              {
                return 0;
              }
              return currentIndex + 1;
            } );
          } }
        >
          <svg
            className="text-indigo-400 hover:text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
        <div className="w-full text-center">
          <button className="mr-2 h-3 w-3 rounded-full border border-indigo-500 bg-indigo-500"></button>
          <button className="mr-2 h-3 w-3 rounded-full border border-indigo-500"></button>
          <button className="mr-2 h-3 w-3 rounded-full border border-indigo-500"></button>
          <button className="h-3 w-3 rounded-full border border-indigo-500"></button>
        </div>
      </div>
    </section>
  );
};
export default ImageCarousel;
