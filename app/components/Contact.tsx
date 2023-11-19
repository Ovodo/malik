import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
const ContactMe = () => {
  return (
    <div
      id='contact'
      className=' mt-20 flex flex-col md:flex-row gap-4 justify-between p-5  bg-white w-full lg:w-[85%] m-auto rounded-xl'
    >
      <div className='w-full md:w-1/2'>
        <h3 className='font-bold text-[52px] mb-2'>Contact</h3>

        <div className='mb-5'>
          There are many variations of passages of Lorem Ipsu available. but the
          majority have suffered alte.
        </div>
        <div className='flex gap-2 my-4'>
          <div className='w-[40px] h-[40px] grid place-content-center '>
            <FaLocationDot size={30} />
          </div>
          <div>
            <p>Address:</p>
            <p className='font-bold'> Beverly Hills, CA, USA.</p>
          </div>
        </div>

        <div className='flex gap-2 my-4'>
          <div className='w-[40px] h-[40px] grid place-content-center '>
            <AiOutlineMail size={30} />
          </div>
          <div>
            <p>Email:</p>
            <p className='font-bold'>adavs1@yahoo.com</p>
          </div>
        </div>

        <div className='flex gap-2 my-4'>
          <div className='w-[40px] h-[40px] grid place-content-center '>
            <BsTelephoneFill size={30} />
          </div>
          <div>
            <p>Phone:</p>
            <p className='font-bold'>+1 949 372 9715</p>
          </div>
        </div>
      </div>

      <div className='w-full borde h-[500px] border-black flex flex-col justify-between md:w-1/2'>
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
        <button className='flex w-full rounded-md justify-center items-center text-white bg-[#132238] p-3 gap-3'>
          <span>Submit</span>
          <IoMdSend size={30} />
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
