import React, { useState, useEffect } from "react";
import { featuredProducts } from "../database/database";

let slideInterval: NodeJS.Timer;

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    slideInterval = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        if (currentIndex === featuredProducts.length - 1) {
          return 0;
        }
        return currentIndex + 1;
      });
    }, 4000);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(slideInterval);
    };
  }, []);
  return (
    <section className="container mx-auto grid items-center justify-evenly rounded-3xl bg-indigo-500 bg-opacity-30 p-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <button
            className="hidden h-16 w-16 rounded-full bg-indigo-50 p-5 transition duration-200 hover:bg-white lg:block"
            onClick={() => {
              setCurrentIndex((currentIndex) => {
                if (currentIndex === 0) {
                  return featuredProducts.length - 1;
                }
                return currentIndex - 1;
              });
            }}
          >
            <svg
              className="text-indigo-500 hover:text-indigo-500"
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
            <h2 className="font-heading mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
              Check out my Blog!
            </h2>
            <p className="mb-8 text-base leading-relaxed text-indigo-50 lg:text-xl lg:leading-relaxed">
              Checkout the latest news at my blog joshuasstories.tech. Keep up
              to date with me.
            </p>
            <a
              className="inline-block rounded border border-white bg-white px-5 py-3 text-sm font-semibold text-indigo-500 transition duration-200 hover:bg-indigo-50"
              href={featuredProducts[currentIndex]?.toString()}
            >
              Learn More
            </a>
          </div>
          <button
            className="hidden h-16 w-16 rounded-full bg-indigo-50 p-5 transition duration-200 hover:bg-white lg:block"
            onClick={() => {
              setCurrentIndex((currentIndex) => {
                if (currentIndex === featuredProducts.length - 1) {
                  return 0;
                }
                return currentIndex + 1;
              });
            }}
          >
            <svg
              className="text-indigo-500 hover:text-indigo-500"
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
            <button className="mr-2 h-3 w-3 rounded-full border border-indigo-50 bg-indigo-50"></button>
            <button className="mr-2 h-3 w-3 rounded-full border border-indigo-50"></button>
            <button className="mr-2 h-3 w-3 rounded-full border border-indigo-50"></button>
            <button className="h-3 w-3 rounded-full border border-indigo-50"></button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ImageCarousel;
