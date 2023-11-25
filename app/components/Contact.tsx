import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import useFonts from "@/hooks/useFonts";
const ContactMe = () => {
  const { poppins, libre } = useFonts();

  return (
    <div
      id='contact'
      className=' mt-20 pt-28 flex flex-col relative lg:flex-row lg:justify-center gap-4 items-center lg:items-start justify-between p-5  bg-white w-full lg:w-[95%] m-auto rounded-xl'
    >
      <h3
        style={libre.style}
        className='font-semibold absolute top-6 mx-auto text-[34px]  mb-2'
      >
        Contact
      </h3>
      <div className='w-full text-center lg:text-left lg:w-1/2'>
        <h3
          style={libre.style}
          className='font-semibold mx-auto text-[22px] mb-2'
        >
          How can we help?
        </h3>
        <p
          style={poppins.style}
          className='mb-5 text-[18px]  lg:leading-[28px] lg:w-[80%]'
        >
          Let’s start a conversation about how we can help you take control of
          your project
        </p>
      </div>

      <div className='w-full  h-[500px] flex flex-col justify-between lg:w-1/2'>
        <div className='flex justify-between'>
          <input
            placeholder='Name*'
            name='name'
            type='text'
            required
            className='w-[48%]  outline-none border border-b-gray-300 rounded-sm py-2 px-2'
          />
          <input
            placeholder='Company'
            name='name'
            type='text'
            required
            className='w-[48%]  outline-none border border-b-gray-300 rounded-sm py-2 px-2'
          />
        </div>
        <div className='flex justify-between'>
          <input
            placeholder='Job Title'
            name='Job'
            type='text'
            required
            className='w-[48%]  outline-none border border-b-gray-300 rounded-sm py-2 px-2'
          />
          <input
            placeholder='Website'
            name='website'
            type='text'
            required
            className='w-[48%]  outline-none border border-b-gray-300 rounded-sm py-2 px-2'
          />
        </div>

        <div className=''>
          <input
            placeholder='Email Address*'
            name='email'
            type='email'
            required
            className='w-full outline-none border border-b-gray-300  py-3 px-2'
          />
        </div>
        <div className='flex justify-between'>
          <input
            placeholder='City/Country*'
            name='City'
            type='text'
            required
            className='w-[45%]  outline-none border border-b-gray-300  py-3 px-2'
          />
          <input
            placeholder='Contact Number'
            name='contact'
            type='text'
            required
            className='w-[45%]  outline-none border border-b-gray-300  py-3 px-2'
          />
        </div>

        <div className=''>
          <textarea
            name='text'
            placeholder='Enter your message here'
            className='w-full py-3 px-2 h-[80px] border border-gray-300'
            id=''
            rows={5}
          ></textarea>
        </div>
        <button className='flex w-full rounded-md justify-center items-center text-white bg-[#8A232A] p-3 gap-3'>
          <span>Submit</span>
          <IoMdSend size={30} />
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
