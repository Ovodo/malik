"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import AwardImg from "@/public/assets/awa.png";
import useFonts from "@/hooks/useFonts";

const award = [
  {
    text: `National Scholarship for Free Secondary Education, Federal Government of Nigeria, 1986`,
    color: "center",
    animation: "center",
  },
  {
    text: `Fellow @Institute of Chartered Management Consultants`,
    color: "left1",
    animation: "left1",
  },
  {
    text: `Best graduating Mathematic Senior Secondary School Student, 1992`,
    color: "left",
    animation: "left",
  },
  {
    text: `Fellow @Institute of Leadership, Entrepreneurship, and Corporate Governance`,
    color: "right",
    animation: "right",
  },
  {
    text: `Management Consultant with Distinction in Time Management (London Graduate School).`,
    color: "right1",
    animation: "right1",
  },
];
const HandA = () => {
  // [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const { poppins, libre } = useFonts();
  const [awards, setAward] = useState(award);
  // const [positions, setPositions] = useState([
  //   "center",
  //   "left1",
  //   "left",
  //   "right",
  //   "right1",
  // ]);

  const setIndexOnClick = (clickedIndex: number) => {
    console.log(
      `INDEX CkD: ${awards[clickedIndex].color},  \nINDEX IN 2:${awards[2].color}, \n`,
      clickedIndex,
      currentIndex
    );

    const newIndexes = [...awards];
    const frontIndex = newIndexes.findIndex(
      (item) => item.animation === "center"
    );
    const temp = newIndexes[frontIndex].animation;
    const click = newIndexes[clickedIndex].animation;
    newIndexes[frontIndex].animation = click;
    newIndexes[clickedIndex].animation = temp;
    setAward(newIndexes);
    setCurrentIndex(clickedIndex);
  };

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  // const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
  //   const swipeThreshold = 40;
  //   if (info?.offset?.x > swipeThreshold) {
  //     handleNext();
  //   } else if (info?.offset?.x < -swipeThreshold) {
  //     handleBack();
  //   } else {
  //     handleNext();
  //   }
  // };
  // const handleNext = () => {
  //   setPositionIndexes((prevIndexes) => {
  //     const updatedIndexes = prevIndexes.map(
  //       (prevIndex) => (prevIndex + 1) % 5
  //     );
  //     return updatedIndexes;
  //   });

  //   const setNewIndex = currentIndex >= 4 ? 1 : currentIndex + 1;
  //   setCurrentIndex(setNewIndex);
  // };

  // const handleBack = () => {
  //   setPositionIndexes((prevIndexes) => {
  //     const updatedIndexes = prevIndexes.map(
  //       (prevIndex) => (prevIndex + 4) % 5
  //     );
  //     const setNewIndex = currentIndex <= 0 ? 4 : currentIndex - 1;
  //     setCurrentIndex(setNewIndex);
  //     return updatedIndexes;
  //   });
  // };

  return (
    <div
      id='handa'
      className='flex  flex-col gap-10 pb-12 md:px-20 m-auto bg-white overflow-hidden'
    >
      <h2
        style={libre.style}
        className='text-center pt-[28px] font-semibold text-[34px]'
      >
        Honors And Awards
      </h2>
      <div className='flex items-center  sm:mx-5 flex-col justify-around  min-h-[60vh] overflow-hidden w-[95%] mx-auto lg:w-full relative'>
        {awards.map((comp, index) => (
          <motion.div
            key={index}
            className={`absolute lg:w-[25%] cursor-pointer w-[80%] rounded-[20px] bg-header-color text-white py-12 bg-header`}
            animate={comp.animation}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={() => setIndexOnClick(index)}
            onClick={() => setIndexOnClick(index)}
          >
            <Image
              src={AwardImg}
              alt=''
              className='relative bottom-5 lg:w-full'
            />
            <p style={poppins.style} className='p-3 text-[18px]  font-normal'>
              {comp.text}
            </p>
          </motion.div>
        ))}
      </div>
      <div className='flex justify-center gap-2 mt-4'>
        {awards.map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full ${
              index === currentIndex ? "bg-gray-800 w-[25px]" : "bg-gray-400"
            } `}
          />
        ))}
      </div>
    </div>
  );
};

export default HandA;
