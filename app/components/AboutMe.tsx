"use client";
import Image from "next/image";
import Hero from "@/public/assets/personal/agbada.png";
// import Hero from "@/public/assets/hero3.png";
import useFonts from "@/hooks/useFonts";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const about =
  "Dr. Malik is a chartered consultant, member of the highest body of the International Consultancy Group (CMC Global), and a Distinguished Fellow at the National level with over fifteen years of leadership experience. He is a member of the IEEE and Government Blockchain Association, promoting, researching, and creating Blockchain technology-based solutions to problems faced by government entities. Furthermore, Dr. Malik has developed and implemented a win-win project partnership with the private, state, and national government agencies that produce a safer environment and sustainable development, accomplishing a twenty-five percent return on government investment and an average forty percent reduction in government operating expenses. In academia, Dr. Malik serves on the editorial board of the International Journal of Public Administration and Business Research, reviewing the works of others and advancing the management field. Dr. Malik is one of the exhibitors at the 31st Engineering Assembly in Nigeria (a gathering of over 10,000 industry experts, policymakers, professors, and multinationals), entrenching and strengthening practitioners’ code of conduct for resilient engineering practice in Nigeria. Dr. Malik has presented a research paper on enterprise Blockchain-based solutions that foster business process improvement for tax collection that will benefit national governments worldwide. Dr. Malik has granted an interview on Punch Newspaper and bears his expert opinion on issues that border on sensitive issues on the national economy.";

const AboutMe = () => {
  const { poppins, libre } = useFonts();
  const [truncate, setTruncate] = useState(true);
  const { ref, inView } = useInView({ threshold: 0 });
  const animation = useAnimation();
  const animationImg = useAnimation();

  useEffect(() => {
    console.log("inView", inView);

    if (!inView) {
      animation.start({
        x: -700,
        opacity: 0,
      });
      animationImg.start({
        x: 700,
        height: 0,
        opacity: 0,
      });
    } else {
      animation.start({
        x: 0,
        opacity: 1,
      });
      animationImg.start({
        x: 0,
        height: 600,
        opacity: 1,
      });
    }
  }, [inView, animation]);

  return (
    <section
      ref={ref}
      id='about-me'
      className=' w-full  relative lg:left-[5%] h-full space-y-10  mx-auto flex flex-col justify-around items-center lg:justify-center lg:items-center lg:flex-row-reverse  py-10  lg:px-10'
    >
      <motion.div
        animate={animationImg}
        transition={{ type: "tween", duration: 1.5 }}
        className='relative min-h-[600px]   w-[50%]'
      >
        <Image className='object-contain' fill src={Hero} alt='' />
      </motion.div>

      <motion.div
        animate={animation}
        transition={{ type: "tween", duration: 1, delay: 0.5 }}
        className='lg:w-[60%]  relative bg-white bg-opacity-30 w-[80%] rounded-sm lg:p-8   p-8'
      >
        <h4
          style={poppins.style}
          className=' font-semibold text-center text-[22px] leading-[48px] mb-5'
        >
          About Me
        </h4>
        <div
          style={poppins.style}
          className={` text-[14px] duration-1000 ease-linear ${
            truncate ? "min-h-[300px]" : "min-h-[max]"
          }  relative duration-300 space-y-7 transition-all sm:text-[14px] leading-[24px] w-full`}
        >
          <p>{about.slice(0, 215)}</p>
          <p>{about.slice(215, 399)}</p>
          <p>
            {truncate
              ? about.slice(399, 600).concat("...")
              : about.slice(399, 743)}
          </p>
          {!truncate && (
            <>
              <p>{about.slice(743, 1219)}</p>
              <p>{about.slice(1219, about.length)}</p>
            </>
          )}
        </div>
        <div className='absolute bottom-1 flex  left-13  space-x-3'>
          <p
            onClick={() => setTruncate(!truncate)}
            style={poppins.style}
            className='font-medium  max-w-max hover:cursor-pointer hover:underline text-[14px]'
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
      </motion.div>
    </section>
  );
};
export default AboutMe;
