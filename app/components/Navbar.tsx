"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/aw17.png";
import useFonts from "@/hooks/useFonts";

const listStyle: string =
  "text-[16px] min-h-max hover:scale-110  leading-[16px] list relative cursor-pointer hover:opacity- duration-200  flex flex-col items-center my-[14px] lg:mb-0 mt-[40px] lg:mt-0 md:text-[18px] lg:leading-[20px] text-[#132238] font-medium";

const Navbar = () => {
  // --------------------------------------------VARIABLES
  const [isOpen, setIsOpen] = useState(false);
  const { poppins } = useFonts();

  //-----------------------------------------------------------FUNCTIONS
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div
      style={poppins.style}
      className='relative    shadow-sm w-full shadow-slate-300 z-20   flex items-center lg:justify-around bg-white h-[12vh] lg:h-[12vh]'
    >
      <Link
        href={"/"}
        className='relative ml-5 lg:ml-0 w-[37px] h-[67px] lg:w-[37px] lg:h-[67px]'
      >
        <Image fill alt='logo' className='' src={Logo} />
      </Link>
      <ul
        className={`pl-5 w-[70vw] menu  ${
          !isOpen
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100 scale-100 z-10"
        }  h-[95vh] lg:h-full  duration-300 lg:translate-x-0  lg:opacity-100 transition-all ease-linear  lg:flex-row items-start justify-start lg:justify-between lg:items-center absolute lg:relative top-[6.5vh] lg:top-0 left-0 flex flex-col bg-white`}
      >
        <li className={listStyle}>
          <Link onClick={toggleMenu} href={"/certification"}>
            Certifications
          </Link>
        </li>
        <li className={listStyle}>
          <Link
            onClick={toggleMenu}
            className='text-center break-all'
            href={"/research"}
          >
            Research
          </Link>
        </li>
        <li className={listStyle}>
          <Link
            onClick={toggleMenu}
            className='text-center break-all'
            href={"/skill"}
          >
            Skillsets
          </Link>
        </li>
        <li className={listStyle}>
          <Link
            onClick={toggleMenu}
            className='text-center break-all'
            href={"/projects"}
          >
            Selected Projects
          </Link>
        </li>
        <Link
          style={poppins.style}
          href={"/#contact"}
          className='px-5 py-4 absolute lg:relative lg:hidden flex top-[60vh] lg:top-0  ml-[12px] lg:mr-[  14px] font-semibold text-[18px] tracking-[var(--header-letter-spacing)] [font-style:var(--header-font-style)] leading-[var(--header-line-height)] text-white bg-header-color rounded-md'
        >
          Contact
        </Link>
      </ul>
      <Link
        style={poppins.style}
        href={"/#contact"}
        className='px-5 py-4 absolute lg:relative lg:flex hidden top-[60vh] md:top-0  ml-[12px] md:mr-[  14px] font-semibold text-[18px] tracking-[var(--header-letter-spacing)] [font-style:var(--header-font-style)] leading-[var(--header-line-height)] text-white bg-header-color rounded-md'
      >
        Contact
      </Link>
      <div
        onClick={toggleMenu}
        className={`lg:hidden flex absolute right-2  items-center justifiy-center mr-2`}
      >
        {isOpen ? (
          <MdClose size={40} color={"#132238"} />
        ) : (
          <BiMenu size={40} color={"#132238"} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
