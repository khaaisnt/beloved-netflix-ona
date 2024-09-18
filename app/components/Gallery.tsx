"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// Add image
import Foto1 from "/public/gallery-1.jpg";
import Foto2 from "/public/gallery-2.jpg";
import Foto3 from "/public/gallery-3.jpg";
import Foto4 from "/public/gallery-4.jpg";
import Foto5 from "/public/gallery-5.jpg";

export default function Gallery() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
      spacing: 10,
    },
  });

  return (
    <>
      <div className="bg-black px-[50px] py-[50px] text-white">
        <h3 className="font-semibold text-[24px] mb-[25px]">
          Onaa Before Meet Me
        </h3>
        <div ref={ref} className="keen-slider">
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
          <div className="keen-slider__slide h-[150px]">7</div>
          <div className="keen-slider__slide h-[150px]">8</div>
          <div className="keen-slider__slide h-[150px]">9</div>
          <div className="keen-slider__slide h-[150px]">10</div>
        </div>
      </div>
    </>
  );
}
