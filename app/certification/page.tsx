import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import React from "react";
import Cert from "@/public/assets/cert.png";

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

const Page = () => {
  const { poppins } = useFonts();

  return (
    <section
      className='flex flex-col bg-white w-full items-center'
      id='CERTIFICATION'
    >
      <h2
        style={poppins.style}
        className='py-10 text-center w-[331px] sm:w-[600px] lg:w-full px-[11px] mx-auto  break-all  leading-[56px] font-semibold text-[40px]'
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
  );
};

export default Page;