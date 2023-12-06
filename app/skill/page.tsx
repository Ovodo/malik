import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import React from "react";

const skills = [
  "Business Strategy",
  "Stakeholder Relation",
  "Complex Problem Solving",
  "Project Management",
  "Leadership",
  "Information Technology",
  "Task Priortization",
  "Research & Development",
  "Time Management",
  "Decision Making",
  "Resource Management",
];

const Education = [
  {
    title: "Post-Doctoral, MSC Information Technology, Anticipated Feb. 2024",
    desc: "Master's (Human Computer Interaction)",
  },
  {
    title: "Master’s Oil and Gas Management, 2015-2016",
    desc: "Master's (Human Computer Interaction)",
  },
  {
    title: "Doctor of Business Administration, 2017-2022",
    desc: "Master's (Human Computer Interaction)",
  },
  {
    title: "Bachelor of Chemical Engineering, 1996 -2002",
    desc: "Master's (Human Computer Interaction)",
  },
];

const Page = () => {
  const { poppins, libre } = useFonts();
  return (
    <div className='bg-white min-h-max w-full '>
      <h2
        style={libre.style}
        className='text-center mb-[50px] mt-[35px] lg:mt-[56px] md:mb-[50px]  font-semibold text-[34px]'
      >
        Skill
      </h2>
      <div className=' sm:grid sm:grid-cols-2 lg:grid-cols-4'>
        {skills.map((item, index) => (
          <p
            key={index.toString()}
            className=' px-4 hover:scale-110 duration-300  py-2 shadow-[0_3px_3px_rgba(0,0,0,0.25)] text-center w-[75%] rounded-md mb-[50px] mx-auto'
          >
            {item}
          </p>
        ))}
      </div>
      <h4
        style={libre.style}
        className='text-[22px] leading-[22px] mt-[52px] text-center w-full'
      >
        Language
      </h4>
      <p className='text-body-color mb-[62px] text-[20px] leading-[23.46px] w-full mx-auto mt-6 text-center font-medium'>
        English Language
      </p>
      <section className='bg-header-color sm:px-[99px]  py-[67px] sm:py-[72] lg:py-[99px] px-[20px] mt-[32px] w-full'>
        <h2
          style={libre.style}
          className='text-center text-white lg:mb-[100px] mb-[56px]  leading-[56px] font-semibold text-[34px]'
        >
          Education
        </h2>
        <div className='lg:grid lg:grid-cols-2'>
          {Education.map((item, index) => (
            <div key={index.toString()} className='mb-[50px] bord px-[20px]'>
              <h3
                style={poppins.style}
                className='text-indicatot w-[80%]  mb-[20px] text-[22px] leading-[22px]'
              >
                {item.title}
              </h3>
              {/* <p className='text-white w-[50%] font-normal text-[20px] leading-[30px]'>
                {item.desc}
              </p> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
