"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "/public/logo-netflix.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-10 transition duration-500 ${
          isScrolled ? "bg-black" : "bg-gradient-to-b from-black/70 to-black/0"
        } text-white`}
      >
        <div className="flex justify-between px-[40px] py-[25px]">
          {/* logo & nav */}
          <div className="flex ">
            <Image src={Logo} alt="logo-netflix" className="mr-[40px]" />
            <ul className="flex gap-x-[15px] font-medium">
              <li className="hover:text-slate-200 duration-200">Homepage</li>
              <li className="hover:text-slate-200 duration-200">Series</li>
              <li className="hover:text-slate-200 duration-200">Movies</li>
              <li className="hover:text-slate-200 duration-200">
                New and Popular
              </li>
              <li className="hover:text-slate-200 duration-200">My List</li>
            </ul>
          </div>
          {/* search */}
          <div className="flex gap-x-[15px]">
            <svg
              className="w-6 h-6 text-white"
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
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            <h5 className="uppercase text-[12px] flex items-end font-bold">
              adult
            </h5>
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
