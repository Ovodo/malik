"use client";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const volExp = [
  {
    img: `google`,
    text: `Google Scholar`,
    link: "https://scholar.google.com/citations?user=gT-pD5wAAAAJ&hl=en",
  },
  {
    img: `global`,
    text: `Globalization as Catalyst for International Entrepreneurship`,
    link: "/research/global",
  },
  {
    img: `kogi`,
    text: `Kogi Reports`,
    link: "https://kogireports.com/tag/malik-abdullahi-okino/",
  },
  {
    img: `digital`,
    text: `Digital Marketing and Performance of Multinational Corporations in the Post-Covid-19 Era`,
    link: "/research/digital",
  },
  {
    img: `punch`,
    text: `Punch Nigeria`,
    link: "https://punchng.com/blockchain-can-bridge-financial-system-infrastructure-gap-us-based-don/",
  },
];

const Page = () => {
  const { poppins, libre } = useFonts();
  const [truncate, setTruncate] = useState(true);
  const [truncate2, setTruncate2] = useState(true);
  return (
    <>
      <section className='bg-body-color h-full w-full px-[10px] lg:pb-[124px]'>
        <h2
          style={libre.style}
          className='font-normal w-[176px] sm:w-[560px] mx-auto text-[34px]  mt-[31px] mb-[50px] text-white  text-center'
        >
          Research
        </h2>
        <div className='w-full m-auto h-[80%] flex flex-col justify-between gap-4  mb-4'>
          {volExp.map((exp, i) => (
            <div
              key={i}
              className='border-l-yellow-400 border-l-4 shadow-[0_5px_5px_rgba(0,0,0,0.2)] bg-white rounded-lg w-[100%] lg:w-[80%] mx-auto min-h-[150px] items-center justify-center lg:justify-start lg:pl-[102px] p-2 flex  gap-7 sm:gap-16 mb-4'
            >
              <div className='relative shadow-[0_5px_5px_rgba(43,56,76,0.2)] rounded-[10px]  w-[130px] h-[80px]'>
                <Image
                  fill
                  objectFit='contain'
                  alt='image'
                  src={`/assets/research/${exp.img}.png`}
                />
              </div>
              <Link
                target='_blank'
                className='text-[18px]  sm:leading-[28px] w-[100%] break-all font-medium underline text-header-color leading-[23.46px]'
                href={exp.link}
              >
                {exp.text}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className=' bg-white mb-3'>
        <h2
          style={libre.style}
          className='font-normal w-[321px] sm:w-full mx-auto mt-[40px] mb-[50px] text-[34px] text-center'
        >
          Research Experience
        </h2>
        <div className='w-[90%] lg:w-[80%] m-auto flex flex-col sm:flex-row justify-between   gap-4  mb-4'>
          <div className=' sm:w-[45%]'>
            <div className='text-header-color w-[100%] p-2 rounded-md  border-y-8 border-[#d9d9d9] border-x-2  relative  sm:min-h-[600px] pb-5'>
              <div className='flex  absolute bottom-1 right-2 self-end items-center space-x-3'>
                <p
                  onClick={() => {
                    setTruncate(!truncate);
                  }}
                  className='font-semibold hover:underline hover:cursor-pointer text-[14px] leading-[22px]'
                >
                  {truncate ? "Read more..." : "Read less"}
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
                className='font-semibold   lg:w-full  mb-[18px] text-[18px]  leading-[28px]'
              >
                Westcliff University/ Department of Business
                Administration/Irvine, CA, USA Doctoral Student 2017-2022
              </h2>
              <h3 className='text-[14px] leading-[30px] font-normal mb-[30px]'>
                <strong className='font-medium'>Dissertation Chairman: </strong>
                Professor Elsayess Mahmood: Ph.D., PMP, MCS. Methodologist:
                Professor Simin Hojat, Ph.D. Subject Matter Expert: Professor
                Omar Haddad DBA Program Chair: Professor Alex Sherm Doctoral
                Dissertation: Integrating Blockchain into Electronic Stamp Duty
                Collections (A Case Study).
              </h3>
              <h2 className='font-medium text-[18px] leading-[28px] mb-[15px]'>
                Brief description of Project
              </h2>
              <p className='font-normal text-[14px] leading-[24px]'>
                In this scholarly presentation, I embark on an immersive journey
                into the heart of a profound financial syndicate fraud that has
                cast a shadow over Nigeria&apos;s banking landscape. This
                comprehensive examination seeks to unravel the intricate layers
                of the orchestrated deception, dissecting the mechanisms,
                methodologies, and underlying factors that culminated in its
                advanced form. Moreover, my exploration extends beyond analysis,
                culminating in the proposal of a pioneering solution poised to
                redefine the trajectory of financial integrity within the
                nation.
              </p>
              <br />
              <br />
              {!truncate && (
                <div>
                  <b className='font-medium text-[18px] leading-[24px]'>
                    Unveiling the Fraud Landscape:
                  </b>
                  <p className='text-[14px] leading-[24px]'>
                    My investigative endeavor delves deep into the inner
                    workings of Nigeria&apos;s banks, financial institutions,
                    and the central bank, uncovering the elaborate network that
                    perpetuated this audacious fraud. Through meticulous
                    analysis, I navigate the intricate web of transactions,
                    interactions, and collaborations that facilitated the
                    unprecedented scale of the syndicate&apos;s operations.
                    Understanding the &quot;How&quot; and &quot;Methods&quot;:
                    Central to my academic endeavor is a comprehensive
                    understanding of the modus operandi adopted by the
                    syndicate. I meticulously dissect the intricate methods
                    employed, ranging from falsified documentation to strategic
                    collusion, unveiling the intricate tactics that enabled the
                    fraud&apos;s gradual evolution into an advanced and complex
                    phenomenon. This detailed exploration serves as a foundation
                    for comprehending the depth of the challenge at hand.
                  </p>
                  <br />
                  <br />
                  <b className='font-medium text-[18px] leading-[24px]'>
                    Understanding the &quot;How&quot; and &quot;Methods&quot;:
                  </b>{" "}
                  <p className='text-[14px]'>
                    Central to my academic endeavor is a comprehensive
                    understanding of the modus operandi adopted by the
                    syndicate. I meticulously dissect the intricate methods
                    employed, ranging from falsified documentation to strategic
                    collusion, unveiling the intricate tactics that enabled the
                    fraud&apos;s gradual evolution into an advanced and complex
                    phenomenon. This detailed exploration serves as a foundation
                    for comprehending the depth of the challenge at hand.
                  </p>
                  <br />
                  <br />
                  <b className='font-medium text-[18px] leading-[24px]'>
                    Causal Factors and Root Analysis:
                  </b>{" "}
                  <p className='text-[14px]'>
                    Beyond the surface intricacies, I venture into the realm of
                    causal factors, delving into the underlying socioeconomic,
                    regulatory, and ethical considerations that paved the way
                    for such an extensive fraud. This exploration seeks to
                    unearth the systemic weaknesses and structural
                    vulnerabilities that allowed the syndicate to thrive,
                    setting the stage for subsequent solution proposals.
                  </p>
                  <br />
                  <br />
                  <b className='font-medium text-[18px] leading-[24px]'>
                    A Pioneering Solution:
                  </b>{" "}
                  <p className='text-[14px]'>
                    Charting a Path Forward: With insights gleaned from my
                    meticulous examination, I proudly present an innovative and
                    near-permanent solution to mitigate the looming specter of
                    financial syndicate fraud. This multifaceted solution
                    combines technological advancements, robust regulatory
                    reforms, and a paradigm shift in corporate governance to
                    form a formidable defense against future occurrences. By
                    addressing the root causal factors and reinforcing the
                    nation&apos;s financial infrastructure, my proposed solution
                    offers a transformative blueprint for resilience and
                    accountability.
                  </p>
                  <br />
                  <br />
                  <b className='font-medium text-[18px] leading-[24px]'>
                    Proposal:
                  </b>{" "}
                  <p className='text-[14px]'>
                    An innovative proposition of integrating a centralized
                    database system with cutting-edge blockchain technology.
                    This visionary blockchain system, fortified by cryptographic
                    measures, is an impregnable fortress against fraudulence.
                    Beyond its formidable security, it ushers in a new era of
                    democratized control, placing the governance and approval
                    prerogatives into the hands of select critical stakeholders
                    who are meticulously co-nominated. In addition to its
                    safeguarding capabilities, this paradigm-shifting proposal
                    promises a seamless transformation of remittance procedures.
                    The existing convoluted process, plagued by third-party
                    interferences, becomes a relic of the past. Instead, a
                    future propelled by this technology envisions an autonomous
                    and unerring channel for remittances to the government
                    account, leaving no room for external disruptions. This
                    streamlines operations and ensures that accuracy reigns
                    supreme in the financial ecosystem.
                  </p>
                  <br />
                  <br />
                  <b className='font-medium text-[18px] leading-[24px]'>
                    Conclusion:
                  </b>{" "}
                  <p className='text-[14px]'>
                    Nigeria was a case study, but the proposal applies worldwide
                    to fraud-proof electronic tax collection processes.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className='relative  sm:w-[45%]'>
            <div className='text-header-color w-[100%] p-2 rounded-md  border-y-8 border-[#d9d9d9] border-x-2  relative  sm:min-h-[600px] pb-5'>
              <div className='flex sm:hidden  absolute bottom-1 right-2 self-end items-center space-x-3'>
                <p
                  style={poppins.style}
                  className='font-semibold text-[14px] leading-[22px]'
                >
                  {truncate2 ? "Read more..." : "Read less"}
                </p>
                <button
                  className={`${!truncate2 ? "rotate-180" : "rotate-0"}`}
                  onClick={() => {
                    setTruncate2(!truncate2);
                  }}
                >
                  <RiArrowDropDownLine />
                </button>
              </div>
              <h2
                style={poppins.style}
                className='font-semibold  lg:w-full mb-[18px] mt-[50px] sm:mt-[0px] text-[18px] leading-[28px]'
              >
                Coventry University, London Campus/Department of Business
                Administration/London, UK
              </h2>
              <h3 className='text-[14px] leading-[30px] font-normal mb-[30px]'>
                <strong className='font-medium'>
                  Consulting Fellow 2015 -2016 Mentor:{" "}
                </strong>{" "}
                Doctor Beeker (Ph.D., MEI, MCMI, FHEA, FRSA). Project Title:
                “Developing Entry Strategy into the South American and the
                Caribbean Oil and Gas Market.”
              </h3>
              <h2 className='font-medium text-[18px] leading-[24px]  mt-[30px] mb-[15px]'>
                Tasks
              </h2>
              <p className='text-[14px] leading-[24px]'>
                Conducted extensive research to identify market entry strategies
                into South America and the Caribbean region and made categorized
                recommendations for Genesis Oil and Gas.
              </p>
              <br />
              <br />
              <b className='font-medium text-[18px] leading-[24px]'>
                Short-term:
              </b>{" "}
              <p className='text-[14px]'>
                Projects in the production phase are under five years old.
                Short-term recommendations consist of ongoing projects at the
                producing stage. Due to the oil price downturn, most Oil and Gas
                companies are looking for better opportunities to enhance their
                production while reducing costs. As a short-term strategy,
                Genesis can enter projects immediately in the producing stages
                to take advantage of the volatility in the oil and gas industry.
              </p>
              <br />
              <br />
              <div className='hidden sm:flex sm:flex-col'>
                <b className='font-medium text-[18px] leading-[24px]'>
                  Mid-term:
                </b>{" "}
                <p className='text-[14px]'>
                  Projects in the development phase are 5 – 10 years old.
                  Mid-term recommendations include projects at the exploration
                  stage. This stage of the hydrocarbon production process is a
                  complex and costly business. In contrast, a positive result is
                  not granted, and hydrocarbons can be located in the most
                  inhospitable parts of the world (BP 2008). Oil companies
                  prefer to save funds nowadays, and it is an excellent
                  opportunity for Genesis, with its area of expertise, to join
                  the projects.
                </p>
                <br />
                <br />
                <b className='font-medium text-[18px] leading-[24px]'>
                  Long-term:
                </b>{" "}
                <p className='text-[14px] leading-[22px]'>
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
                  4. Align the asset and investment portfolio with a future
                  source of value. Based on research findings identified that
                  Guyana and Chile are the two countries that seize emerging
                  strategic opportunities. The table below shows the long-term
                  recommendation for Genesis; this available recommendation
                  strategy requires an extensive period to establish a business
                  platform due to macroeconomics, technologies, legislation
                  framework, and finances.
                </p>
              </div>
              {!truncate2 && (
                <div className='text-[14px]'>
                  <b className='font-medium text-[18px] leading-[24px]'>
                    Mid-term:
                  </b>{" "}
                  Projects in the development phase are 5 – 10 years old.
                  Mid-term recommendations include projects at the exploration
                  stage. This stage of the hydrocarbon production process is a
                  complex and costly business. In contrast, a positive result is
                  not granted, and hydrocarbons can be located in the most
                  inhospitable parts of the world (BP 2008). Oil companies
                  prefer to save funds nowadays, and it is an excellent
                  opportunity for Genesis, with its area of expertise, to join
                  the projects.
                  <br />
                  <br />
                  <b className='font-medium text-[18px] leading-[24px]'>
                    Long-term:
                  </b>{" "}
                  <p className='text-[14px]'>
                    Prospective projects are for more than ten years. According
                    to PWC (2016), every oil and gas player, including service
                    providers, can adopt long-term strategies:
                  </p>
                  <br />
                  1. Develop a more robust supply chain management capability;
                  <br />
                  2. Invest in human capital & cost structure,
                  <br />
                  3. Capture the value of technologies, and
                  <br />
                  4. Align the asset and investment portfolio with a future
                  source of value. Based on research findings identified that
                  Guyana and Chile are the two countries that seize emerging
                  strategic opportunities. The table below shows the long-term
                  recommendation for Genesis; this available recommendation
                  strategy requires an extensive period to establish a business
                  platform due to macroeconomics, technologies, legislation
                  framework, and finances.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
