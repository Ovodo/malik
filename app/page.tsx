import Image from "next/image";

import Hero from "@/public/assets/hero.png";
import HandA from "./components/HandA";
import AboutMe from "./components/AboutMe";
import ProfessionalA from "./components/ProffesionalA";
import ContactMe from "./components/Contact";
import Link from "next/link";
import useFonts from "@/hooks/useFonts";

const socialImages = [
  { img: "facebook", link: "" },
  { img: "web", link: "" },
  { img: "instagram", link: "" },
  { img: "linkedin", link: "" },
];

const Socials = ({ src }: { src: string }) => {
  return (
    <div
      className={` ${
        src.includes("facebook") ? "bg-header-color" : "bg-white"
      } w-12 h-12 p-[15px] rounded-[4px]`}
    >
      <div className='w-[18px] cursor-pointer h-[18px] relative'>
        <Image fill alt='socials' src={src} />
      </div>
    </div>
  );
};

export default function Home() {
  const { poppins } = useFonts();
  return (
    <div className='w-full h-max'>
      <section
        id='hero'
        className='m-auto w-full lg:py-10 pb-12  flex flex-col  pt-[30px] gap-3 md:flex-row  lg:h-[802px]  relative  justify-between items-center'
      >
        <div className='h-[650px] sm:h-[900px] lg:h-full  lg:max-h-max flex flex-col justify-between lg:justify-center  z-10 ml-5 sm:ml-[32px]'>
          <h4
            style={poppins.style}
            className=' w-full  font-semibold text-header-color text-[32px] sm:text-[58px] leading-[56px] lg:text-[51px] tracking-[0] lg:leading-[70px]'
          >
            Dr. Eng. Malik Abdullahi.
          </h4>
          <div className='lg:space-y-10 space-y-6'>
            <p className=" mb-5 sm:w-[500px] [font-family:'Poppins-Regular',Helvetica] lg:w-[645px] font-normal text-body-color text-[26px] leading-[28.1px] md:text-[36px] tracking-[0] md:leading-[54px]">
              Founder Unique Group, Inc Beverly Hills, CA, USA
            </p>
            <div className='flex space-x-4'>
              {socialImages.map((item, index: number) => {
                return (
                  <Socials
                    src={`/assets/socials/${item.img}.svg`}
                    key={index.toString()}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='absolute top-[120px] sm:absolute  sm:top-[120px] right-0 lg:relative lg:right-0 lg:top-0 w-[251px] h-[367px] sm:w-[385.43px] sm:h-[561px]  lg:w-[482px]  lg:h-[802px]'>
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
          <div className='w-[377px] h-[377px] sm:w-[527px] sm:h-[527px] lg:w-[752px]  absolute bottom-0 right-[0px]   lg:h-[752px] rounded-full bg-[#8A232A]' />
        </div>
      </section>

      <section>
        <HandA />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <ProfessionalA />
      </section>
      <section className='bg-[#F6F5F5] p-2'>
        <div className='text-center'>
          <h2 className=' font-bold text-[52px] py-10'>Interest</h2>
          <p>
            <strong>Politics Experience:</strong>
            Aspirant for Senate House, 2019 Federal Republic of Nigeria,
            Community service and environmental protection programs.
          </p>
        </div>

        <ContactMe />
      </section>
    </div>
  );
}
