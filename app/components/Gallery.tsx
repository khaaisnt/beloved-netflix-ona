"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Import images
import Foto1 from "/public/gallery-1.jpg";
import Foto2 from "/public/gallery-2.jpg";
import Foto3 from "/public/gallery-3.jpg";
import Foto4 from "/public/gallery-4.jpg";
import Foto5 from "/public/gallery-5.jpg";

// Arrow component
function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabledClass = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Initialize Keen Slider with responsive breakpoints
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
      spacing: 7,
    },
    initial: 0,
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 5 }, // Show 1 image for mobile
      },
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: { perView: 3, spacing: 7 }, // Show 3 images for tablet
      },
      "(min-width: 1025px)": {
        slides: { perView: 6, spacing: 7 }, // Show 6 images for larger screens
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative bg-primaryBlack px-5 py-10 md:px-[50px] text-white">
      <div>
        <h3 className="font-semibold text-[20px] sm:text-[24px] mb-[5px]">
          Onaa Before Meet Me
        </h3>

        {/* Slider Container */}
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto1}
              alt="gallery-1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto2}
              alt="gallery-2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto3}
              alt="gallery-3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto4}
              alt="gallery-4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto5}
              alt="gallery-5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto1}
              alt="gallery-6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto1}
              alt="gallery-1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto2}
              alt="gallery-2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto3}
              alt="gallery-3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto4}
              alt="gallery-4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto5}
              alt="gallery-5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide h-[200px] sm:h-[150px]">
            <Image
              src={Foto1}
              alt="gallery-6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Arrow Navigation */}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
}
