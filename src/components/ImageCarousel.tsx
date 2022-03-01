import React, { useState, useEffect } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import Image from "next/image";

const featuredProducts = [
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",
];

let slideInterval: NodeJS.Timer;
export default function Slider() {
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
    <div className="slider">
      <div className="slider__container">
        <div className="slider__container__left">
          <div className="slider__container__left__arrow">
            <AiOutlineVerticalLeft
              className="slider__container__left__arrow__icon"
              onClick={() => {
                setCurrentIndex((currentIndex) => {
                  if (currentIndex === 0) {
                    return featuredProducts.length - 1;
                  }
                  return currentIndex - 1;
                });
              }}
            />
          </div>
        </div>
        <div className="slider__container__center">
          <div className="slider__container__center__slide">
            <Image
              src={featuredProducts[currentIndex]}
              width={300}
              height={300}
              alt="featured product"
            />
          </div>
        </div>
        <div className="slider__container__right">
          <div className="slider__container__right__arrow">
            <AiOutlineVerticalRight
              className="slider__container__right__arrow__icon"
              onClick={() => {
                setCurrentIndex((currentIndex) => {
                  if (currentIndex === featuredProducts.length - 1) {
                    return 0;
                  }
                  return currentIndex + 1;
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
