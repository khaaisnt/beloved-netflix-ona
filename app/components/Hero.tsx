import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import HeroImage from "/public/hero-pict.jpg";

export default function Hero() {
  return (
    <>
      <div
        className="relative h-[800px] bg-cover bg-top px-[40px] text-white"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="relative max-w-[600px] pt-[400px]">
          <h1 className="text-[44px] font-black" style={{ fontWeight: 2000 }}>
            How To Say Happy Birthday Before I Go Back To Malang
          </h1>

          <p className="py-[20px]">
            This is how Rakha express love. In the mean time you will understand
            how my brain works. As you see this, Rakha want to say Happy
            Birthday to his crush.
          </p>
          <p className="pb-[15px]">Click &apos;Play&apos; to see the details</p>
          <div className="flex gap-x-[10px]">
            <button className="py-2 px-5 flex bg-white rounded-[5px] text-black font-medium">
              <svg
                className="w-6 h-6 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                  clip-rule="evenodd"
                />
              </svg>
              Play
            </button>
            <button className="py-2 px-5 flex bg-white/40 rounded-[5px] text-white font-medium">
              <svg
                className="w-6 h-6 text-white pr-[3px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Info
            </button>
          </div>
        </div>
      </div>
      <div className="top-0 fixed w-full">
        <Navbar />
      </div>
    </>
  );
}
