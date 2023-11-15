"use client";

import useFonts from "@/hooks/useFonts";
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

    text: `Editorial Board Member: 2023-till date https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam
        Reviewed and selected Journal papers for publication. Paper reviewed
        Invitation: Institute of Management Consultants & London Graduate School
        Panel: Chartered Management Consultants Certification Panel, Nigeria
        Paper: IMC-Nigeria: CMC Certification Workshop & Membership/Fellowship Induction Assessment Papers
        Number of Papers Reviewed: Two
        Invitation: International Journal of Public Administration and Management Research (IJPAMR), ISSN2346-7215(Print)ISSN: 2350-2231(Online).
        Numbers of Articles Reviewed: Two
        Climate Change and Urban Poor: Water-related Behavior in Jakarta
        Population and Housing Census in Nigeria
        Invitation: (The Author) Professor Mahmood Elsayess, Ph.D., PMP, MCS
        Book Endorser
        Author: Professor Mahmood Elsayess, Ph.D., PMP, MCS
        Title: The-anatomy-of-an-English-paragraph
        ISBN: 9798823010689`,
  },
  {
    head: `Exhibitor @ the 31st Council for the Regulation of Engineering in Nigeria Assembly, 2023`,
    text: `Editorial Board Member: 2023-till date https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam
        `,
  },
  {
    head: `Article Publication/Citations(4)`,
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
  const { poppins } = useFonts();
  const [truncate, setTruncate] = useState(true);
  const [index, setIndex] = useState(0);

  const truncateSection = (i: number) => {
    setTruncate(!truncate);
    setIndex(i);
  };

  return (
    <>
      <section className='bg-white'>
        <h2
          className={`mt-[56px] mb-[50px] font-bold text-[42px] lg:mt-[60px] lg:mb-[100px] text-center`}
        >
          Work Experience
        </h2>
        <div className='px-5  md:px-20 w-[95%] mx-auto'>
          {listExp.map((exp, i) => (
            <div
              key={i.toString()}
              className={` ${
                !truncate && index === i ? "min-h-max" : "h-[600px]"
              }  justify-start sm:p-[32px] pt-2 pb-10 relative pl-[30px] pr-[26px] border-l-yellow-400 shadow-[0_2px_10px_rgba(28,25,25,0.16)]  border-l-4 sm:h-[750px] lg:h-[500px] bg-white rounded-lg  flex flex-col sm:justify-center gap-4  mb-[50px]`}
            >
              <h3 className='font-semibold break-all text-[22px] leading-[22px] lg:text-[28px] lg:leading-[28px]'>
                {exp.head}
              </h3>
              <p className=' text-[20px] hidden sm:flex lg:text-[24px]  leading-[30px]'>
                {exp.text}
              </p>
              <p className=' text-[20px] sm:hidden lg:text-[24px]  leading-[30px]'>
                {!truncate && index === i
                  ? exp.text
                  : exp.text.slice(0, 250).concat("...")}
              </p>
              {exp.li_1 && (
                <ul className='list-disc ml-4 hidden sm:flex sm:flex-col space-y-3 text-[20px] lg:text-[22px] leading-[30px]'>
                  <li>{exp.li_1}</li>
                  <li>{exp.li_2}</li>
                  <li>{exp.li_3}</li>
                </ul>
              )}
              <div className='sm:hidden'>
                {exp.li_1 && !truncate && index === i && (
                  <ul className='list-disc flex sm:hidden space-y-3 text-[20px] lg:text-[26px] leading-[30px]'>
                    <li>{exp.li_1}</li>
                    <li>{exp.li_2}</li>
                    <li>{exp.li_3}</li>
                  </ul>
                )}
                {exp.li_1 && truncate && "...."}
              </div>
              <div className='flex sm:hidden absolute bottom-1 right-2 self-end items-center space-x-3'>
                <p
                  style={poppins.style}
                  className='font-semibold text-[22px] leading-[22px]'
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

      <section className='sm:w-[90%] sm:mx-[32px]'>
        <h2
          style={poppins.style}
          className='font-semibold text-[32px] w-[205px] sm:w-[577px] mx-auto leading-[56px] mt-[16px] mb-[50px] text-center'
        >
          Professional Experience
        </h2>
        <div className='w-[320px] sm:w-[100%] m-auto grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[30px] max-h-max'>
          {proExp.map((exp, i) => (
            <div
              key={i}
              className=' border-t-2  border-t-gray-800 pt-[20px] flex flex-col gap-3 w-[320px]'
            >
              <h3
                style={poppins.style}
                className='font-semibold text-[22px] leading-[28px]'
              >
                {exp.head}
              </h3>
              {exp.head2 && (
                <h3
                  style={poppins.style}
                  className='font-semibold mt-2 text-[22px] leading-[30px]'
                >
                  {exp.head2}
                </h3>
              )}
              <p className={`line-clamp-5 mt-[30px]`}>{exp.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-[#424E60] w-full px-[24px] mb-3 lg:pb-[124px]'>
        <h2 className='font-semibold w-[176px] sm:w-[560px] mx-auto text-[32px] leading-[56px] mt-[31px] lg:mt-[110px] mb-[50px] text-white  text-center'>
          Volunteer Experience
        </h2>
        <div className='w-full m-auto  grid grid-col-1 md:grid-cols-2 place-items-center  gap-4  mb-4'>
          {volExp.map((exp, i) => (
            <div
              key={i}
              className='border-l-yellow-400 border-l-4 bg-white rounded-lg lg:w-[640px] sm:h-[250px] w-[345px] h-[345px] justify-center p-10 flex flex-col gap-3 mb-4'
            >
              <h3 className='font-bold text-lg'>{exp.head}</h3>
              <p className='text-[16px] leading-[20px]'>{exp.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className=' mb-3'>
        <h2
          style={poppins.style}
          className='font-semibold w-[321px] mx-auto mt-[40px] mb-[50px] text-[32px] leading-[56px] text-center'
        >
          Research Experience
        </h2>
        <div className='w-[90%] m-auto  grid grid-col-1 md:grid-cols-2  gap-4 min-h-screen mb-4'>
          <div className='text-header-color relative pb-5'>
            <div className='flex  absolute bottom-1 right-2 self-end items-center space-x-3'>
              <p
                style={poppins.style}
                className='font-semibold text-[22px] leading-[22px]'
              >
                Read more...
              </p>
              <button
                className={`${!truncate ? "rotate-180" : "rotate-0"}`}
                onClick={() => {
                  setTruncate(!truncate);
                }}
              >
                <RiArrowDropDownLine />
              </button>
            </div>
            <h2
              style={poppins.style}
              className='font-semibold w-[380px] sm:w-[320px]  mb-[20px] text-[22px] sm:text-[28px] sm:leading-[28px] leading-[22px]'
            >
              Westcliff University/ Department of Business
              Administration/Irvine, CA, USA Doctoral Student 2017-2022
            </h2>
            <h3 className='text-[20px] leading-[30px] font-normal mb-[30px]'>
              Dissertation Chairman: Professor Elsayess Mahmood: Ph.D., PMP,
              MCS. Methodologist: Professor Simin Hojat, Ph.D. Subject Matter
              Expert: Professor Omar Haddad DBA Program Chair: Professor Alex
              Sherm Doctoral Dissertation: Integrating Blockchain into
              Electronic Stamp Duty Collections (A Case Study).
            </h3>
            <h2 className='font-bold text-[20px] sm:text-[28px] sm:leading-[24px]  leading-[23.46px] mb-[15px]'>
              Brief description of Project
            </h2>
            <p className='font-normal text-[17px] leading-[24px]'>
              In this scholarly presentation, I embark on an immersive journey
              into the heart of a profound financial syndicate fraud that has
              cast a shadow over Nigeria&apos;s banking landscape. This
              comprehensive examination seeks to unravel the intricate layers of
              the orchestrated deception, dissecting the mechanisms,
              methodologies, and underlying factors that culminated in its
              advanced form. Moreover, my exploration extends beyond analysis,
              culminating in the proposal of a pioneering solution poised to
              redefine the trajectory of financial integrity within the nation.
            </p>
            <br />
            <br />
            {!truncate && (
              <div>
                <b className='font-bold text-[18px] leading-[24px]'>
                  Unveiling the Fraud Landscape:
                </b>
                <p className='text-[18px] leading-[24px]'>
                  My investigative endeavor delves deep into the inner workings
                  of Nigeria&apos;s banks, financial institutions, and the
                  central bank, uncovering the elaborate network that
                  perpetuated this audacious fraud. Through meticulous analysis,
                  I navigate the intricate web of transactions, interactions,
                  and collaborations that facilitated the unprecedented scale of
                  the syndicate&apos;s operations. Understanding the
                  &quot;How&quot; and &quot;Methods&quot;: Central to my
                  academic endeavor is a comprehensive understanding of the
                  modus operandi adopted by the syndicate. I meticulously
                  dissect the intricate methods employed, ranging from falsified
                  documentation to strategic collusion, unveiling the intricate
                  tactics that enabled the fraud&apos;s gradual evolution into
                  an advanced and complex phenomenon. This detailed exploration
                  serves as a foundation for comprehending the depth of the
                  challenge at hand.
                </p>
                <br />
                <br />
                <b className='font-bold text-[18px] leading-[24px]'>
                  Understanding the &quot;How&quot; and &quot;Methods&quot;:
                </b>{" "}
                <p>
                  Central to my academic endeavor is a comprehensive
                  understanding of the modus operandi adopted by the syndicate.
                  I meticulously dissect the intricate methods employed, ranging
                  from falsified documentation to strategic collusion, unveiling
                  the intricate tactics that enabled the fraud&apos;s gradual
                  evolution into an advanced and complex phenomenon. This
                  detailed exploration serves as a foundation for comprehending
                  the depth of the challenge at hand.
                </p>
                <br />
                <br />
                <b className='font-bold text-[18px] leading-[24px]'>
                  Causal Factors and Root Analysis:
                </b>{" "}
                <p>
                  Beyond the surface intricacies, I venture into the realm of
                  causal factors, delving into the underlying socioeconomic,
                  regulatory, and ethical considerations that paved the way for
                  such an extensive fraud. This exploration seeks to unearth the
                  systemic weaknesses and structural vulnerabilities that
                  allowed the syndicate to thrive, setting the stage for
                  subsequent solution proposals.
                </p>
                <br />
                <br />
                <b className="className='font-bold text-[18px] leading-[24px]'">
                  A Pioneering Solution:
                </b>{" "}
                <p>
                  Charting a Path Forward: With insights gleaned from my
                  meticulous examination, I proudly present an innovative and
                  near-permanent solution to mitigate the looming specter of
                  financial syndicate fraud. This multifaceted solution combines
                  technological advancements, robust regulatory reforms, and a
                  paradigm shift in corporate governance to form a formidable
                  defense against future occurrences. By addressing the root
                  causal factors and reinforcing the nation&apos;s financial
                  infrastructure, my proposed solution offers a transformative
                  blueprint for resilience and accountability.
                </p>
                <br />
                <br />
                <b className='font-bold text-[18px] leading-[24px]'>
                  Proposal:
                </b>{" "}
                <p>
                  An innovative proposition of integrating a centralized
                  database system with cutting-edge blockchain technology. This
                  visionary blockchain system, fortified by cryptographic
                  measures, is an impregnable fortress against fraudulence.
                  Beyond its formidable security, it ushers in a new era of
                  democratized control, placing the governance and approval
                  prerogatives into the hands of select critical stakeholders
                  who are meticulously co-nominated. In addition to its
                  safeguarding capabilities, this paradigm-shifting proposal
                  promises a seamless transformation of remittance procedures.
                  The existing convoluted process, plagued by third-party
                  interferences, becomes a relic of the past. Instead, a future
                  propelled by this technology envisions an autonomous and
                  unerring channel for remittances to the government account,
                  leaving no room for external disruptions. This streamlines
                  operations and ensures that accuracy reigns supreme in the
                  financial ecosystem.
                </p>
                <br />
                <br />
                <b className='font-bold text-[18px] leading-[24px]'>
                  Conclusion:
                </b>{" "}
                <p>
                  Nigeria was a case study, but the proposal applies worldwide
                  to fraud-proof electronic tax collection processes.
                </p>
              </div>
            )}
          </div>

          <div className='relative pb-10'>
            <div className='flex sm:hidden  absolute bottom-1 right-2 self-end items-center space-x-3'>
              <p
                style={poppins.style}
                className='font-semibold text-[22px] leading-[22px]'
              >
                Read more...
              </p>
              <button
                className={`${!truncate ? "rotate-180" : "rotate-0"}`}
                onClick={() => {
                  setTruncate(!truncate);
                }}
              >
                <RiArrowDropDownLine />
              </button>
            </div>
            <h2
              style={poppins.style}
              className='font-semibold w-[380px] mb-[20px] mt-[50px] sm:mt-[0px] sm:text-[28px] sm:leading-[28px] text-[22px] leading-[22px]'
            >
              Coventry University, London Campus/Department of Business
              Administration/London, UK
            </h2>
            <h3 className='text-[20px] leading-[30px] font-normal mb-[30px]'>
              Consulting Fellow 2015 -2016 Mentor: Doctor Beeker (Ph.D., MEI,
              MCMI, FHEA, FRSA). Project Title: “Developing Entry Strategy into
              the South American and the Caribbean Oil and Gas Market.”
            </h3>
            <h2 className='font-bold text-[20px] leading-[23.46px] sm:text-[28px] sm:leading-[24px]  mt-[30px] mb-[15px]'>
              Tasks
            </h2>
            <p className='text-[17px] leading-[24px]'>
              Conducted extensive research to identify market entry strategies
              into South America and the Caribbean region and made categorized
              recommendations for Genesis Oil and Gas.
            </p>
            <br />
            <br />
            <b className='font-bold text-[18px] leading-[24px]'>
              Short-term:
            </b>{" "}
            Projects in the production phase are under five years old.
            Short-term recommendations consist of ongoing projects at the
            producing stage. Due to the oil price downturn, most Oil and Gas
            companies are looking for better opportunities to enhance their
            production while reducing costs. As a short-term strategy, Genesis
            can enter projects immediately in the producing stages to take
            advantage of the volatility in the oil and gas industry.
            <br />
            <br />
            <div className='hidden sm:flex sm:flex-col'>
              <b className='font-bold text-[18px] leading-[24px]'>Mid-term:</b>{" "}
              Projects in the development phase are 5 – 10 years old. Mid-term
              recommendations include projects at the exploration stage. This
              stage of the hydrocarbon production process is a complex and
              costly business. In contrast, a positive result is not granted,
              and hydrocarbons can be located in the most inhospitable parts of
              the world (BP 2008). Oil companies prefer to save funds nowadays,
              and it is an excellent opportunity for Genesis, with its area of
              expertise, to join the projects.
              <br />
              <br />
              <b className='font-bold text-[18px] leading-[24px]'>
                Long-term:
              </b>{" "}
              Prospective projects are for more than ten years. According to PWC
              (2016), every oil and gas player, including service providers, can
              adopt long-term strategies:
              <br />
              1. Develop a more robust supply chain management capability;
              <br />
              2. Invest in human capital & cost structure,
              <br />
              3. Capture the value of technologies, and
              <br />
              4. Align the asset and investment portfolio with a future source
              of value. Based on research findings identified that Guyana and
              Chile are the two countries that seize emerging strategic
              opportunities. The table below shows the long-term recommendation
              for Genesis; this available recommendation strategy requires an
              extensive period to establish a business platform due to
              macroeconomics, technologies, legislation framework, and finances.
            </div>
            {!truncate && (
              <div>
                <b className='font-bold text-[18px] leading-[24px]'>
                  Mid-term:
                </b>{" "}
                Projects in the development phase are 5 – 10 years old. Mid-term
                recommendations include projects at the exploration stage. This
                stage of the hydrocarbon production process is a complex and
                costly business. In contrast, a positive result is not granted,
                and hydrocarbons can be located in the most inhospitable parts
                of the world (BP 2008). Oil companies prefer to save funds
                nowadays, and it is an excellent opportunity for Genesis, with
                its area of expertise, to join the projects.
                <br />
                <br />
                <b className='font-bold text-[18px] leading-[24px]'>
                  Long-term:
                </b>{" "}
                Prospective projects are for more than ten years. According to
                PWC (2016), every oil and gas player, including service
                providers, can adopt long-term strategies:
                <br />
                1. Develop a more robust supply chain management capability;
                <br />
                2. Invest in human capital & cost structure,
                <br />
                3. Capture the value of technologies, and
                <br />
                4. Align the asset and investment portfolio with a future source
                of value. Based on research findings identified that Guyana and
                Chile are the two countries that seize emerging strategic
                opportunities. The table below shows the long-term
                recommendation for Genesis; this available recommendation
                strategy requires an extensive period to establish a business
                platform due to macroeconomics, technologies, legislation
                framework, and finances.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
