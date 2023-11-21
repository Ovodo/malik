import Image from "next/image";
import Hero from "@/public/assets/hero2.png";
import useFonts from "@/hooks/useFonts";

const AboutMe = () => {
  const { poppins } = useFonts();
  return (
    <section
      id='about-me'
      className=' w-full  mx-auto flex flex-col justify-around items-center lg:flex-row py-10  lg:px-10'
    >
      <Image src={Hero} alt='' />

      <div className='lg:w-1/2 w-full  p-6'>
        <h4
          style={poppins.style}
          className=' font-semibold text-center text-[52px] leading-[56px] mb-5'
        >
          About Me
        </h4>
        <p className=' text-[20px] sm:text-[26px] leading-[30px] w-full'>
          Dr. Malik is a chartered consultant, member of the highest body of the
          International Consultancy Group (CMC Global), and a Distinguished
          Fellow at the National level with over fifteen years of leadership
          experience. He is a member of the IEEE and Government Blockchain
          Association, promoting, researching, and creating Blockchain
          technology-based solutions to problems faced by government entities.
          Furthermore, Dr. Malik has developed and implemented a win-win project
          partnership with the private, state, and national government agencies
          that produce a safer environment and sustainable development,
          accomplishing a twenty-five percent return on government.{" "}
        </p>
        {/* <button className='font-bold capitalize mt-20 w-full text-end'>
          Read more
        </button> */}
      </div>
    </section>
  );
};
export default AboutMe;
