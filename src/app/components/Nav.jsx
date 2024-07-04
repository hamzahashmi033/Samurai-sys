"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    it: false,
    cyber: false,
    digital: false,
    about: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <>
      <nav className="2xl:max-w-[1728px] mx-auto text-white">
        <div className="flex items-center justify-between p-7">
          <div className="cursor-pointer">
            <a href="/">
              <Image src={"/nav_logo.png"} width={100} height={100} />
            </a>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="text-white bg-[#C92127] p-3 rounded lg:hidden"
            >
              Get A Quote
            </button>
            <button className="text-white ml-4" onClick={toggleMenu}>
              <FiMenu size={24} />
            </button>
          </div>
          <ul className="hidden lg:flex gap-5">
            <li
              className="relative cursor-pointer flex items-center"
              onClick={() => toggleDropdown("it")}
            >
              IT Infrastructure <RiArrowDropDownLine />
              {dropdownOpen.it && (
                <ul className="absolute top-full left-0 bg-black p-3">
                  <li className="p-2">Service 1</li>
                  <li className="p-2">Service 2</li>
                  <li className="p-2">Service 3</li>
                </ul>
              )}
            </li>
            <li
              className="relative cursor-pointer flex items-center"
              onClick={() => toggleDropdown("cyber")}
            >
              Cybersecurity <RiArrowDropDownLine />
              {dropdownOpen.cyber && (
                <ul className="absolute top-full left-0 bg-black p-3">
                  <li className="p-2">Service 1</li>
                  <li className="p-2">Service 2</li>
                  <li className="p-2">Service 3</li>
                </ul>
              )}
            </li>
            <li
              className="relative cursor-pointer flex items-center"
              onClick={() => toggleDropdown("digital")}
            >
              Digital Transformation <RiArrowDropDownLine />
              {dropdownOpen.digital && (
                <ul className="absolute top-full left-0 bg-black p-3">
                  <li className="p-2">Service 1</li>
                  <li className="p-2">Service 2</li>
                  <li className="p-2">Service 3</li>
                </ul>
              )}
            </li>
            <li
              className="relative cursor-pointer flex items-center"
              onClick={() => toggleDropdown("about")}
            >
              About Us <RiArrowDropDownLine />
              {dropdownOpen.about && (
                <ul className="absolute top-full left-0 bg-black p-3">
                  <li className="p-2">Our Story</li>
                  <li className="p-2">Team</li>
                  <li className="p-2">Careers</li>
                </ul>
              )}
            </li>
          </ul>
          <ul className="hidden lg:flex items-center gap-5">
            <div className="flex items-center">
              <div className="border  border-white w-[60px] h-px flex-grow ml-2 hidden sm:block md:hidden xl:block" />
              <li className="cursor-pointer ml-3">
                <FaFacebookF />
              </li>
              <li className="cursor-pointer text-red-500 mx-3">
                <FaLinkedinIn />
              </li>
              <li className="cursor-pointer mr-3">
                <FaTwitter />
              </li>
              <div className="border border-white w-[60px] h-px flex-grow ml-2 hidden sm:block md:hidden xl:block" />
            </div>
          </ul>
          <button
            type="button"
            className="hidden lg:block text-white bg-[#C92127] p-3 rounded"
          >
            Get A Quote
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden p-5 bg-black">
            <ul className="flex flex-col gap-5">
              <li
                className="cursor-pointer flex items-center"
                onClick={() => toggleDropdown("it")}
              >
                IT Infrastructure <RiArrowDropDownLine />
                {dropdownOpen.it && (
                  <ul className="mt-2 bg-black p-3">
                    <li className="p-2">Service 1</li>
                    <li className="p-2">Service 2</li>
                    <li className="p-2">Service 3</li>
                  </ul>
                )}
              </li>
              <li
                className="cursor-pointer flex items-center"
                onClick={() => toggleDropdown("cyber")}
              >
                Cybersecurity <RiArrowDropDownLine />
                {dropdownOpen.cyber && (
                  <ul className="mt-2 bg-black p-3">
                    <li className="p-2">Service 1</li>
                    <li className="p-2">Service 2</li>
                    <li className="p-2">Service 3</li>
                  </ul>
                )}
              </li>
              <li
                className="cursor-pointer flex items-center"
                onClick={() => toggleDropdown("digital")}
              >
                Digital Transformation <RiArrowDropDownLine />
                {dropdownOpen.digital && (
                  <ul className="mt-2 bg-black p-3">
                    <li className="p-2">Service 1</li>
                    <li className="p-2">Service 2</li>
                    <li className="p-2">Service 3</li>
                  </ul>
                )}
              </li>
              <li
                className="cursor-pointer flex items-center"
                onClick={() => toggleDropdown("about")}
              >
                About Us <RiArrowDropDownLine />
                {dropdownOpen.about && (
                  <ul className="mt-2 bg-black p-3">
                    <li className="p-2">Our Story</li>
                    <li className="p-2">Team</li>
                    <li className="p-2">Careers</li>
                  </ul>
                )}
              </li>

              <li className="cursor-pointer">
                <FaFacebookF />
              </li>
              <li className="cursor-pointer text-red-500">
                <FaLinkedinIn />
              </li>
              <li className="cursor-pointer">
                <FaTwitter />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
