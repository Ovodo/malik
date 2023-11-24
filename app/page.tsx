import Image from "next/image";

import Hero from "@/public/assets/hero.png";
import HandA from "./components/HandA";
import AboutMe from "./components/AboutMe";
import ProfessionalA from "./components/ProffesionalA";
import ContactMe from "./components/Contact";
import Link from "next/link";
import useFonts from "@/hooks/useFonts";

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
      } hover:bg-pink-600 w-12 hover:cursor-pointer duration-300  h-12 p-[15px] rounded-[4px]`}
    >
      <div className='w-[18px] hover:scale-110 duration-500  h-[18px] relative'>
        <Image fill alt='socials' src={src} />
      </div>
    </Link>
  );
};

export default function Home() {
  const { poppins } = useFonts();
  return (
    <div className='w-full h-max '>
      <section
        id='hero'
        className='m-auto w-full lg:py-10 pb-0  flex flex-col  sm:pt-[20px] pt-[10px] gap-3 md:flex-row  lg:h-[802px]  relative  justify-between items-center'
      >
        <div className='min-h-[700px] sm:h-[950px] lg:h-full  lg:max-h-max flex flex-col justify-between lg:justify-center  z-10 ml-5 sm:ml-[32px]'>
          <h4
            style={poppins.style}
            className=' w-full lg:mb-10  font-semibold flex flex-col text-header-color text-[32px] sm:text-[58px] leading-[42px] sm:leading-[52px] lg:text-[48px] tracking-[0] lg:leading-[56px]'
          >
            Dr. Eng. Malik Abdullahi{" "}
            <span className='text-[20px] sm:text-[32px] '>FIMC, CMC</span>
          </h4>
          <div className='lg:space-y-10 space-y-6'>
            <p className=" mb-5 flex flex-col sm:w-[500px] [font-family:'Poppins-Regular',Helvetica] lg:w-[645px] font-normal text-body-color text-[32px] leading-[48px] md:text-[36px] tracking-[0] md:leading-[54px]">
              <span>Founder & CEO</span>
              <span>Unique Group</span>
              <span>Beverly Hills, CA, USA</span>
            </p>
            <div className='flex space-x-4'>
              {socialImages.map((item, index: number) => {
                return (
                  <Socials
                    link={item.link}
                    src={`/assets/socials/${item.img}.svg`}
                    key={index.toString()}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='absolute  top-[100px] sm:absolute  sm:top-[130px] right-0 lg:relative lg:right-0 lg:top-0 w-[251px] h-[367px] sm:w-[385.43px] sm:h-[561px]  lg:w-[482px]  lg:h-[802px]'>
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
          <div className='w-[99vw]  h-full lg:w-[732px]  absolute bottom-0 right-[0px]  bg-[#8A232A]' />
        </div>
      </section>

      <section className='mt-10'>
        <HandA />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <ProfessionalA />
      </section>
      <section className='bg-[#F6F5F5] p-2'>
        <div className='text-center '>
          <h2 className=' font-semibold text-[52px] py-10'>Interest</h2>
          <p className='w-[49%]  mx-auto break-all'>
            Politics: Aspirant for Senate House, 2019 Federal Republic of
            Nigeria, Community service and environmental protection programs.
          </p>
        </div>

        <ContactMe />
      </section>
    </div>
  );
}
