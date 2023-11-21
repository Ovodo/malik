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
import aw13 from "@/public/assets/aw13.png";
import aw14 from "@/public/assets/aw14.png";
import aw15 from "@/public/assets/aw15.png";
import aw16 from "@/public/assets/aw16.png";
import gba from "@/public/assets/gba.png";
import Image from "next/image";

const images = [
  aw7,
  aw9,
  aw11,
  aw1,
  aw12,
  aw4,
  aw3,
  aw5,
  aw8,
  aw16,
  aw6,
  aw2,
  gba,
  aw,
  // aw13,
  // aw14,
  aw15,
];
const ProfessionalA = () => {
  return (
    <div
      id='certification'
      className='text-center overflow-hidden w-full  m-auto p-5 py-20 bg-white'
    >
      <h4 className='text-center text-[48px] mb-[83px] leading-[56px] font-semibold'>
        Professional Association
      </h4>

      <div className='flex flex-wrap-reverse  justify-center'>
        {images.reverse().map((img, i) => (
          <div
            className='w-[10vw]  mb-[34px] mx-2 relative shadow-[0_5px_5px_rgba(43,56,76,0.2)]  border-black h-[10vw]'
            key={i.toString()}
          >
            <Image src={img} alt='cert' fill className='' objectFit='contain' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalA;
