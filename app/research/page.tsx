import React from "react";

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

const Page = () => {
  return (
    <section className='bg-body-color w-full px-[24px] lg:pb-[124px]'>
      <h2 className='font-semibold w-[176px] sm:w-[560px] mx-auto text-[32px] leading-[56px] mt-[31px] lg:mt-[110px] mb-[50px] text-white  text-center'>
        Research and Articles
      </h2>
      <div className='w-full m-auto  grid grid-col-1 md:grid-cols-2 place-items-center  gap-4  mb-4'>
        {volExp.map((exp, i) => (
          <div
            key={i}
            className='border-l-yellow-400 border-l-4 bg-white rounded-lg lg:w-[640px] sm:h-[365px] sm:w-[340px] w-[365px] h-[365px] justify-center p-5 flex flex-col gap-3 mb-4'
          >
            <h3 className='font-semibold text-[28px] leading-[28px]'>
              {exp.head}
            </h3>
            <p className='text-[16px] leading-[20px]'>{exp.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
