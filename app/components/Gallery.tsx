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

// Arrow component (as explained above)
interface ArrowProps {
  left?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

const Arrow = ({ left, onClick, disabled }: ArrowProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`arrow ${left ? "left-0" : "right-0"} ${
      disabled ? "disabled" : ""
    } bg-white/40 hover:bg-white/30 rounded-[5px] px-4 py-2 text-white`}
    style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
  >
    {left ? "<" : ">"}
  </button>
);

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Initialize Keen Slider
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
      spacing: 10,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative bg-black px-[50px] py-[50px] text-white">
      <h3 className="font-semibold text-[24px] mb-[5px]">
        Onaa Before Meet Me
      </h3>

      {/* Slider Container */}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto1} alt="gallery-1" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto2} alt="gallery-2" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto3} alt="gallery-3" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto4} alt="gallery-4" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto5} alt="gallery-5" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto1} alt="gallery-6" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto1} alt="gallery-1" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto2} alt="gallery-2" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto3} alt="gallery-3" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto4} alt="gallery-4" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto5} alt="gallery-5" />
        </div>
        <div className="keen-slider__slide h-[150px]">
          <Image src={Foto1} alt="gallery-6" />
        </div>
      </div>

      {/* Arrow Navigation */}
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            disabled={currentSlide === 0}
          />
          <Arrow
            onClick={(e: any) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}
