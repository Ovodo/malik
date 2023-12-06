import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import React from "react";
import Cert from "@/public/assets/cert.png";
import Link from "next/link";

const CerificateCard = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <Link target='_blank' href={link} className=''>
      <div className='flex rounded-[10px] my-[30px] p-[32px] w-[312px] h-[350px] shadow-[0_5px_5px_rgba(43,56,76,0.2)]  flex-col items-start'>
        <div className='relative w-[70px] flex items-center justify-center mb-[32px] h-[70px] bg-[#ddc85d] rounded-[5px]'>
          <Image alt='cert' src={Cert} width={60} height={60} />
        </div>
        <div className=''>
          <h4 className='text-[28px] mb-[12px] leading-[28px] text-header-color font-semibold'>
            {title}
          </h4>
          <div className='w-[200px] h-[150px]'>
            <p className=' w-[200px] font-regular text-maroon text-[18px] tracking-[0] leading-[30px]'>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const cert = [
  {
    title: "CMS",
    desc: " Certified Management Specialist (CMS) with Distinction in Time Management",
    link: "",
  },
  {
    title: "MANAGEMENT",
    desc: "Certified Management Consultant",
    link: "",
  },
  {
    title: "MANAGEMENT",
    desc: "Licensed Management Consultant",
    link: "",
  },
  {
    title: "COREN",
    desc: "Licensed COREN Engineer",
    link: "certification/coren",
  },
  {
    title: "ISO",
    desc: "Certified ISO 20700 Consultant",
    link: "certification/iso",
  },
  {
    title: "CONSULTANT",
    desc: "Certified Chartered Management Consultant",
    link: "",
  },
];

const Page = () => {
  const { poppins, libre } = useFonts();

  return (
    <section
      className='flex flex-col bg-white w-full items-center'
      id='CERTIFICATION'
    >
      <h2
        style={libre.style}
        className='py-10 text-center w-[331px] sm:w-[600px] lg:w-full px-[11px] mx-auto  break-all   font-semibold text-[34px]'
      >
        Certification / Licence
      </h2>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3  mb-[50px] gap-[89px]'>
        {cert.map((item, index) => (
          <CerificateCard
            key={index.toString()}
            title={item.title}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
