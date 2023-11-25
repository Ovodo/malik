"use client";
import aw from "@/public/assets/aw.png";
import aw1 from "@/public/assets/aw1.png";
import aw2 from "@/public/assets/aw2.png";
import aw3 from "@/public/assets/aw3.png";
import aw4 from "@/public/assets/aw4.png";
import aw5 from "@/public/assets/aw5.png";
import aw6 from "@/public/assets/aw6.png";
import aw7 from "@/public/assets/aw7.png";
import aw8 from "@/public/assets/aw8.png";
import aw9 from "@/public/assets/aw9.png";
import aw11 from "@/public/assets/aw11.png";
import aw12 from "@/public/assets/aw12.png";
import aw15 from "@/public/assets/aw15.png";
import aw16 from "@/public/assets/aw16.png";
import gba from "@/public/assets/gba.png";
import Image from "next/image";
import useFonts from "@/hooks/useFonts";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  { img: aw7, link: "" },
  { img: aw9, link: "" },
  { img: aw11, link: "" },
  { img: aw1, link: "" },
  { img: aw12, link: "" },
  { img: aw4, link: "" },
  { img: aw16, link: "https://coren.gov.ng/" },
  { img: aw3, link: "https://www.iso.org/home.html" },
  { img: aw5, link: "" },
  { img: aw8, link: "" },
  { img: aw6, link: "" },
  { img: aw2, link: "" },
  { img: gba, link: "" },
  { img: aw, link: "https://www.cima.institute/" },
  { img: aw15, link: "https://www.msicertified.com/accreditation/" },
];
const ProfessionalA = () => {
  const { poppins, libre } = useFonts();
  return (
    <div
      id='certification'
      className='text-center overflow-clip  w-full  m-auto p-5 py-20 bg-white'
    >
      <h4
        style={libre.style}
        className='text-center text-[34px] mb-[83px] font-semibold'
      >
        Professional Association
      </h4>
      <div className='w-full min-h-max hide-scroll overflow-x-scroll'>
        <div
          // initial={{ x: "0%" }}
          // animate={{ x: "100%" }}
          // transition={{ repeatType: "mirror", type: "tween", duration: 15 }}
          className='flex lg:flex-wrap-reverse  min-w-max lg:min-w-full flex-row  justify-center'
        >
          {images.reverse().map((img, i) => (
            <div
              className='lg:w-[10vw] w-[80vw] min-h-[300px] mb-[34px] mx-2 relative shadow-[0_5px_5px_rgba(43,56,76,0.2)]  border-black lg:min-h-[10vw]'
              key={i.toString()}
            >
              <Link className='cursor-pointer' href={img.link}>
                <Image
                  src={img.img}
                  alt='cert'
                  fill
                  className=''
                  objectFit='contain'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalA;
