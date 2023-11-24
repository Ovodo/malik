"use client";
import Image from "next/image";
import Hero from "@/public/assets/personal/agbada.png";
// import Hero from "@/public/assets/hero3.png";
import useFonts from "@/hooks/useFonts";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const about =
  "Dr. Malik is a chartered consultant, member of the highest body of the International Consultancy Group (CMC Global), and a Distinguished Fellow at the National level with over fifteen years of leadership experience. He is a member of the IEEE and Government Blockchain Association, promoting, researching, and creating Blockchain technology-based solutions to problems faced by government entities. Furthermore, Dr. Malik has developed and implemented a win-win project partnership with the private, state, and national government agencies that produce a safer environment and sustainable development, accomplishing a twenty-five percent return on government investment and an average forty percent reduction in government operating expenses. In academia, Dr. Malik serves on the editorial board of the International Journal of Public Administration and Business Research, reviewing the works of others and advancing the management field. Dr. Malik is one of the exhibitors at the 31st Engineering Assembly in Nigeria (a gathering of over 10,000 industry experts, policymakers, professors, and multinationals), entrenching and strengthening practitioners’ code of conduct for resilient engineering practice in Nigeria. Dr. Malik has presented a research paper on enterprise Blockchain-based solutions that foster business process improvement for tax collection that will benefit national governments worldwide. Dr. Malik has granted an interview on Punch Newspaper and bears his expert opinion on issues that border on sensitive issues on the national economy.";

const AboutMe = () => {
  const { poppins } = useFonts();
  const [truncate, setTruncate] = useState(true);

  return (
    <section
      id='about-me'
      className=' w-full relative h-full  mx-auto flex flex-col justify-around items-center lg:items-start lg:flex-row py-10  lg:px-10'
    >
      <div className='relative min-h-[600px] w-[50%]'>
        <Image className='object-contain' fill src={Hero} alt='' />
      </div>

      <div className='lg:w-[50%]  w-full  p-6'>
        <h4
          style={poppins.style}
          className=' font-semibold text-center text-[52px] leading-[56px] mb-5'
        >
          About Me
        </h4>
        <p className=' text-[20px] duration-1000 transition-all sm:text-[22px] leading-[30px] w-full'>
          {truncate ? about.slice(0, 670).concat("...") : about}
        </p>
        <div className='flex absolute bottom-4 right-6  self-end items-center space-x-3'>
          <p
            style={poppins.style}
            className='font-semibold text-[22px] leading-[22px]'
          >
            {truncate ? "Read more... " : "Read less"}
          </p>
          <button
            className={`${!truncate ? "rotate-180" : "rotate-0"}`}
            onClick={() => setTruncate(!truncate)}
          >
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
