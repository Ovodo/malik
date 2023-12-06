"use client";

import useFonts from "@/hooks/useFonts";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const listExp = [
  {
    head: `Unique Oil and Integrated Services Limited Lagos, Nigeria Founder/CEO 2007-Till Date`,
    text: `Managed the Unique Oil and Integrated services to secure and manage critical support services for the Federal Government Agencies of the Federal Republic of Nigeria (NAFDAC, FAAN, NPA), Kogi State Government, and Private companies (GAS GROUP, CITI BANK) that services multinationals such as CHEVRON, AGIP, CNOO`,
  },
  {
    head: `NAFDAC https://www.nafdac.gov.ng`,
    text: `Led the company(Unique Oil and Integrated Services) to forge an indomitable partnership with the esteemed National Agency for Food and Drug Administration and Control (The US equivalent of the FDA).`,
    li_1: "Developed and implemented strategic plans to gain 70% improved energy sufficiency for operations of the national laboratories of NAFDAC.",
    li_2: "My leadership and unwavering dedication to excellence have been so unparalleled that the NAFDAC retained our services through successive outgone and incoming Director Generals (Four Administrations), spanning a remarkable era from 2010 until now.",
    li_3: "My extraordinary contributions to the institution (NAFDAC) led to the establishment's energy support service that ensured uninterrupted power supply and orchestrated efficient energy management, allowing the organization to execute its regulatory functions with unparalleled effectiveness and efficiency.",
  },
  {
    head: `Kogi State Government, Nigeria https://kogistate.gov.ng`,
    text: `Led the company to partner with the Kogi State Government to build, operate, and transfer a fuel and gas underground storage system to service the entire state’s transportation services and government infrastructures. The projected profits of over two billion naira as of 2017 without adjustment for inflation. The project started in 2017 and will end in 2037. This project is critical for the state’s government because it preserves, guarantees, and secures energy sources for government operations and other support services. This project aided the government in reducing the costs, vulnerabilities, and dangers of insecurities, scarcity, and adulteration and adequately securing energy availability.`,
  },
  {
    head: `Gas Group`,
    text: `Spearheaded a dynamic team of consultants, orchestrating the strategic growth of Southwest Design, Africa, a distinguished subsidiary of Gas Group. Our collaborative efforts yielded remarkable success, securing projects that transcended a staggering sum of 200 million dollars. Our achievements reverberated across multifaceted initiatives, including Chevron Agbami Tank Cleaning, Chevron Meren Produce Water Handling and Crude Recovery, MPDC Otorogu Well Intervention Services, and Usari Pressure Maintenance for Usari Platform. For further information www.gasgroupintl.com`,
  },
];

const proExp = [
  {
    head: `International Journal of Public Administration and Management Research (IJPAMR)`,
    head2: "ISSN2346-7215(Print)ISSN: 2350-2231(Online).",
    link: "https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam",

    text: `Editorial Board Member: 2023-till date https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam`,
  },
  {
    head: `Exhibitor @ the 31st Council for the Regulation of Engineering in Nigeria Assembly, 2023`,
    link: "https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam",
    text: `Editorial Board Member: 2023-till date https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam
        `,
  },
  {
    head: `Article Publication/Citations(4)`,
    link: "https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam",
    text: `Editorial Board Member: 2023-till date https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam`,
  },
];
const volExp = [
  {
    head: `Regional Director, April 2023 - Till Date`,
    text: `The Borgen Project, Los Angeles, California (36th congressional district).`,
  },
  {
    head: `Advocate for Bill Sponsorship`,
    text: `Members of the US 36th Congressional District, California, USA.`,
  },
  {
    head: `Meet with Members of US Congress`,
    text: `Meet with Members of US Congress`,
  },
  {
    head: `Mobilize people to call and mail members of the US Congress.`,
    text: `Mobilize people to call and mail members of the US Congress.`,
  },
  {
    head: `Call and Mail Members`,
    text: `36th congressional district of the US Congress (Senator Dianne Feinstein, Alex Padilla, and Congressman Ted Lieu) to influence the approval of foreign policies that support foreign aid agencies for poverty reduction and other bills, such as (SAFE ACT, READ ACT REAUTHORIZATION, MINDS ACT, END TUBERCULOSIS NOW ACT), PROTECTION OF INTERNATIONAL AFFAIRS BUDGET)..`,
  },
  {
    head: `Fund Raising`,
    text: `Fund Raising`,
  },
];

