import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { ScaleLoader } from "react-spinners";

import useFonts from "@/hooks/useFonts";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../api/contact/config";
import { motion } from "framer-motion";
const ContactMe = () => {
  const { poppins, libre } = useFonts();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [no, setNo] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleCaptchaChange = (value: any) => {
    // value will be null if the user fails the captcha challenge
    setIsCaptchaVerified(value !== null);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    if (isCaptchaVerified) {
      // Proceed with form submission
      const res = await axios.post(`${baseUrl}/api/contact`, {
        name,
        company,
        email,
        website,
        job,
        country,
        message,
        no,
      });

      alert(res.data.message);

      console.log("Form submitted!");
      setIsLoading(false);
    } else {
      // Display an error message or prevent form submission
      console.log("Captcha not verified. Please complete the captcha.");
      alert("Captcha not verified. Please complete the captcha.");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div
        className={`text-black top-0 flex items-center justify-center left-0 w-full h-full`}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "55%" }}
          exit={{ width: "0%" }}
          className='bg-white rounded-md shadow-sm shadow-slate-900 py-2 z-20 relative  flex flex-col items-center justify-center w-[55vw] h-[200px]'
        >
          <ScaleLoader color='#264653' />
        </motion.div>
      </div>
    );
  }

  return (
    <div
      id='contact'
      className=' mt-20 pt-28 flex flex-col relative lg:flex-row lg:justify-center gap-4 items-center lg:items-start justify-between p-5  bg-white w-full lg:w-[95%] m-auto rounded-xl'
    >
      <h3
        style={libre.style}
        className='font-semibold w-full text-center absolute top-6 mx-auto text-[34px]  mb-2'
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
            onChange={(e) => {
              setName(e.target.value);
            }}
            className='w-[48%]  outline-none border border-b-gray-300 rounded-sm py-2 px-2'
          />
          <input
            placeholder='Company'
            name='name'
            type='text'
            required
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            className='w-[48%]  outline-none border border-b-gray-300 rounded-sm py-2 px-2'
          />
        </div>
        <div className='flex justify-between'>
          <input
            placeholder='Job Title'
            name='Job'
            type='text'
            required
            onChange={(e) => {
              setJob(e.target.value);
            }}
            className='w-[48%]  outline-none border border-b-gray-300 rounded-sm py-2 px-2'
          />
          <input
            placeholder='Website'
            name='website'
            type='text'
            required
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            className='w-[48%]  outline-none border border-b-gray-300 rounded-sm py-2 px-2'
          />
        </div>

        <div className=''>
          <input
            placeholder='Email Address*'
            name='email'
            type='email'
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='w-full outline-none border border-b-gray-300  py-3 px-2'
          />
        </div>
        <div className='flex justify-between'>
          <input
            placeholder='City/Country*'
            name='City'
            type='text'
            required
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            className='w-[45%]  outline-none border border-b-gray-300  py-3 px-2'
          />
          <input
            placeholder='Contact Number'
            name='contact'
            type='text'
            required
            onChange={(e) => {
              setNo(e.target.value);
            }}
            className='w-[45%]  outline-none border border-b-gray-300  py-3 px-2'
          />
        </div>

        <div className=''>
          <textarea
            name='text'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder='Enter your message here'
            className='w-full py-3 px-2 h-[80px] border border-gray-300'
            id=''
            rows={5}
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey='6LcgdB4pAAAAAB1184dPfPBdBHMWmuTzOOCCOLQP'
          onChange={handleCaptchaChange}
        />
        <button
          disabled={!isCaptchaVerified}
          onClick={handleSubmit}
          className='flex w-full disabled:opacity-50 rounded-md justify-center items-center text-white bg-header-color p-3 gap-3'
        >
          <span>Submit</span>
          <IoMdSend size={30} />
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
