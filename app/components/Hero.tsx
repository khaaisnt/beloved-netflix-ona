"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import HeroImage from "/public/hero-pict.jpg";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[850px] bg-cover bg-top px-[20px] sm:px-[30px] md:px-[50px] text-white"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-primaryBlack/20"></div>

        {/* Content */}
        <div className="relative max-w-[600px] pt-[210px] sm:pt-[190px] md:pt-[300px] lg:pt-[380px] z-10">
          <h1
            className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-black"
            style={{ fontWeight: 750 }}
          >
            How To Say I Love You Before I Go To Jakarta
          </h1>

          <p className="hidden md:block py-[10px] sm:py-[15px] md:py-[20px] max-w-[550px] text-[14px] sm:text-[16px] md:text-[18px]">
            This is how Rakha express love. In the meantime, you will understand
            how my brain works. As you see this, Rakha wants to say I Love You
            to Onaa.
          </p>
          <p className="pb-[10px] font-semibold sm:pb-[12px] md:pb-[15px] text-[12px] sm:text-[14px] md:text-[16px]">
            Click &apos;Play&apos; to see the details
          </p>

          <div className="flex gap-x-[10px]">
            {/* Play Button */}
            <button
              onClick={toggleModal}
              className="py-2 px-4 sm:px-5 flex animate-pulse bg-white hover:bg-white/80 duration-200 rounded-[5px] text-primaryBlack font-medium text-[12px] sm:text-[14px]"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-primaryBlack"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                  clipRule="evenodd"
                />
              </svg>
              Play
            </button>

            {/* Info Button */}
            <button className="py-2 px-4 sm:px-5 flex bg-white/40 hover:bg-white/30 rounded-[5px] duration-200 text-white font-medium text-[12px] sm:text-[14px]">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white pr-[3px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Info
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondBlack bg-opacity-50">
            <div
              data-aos="zoom-in"
              className="bg-secondBlack rounded-md overflow-hidden max-w-[95%] sm:max-w-[800px] w-full text-white"
            >
              <div
                className="relative h-[200px] sm:h-[300px] md:h-[400px] bg-cover bg-top"
                style={{ backgroundImage: `url(${HeroImage.src})` }}
              >
                <button onClick={toggleModal}>
                  <svg
                    className="w-8 h-8 text-white justify-end absolute top-5 right-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-[15px] sm:p-[20px] max-h-[150px] sm:max-h-[230px] overflow-y-auto text-[12px] sm:text-[14px] md:text-[16px]">
                <h2 className="text-[20px] sm:text-[24px] font-bold">
                  How To Say I Love You Before I Go To Jakarta
                </h2>
                <h5 className="text-[14px] sm:text-[16px] my-4">Hi! Onaa</h5>
                <p className="mb-4">
                  I&apos;ve been thinking a lot about how much you mean to me,
                  and I just want to tell you how deeply I care for you. You are
                  such an important part of my life, and every moment with you
                  feels special. I love how you always bring joy, laughter, and
                  comfort to my days. Being with you feels like home, and I’m so
                  thankful to have you by my side.
                </p>
                <p className="mb-4">
                  I love you more than words can express. Every time I think of
                  you, my heart fills with happiness. I can&apos;t wait to make
                  more beautiful memories together, to support each other, and
                  to grow side by side. You are my everything, and I will always
                  cherish and love you with all my heart.
                </p>
                <p className="mb-4 font-semibold">
                  Thank you for coming into my life, I will always stay here for
                  you and you and you and you.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navbar */}
      <div className="top-0 absolute w-full">
        <Navbar />
      </div>
    </>
  );
}