export default function Experience() {
  const { poppins, libre } = useFonts();
  const [truncate, setTruncate] = useState(true);
  const [index, setIndex] = useState(0);

  const truncateSection = (i: number) => {
    setTruncate(!truncate);
    setIndex(i);
  };

  return (
    <div className='[background:linear-gradient(180deg,rgb(245.64,244.61,244.61)_0%,rgba(174.45,174.45,174.45,0)_100%)]'>
      <section className='bg-whit'>
        <h2
          style={libre.style}
          className={`mt-[56px] mb-[50px] text-[34px]  font-semibold  lg:mt-[60px] lg:mb-[100px] text-center`}
        >
          Work Projects
        </h2>
        <div className='px-5  md:px-20 w-[95%] mx-auto'>
          {listExp.map((exp, i) => (
            <div
              key={i.toString()}
              className={` ${
                !truncate && index === i ? "min-h-max" : "min-h-[350px]"
              }  justify-start sm:p-[32px] pt-2 pb-10 relative pl-[30px] pr-[26px] border-l-yellow-400 shadow-[0_2px_10px_rgba(28,25,25,0.16)]  border-l-4 min-h-[350px] bg-white rounded-lg  flex flex-col sm:justify-center gap-4  mb-[50px]`}
            >
              <h3 className='font-semibold break-all text-[20px] leading-[28px]'>
                {exp.head}
              </h3>
              <p className=' text-[18px] hidden sm:flex   leading-[30px]'>
                {exp.text}
              </p>
              <p className=' text-[18px] sm:hidden   leading-[28px]'>
                {!truncate && index === i
                  ? exp.text
                  : exp.text.slice(0, 250).concat("...")}
              </p>
              {exp.li_1 && (
                <ul className='list-disc ml-4 hidden sm:flex sm:flex-col space-y-3 text-[16px]  leading-[22px]'>
                  <li>{exp.li_1}</li>
                  <li>{exp.li_2}</li>
                  <li>{exp.li_3}</li>
                </ul>
              )}
              <div className='sm:hidden'>
                {exp.li_1 && !truncate && index === i && (
                  <ul className='list-disc flex flex-col sm:hidden space-y-3 text-[16px] leading-[22px]'>
                    <li>{exp.li_1}</li>
                    <li>{exp.li_2}</li>
                    <li>{exp.li_3}</li>
                  </ul>
                )}
                {exp.li_1 && truncate && "...."}
              </div>
              <div className='flex sm:hidden absolute bottom-1 right-2 self-end items-center space-x-3'>
                <p
                  onClick={() => {
                    truncateSection(i);
                  }}
                  style={poppins.style}
                  className='font-medium hover:underline text-[14px] leading-[22px]'
                >
                  Read more...
                </p>
                <button
                  className={`${
                    index === i && !truncate ? "rotate-180" : "rotate-0"
                  }`}
                  onClick={() => {
                    truncateSection(i);
                  }}
                >
                  <RiArrowDropDownLine />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='sm:w-[90%] bg-white rounded-sm sm:mx-[32px]'>
        <h2
          style={libre.style}
          className='font-semibold text-[34px] w-[205px] sm:w-[577px] mx-auto  mt-[16px] mb-[50px] text-center'
        >
          Professional Projects
        </h2>
        <div className='w-[320px] sm:w-[100%] m-auto grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[30px] max-h-max'>
          {proExp.map((exp, i) => (
            <div
              key={i}
              className=' border-t-2  border-t-gray-800 pt-[20px] flex flex-col gap-3 w-[320px]'
            >
              <h3
                style={libre.style}
                className='font-medium text-[22px] leading-[28px]'
              >
                {exp.head}
              </h3>
              {exp.head2 && (
                <h3
                  style={libre.style}
                  className='font-medium mt-2 text-[22px] leading-[30px]'
                >
                  {exp.head2}
                </h3>
              )}
              <Link
                href={exp.link}
                className={`line-clamp- break-all mt-[30px]`}
              >
                {exp.text}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className='bg-[#424E60] mt-10 w-full px-[24px] pt-[31px] sm:pt-[72px] lg:pb-[124px]'>
        <h2
          style={libre.style}
          className='font-semibold w-[176px] sm:w-[560px] mx-auto text-[34px]  mb-[50px] text-white  text-center'
        >
          Volunteer Projects
        </h2>
        <div className='w-full m-auto  grid grid-col-1 md:grid-cols-2 place-items-center  gap-4'>
          {volExp.map((exp, i) => (
            <div
              key={i}
              className='border-l-yellow-400 border-l-4 bg-white rounded-lg lg:w-[640px]  sm:w-[345px] w-[365px] h-[365px] justify-center p-10 flex flex-col gap-3 mb-4'
            >
              <h3 className='font-medium text-[22px] leading-[28px]'>
                {exp.head}
              </h3>
              <p className='text-[14px] leading-[24px]'>{exp.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
