import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import React from "react";
import Cert from "@/public/assets/cert.png";

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

const cert = [
  {
    title: "CMS",
    desc: " Certified Management Specialist (CMS) with Distinction in Time Management",
  },
  {
    title: "MANAGEMENT",
    desc: "Certified Management Consultant",
  },
  {
    title: "MANAGEMENT",
    desc: "Licensed Management Consultant",
  },
  {
    title: "COREN",
    desc: "Licensed COREN Engineer",
  },
  {
    title: "ISO",
    desc: "Certified ISO 20700 Consultant",
  },
  {
    title: "CONSULTANT",
    desc: "Certified Chartered Management Consultant",
  },
];

const CerificateCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className='flex rounded-[10px] my-[30px] p-[32px] w-[312px] h-[350px] shadow-[0_5px_5px_rgba(43,56,76,0.2)]  flex-col items-start'>
      <div className='relative w-[70px] mb-[32px] h-[70px] bg-[#ddc85d] rounded-[5px]'>
        <Image alt='cert' src={Cert} width={60} height={60} />
      </div>
      <div className=''>
        <h4 className='text-[28px] mb-[12px] leading-[28px] text-indicatot font-semibold'>
          {title}
        </h4>
        <div className='w-[200px] h-[150px]'>
          <p className=" w-[200px] [font-family:'Work_Sans-Regular',Helvetica] font-normal text-header-color text-[24px] tracking-[0] leading-[30px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const { poppins } = useFonts();
  return (
    <div className='bg-white min-h-max w-full '>
      <h2
        style={poppins.style}
        className='py-10 text-center mb-[50px] md:mb-[50px] leading-[56px] font-semibold text-[52px]'
      >
        Skill
      </h2>
      <div className=' sm:grid sm:grid-cols-2 lg:grid-cols-4'>
        {skills.map((item, index) => (
          <p
            key={index.toString()}
            className=' px-4  py-2 shadow-[0_3px_3px_rgba(0,0,0,0.25)] text-center w-[75%] rounded-md mb-[50px] mx-auto'
          >
            {item}
          </p>
        ))}
      </div>
      <h4
        style={poppins.style}
        className='text-[22px] leading-[22px] text-center w-full'
      >
        Language
      </h4>
      <p className='text-body-color text-[20px] leading-[23.46px] w-full mx-auto mt-6 text-center font-medium'>
        English Language
      </p>
      <section className='bg-header-color sm:px-[99px]  py-[67px] px-[20px] mt-[32px] w-full'>
        <h2
          style={poppins.style}
          className='py-10 text-center text-white  leading-[56px] font-semibold text-[32px]'
        >
          Education
        </h2>
        <div className='lg:grid lg:grid-cols-2'>
          {Education.map((item, index) => (
            <div key={index.toString()} className='mb-[50px] px-[20px]'>
              <h3
                style={poppins.style}
                className='text-indicatot w-[80%] sm:w-full mb-[20px] text-[22px] leading-[22px]'
              >
                {item.title}
              </h3>
              <p className='text-white w-[50%] font-normal text-[20px] leading-[30px]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className='flex flex-col items-center' id='CERTIFICATION'>
        <h2
          style={poppins.style}
          className='py-10 text-center w-[331px] sm:w-[600px] px-[11px] mx-auto  break-all  leading-[56px] font-semibold text-[40px]'
        >
          Certification/Management- Related Licence
        </h2>
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3  mb-[50px] gap-[89px]'>
          {cert.map((item, index) => (
            <CerificateCard
              key={index.toString()}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
