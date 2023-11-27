"use client";

import Image from "next/image";

import Hero from "@/public/assets/hero.png";
import HandA from "./components/HandA";
import AboutMe from "./components/AboutMe";
import ProfessionalA from "./components/ProffesionalA";
import ContactMe from "./components/Contact";
import Link from "next/link";
import useFonts from "@/hooks/useFonts";
import { motion } from "framer-motion";
const socialImages = [
  { img: "facebook", link: "https://facebook.com/malik.adaviriku" },
  {
    img: "linkedin",
    link: "https://www.linkedin.com/in/dr-abdullahi-malik-adaviriku/",
  },
  { img: "twitter", link: "https://x.com/Hispedigree?s=20" },
  { img: "instagram", link: "" },
];

const Socials = ({ src, link }: { src: string; link: string }) => {
  return (
    <Link
      href={link}
      className={` ${
        src.includes("facebook") ? "bg-header-color" : "bg-white"
      } hover:bg-pink-600 w-10 hover:cursor-pointer duration-300  h-10 p-[15px] rounded-[4px]`}
    >
      <div className='w-[16px] hover:scale-110 duration-500  h-[16px] relative'>
        <Image fill alt='socials' src={src} />
      </div>
    </Link>
  );
};

const nameVariants = {
  start: {
    x: -500,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export default function Home() {
  const { poppins, libre } = useFonts();
  return (
    <div className='w-full h-max '>
      <section
        id='hero'
        className='m-auto overflow-hidden w-full lg:py-10  flex flex-col  sm:pt-[20px] pt-[10px] gap-3 md:flex-row  lg:h-[802px]  relative  justify-between items-center'
      >
        <motion.div
          initial='start'
          animate='end'
          transition={{
            type: "tween",
            // duration: 4,
            staggerChildren: 0.7,
            delayChildren: 0.3,
          }}
          className='min-h-[700px]  w-full lg:max-w-max py-5 px-5   sm:h-[950px] lg:h-full lg:pl-[80px]  flex flex-col justify-between lg:justify-center  z-10  sm:ml-[32px]'
        >
          <motion.h4
            variants={nameVariants}
            style={libre.style}
            className=' w-full lg:mb-14 whitespace-nowrap items-end  font-medium text-[22px]  flex text-header-color  sm:text-[34px]  tracking-[0]'
          >
            Dr. Engr. Malik Abdullahi.{" "}
            <span className='text-[12px] sm:text-[18px] relative left-2 bottom-[5px] sm:bottom-[7px]'>
              FIMC, CMC
            </span>
          </motion.h4>
          <div className='lg:space-y-10  space-y-10'>
            <motion.p
              variants={nameVariants}
              style={libre.style}
              className=' mb-5 flex flex-col sm:w-[500px] space-y-2 lg:w-[645px] font-normal text-body-color text-[18px] leading-[24px] md:text-[18px] tracking-[0] md:leading-[24px]'
            >
              <span>Founder & CEO</span>
              <span>Unique Group, Inc</span>
              <span>Beverly Hills, CA, USA</span>
            </motion.p>
            <motion.div variants={nameVariants} className='flex space-x-4'>
              {socialImages.map((item, index: number) => {
                return (
                  <Socials
                    link={item.link}
                    src={`/assets/socials/${item.img}.svg`}
                    key={index.toString()}
                  />
                );
              })}
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className='absolute  top-[100px] sm:absolute  sm:top-[130px] right-0 lg:relative lg:right-0 lg:top-0 w-[251px] h-[367px] sm:w-[385.43px] sm:h-[561px]  lg:w-[482px]  lg:h-[802px]'
        >
          <Image
            fill
            priority
            // width={722}
            // height={600}
            // sizes='40vw'
            className='object-cover'
            style={{
              // width: "100%",
              // height: "auto",
              // objectFit: "contain",
              zIndex: "5",
            }}
            src={Hero}
            alt='hero'
            quality={100}
          />
          <div className='w-screen  h-full lg:w-[732px]   absolute bottom-0 right-[0px]  bg-maroon' />
        </motion.div>
      </section>

      <section className='mt-10 lg:mt-0'>
        <HandA />
      </section>
      <section className='overflow-hidden'>
        <AboutMe />
      </section>
      <section>
        <ProfessionalA />
      </section>
      <section className='bg-[#F6F5F5] p-2'>
        <div className='text-center '>
          <h2
            style={libre.style}
            className=' font-semibold  text-center text-[34px] py-5'
          >
            Interest
          </h2>
          <p style={poppins.style} className='lg:w-[59%] text-[18px]  mx-auto'>
            Politics: Aspirant for Senate House, 2019 Federal Republic of
            Nigeria, Community service and environmental protection programs.
          </p>
        </div>

        <ContactMe />
      </section>
    </div>
  );
}
