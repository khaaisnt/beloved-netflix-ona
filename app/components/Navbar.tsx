"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "/public/logo-netflix.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-10 transition duration-500 ${
          isScrolled
            ? "bg-primaryBlack"
            : "bg-gradient-to-b from-black/70 to-black/0"
        } text-white`}
      >
        <div className="flex justify-between px-6 md:px-[50px] py-[20px] md:py-[25px] items-center">
          <div className="flex">
            {/* Logo */}
            <Image src={Logo} alt="logo-netflix" className="mr-[40px]" />
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-x-[15px] text-[14px] items-center">
              <li className="text-white font-medium duration-200">Homepage</li>
              <li className="text-white hover:text-gray-300 duration-200">
                Series
              </li>
              <li className="text-white hover:text-gray-300 duration-200">
                Movies
              </li>
              <li className="text-white hover:text-gray-300 duration-200">
                New and Popular
              </li>
              <li className="text-white hover:text-gray-300 duration-200">
                My List
              </li>
            </ul>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12" // Close icon when menu is open
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when menu is closed
                  }
                />
              </svg>
            </button>
          </div>

          {/* Search and User Icons */}
          <div className="hidden md:flex gap-x-[15px]">
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
                strokeLinecap="round"
                strokeWidth="2"
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primaryBlack text-white py-4 px-6">
            <ul className="space-y-4 text-[14px]">
              <li className="text-white font-medium duration-200">Homepage</li>
              <li className="text-white hover:text-gray-300 duration-200">
                Series
              </li>
              <li className="text-white hover:text-gray-300 duration-200">
                Movies
              </li>
              <li className="text-white hover:text-gray-300 duration-200">
                New and Popular
              </li>
              <li className="text-white hover:text-gray-300 duration-200">
                My List
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
