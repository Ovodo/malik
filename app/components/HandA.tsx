"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import AwardImg from "@/public/assets/awa.png";
import useFonts from "@/hooks/useFonts";

const awards = [
  `TEXT 1`,
  `TEXT 2`,
  `TEXT 3`,
  `TEXT 4`,
  `TEXT 5`,
];
const HandA = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const { poppins, libre } = useFonts();
  const [stopslide, setStopSlide] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (stopslide) {
       return // console.log(stopslide)
      } else {
       // console.log('work',stopslide)

       handleDragEnd({}, {offset:{x:300}})
      }
    }, 3000);

    // Clear the interval when the component unmounts or on cleanup
    return () => clearInterval(intervalId);
  }, [stopslide])

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );

      const setNewIndex = currentIndex >= 4 ? 1 : currentIndex + 1;
      setCurrentIndex(setNewIndex);

      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      //  console.log(currentIndex)
      const setNewIndex = currentIndex <= 0 ? 4 : currentIndex - 1;
      setCurrentIndex(setNewIndex);
      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];
  const colors = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
    //console.log(currentIndex, info)
    const swipeThreshold = 40;
    if (info?.offset?.x > swipeThreshold) {
      handleNext();
    } else if (info?.offset?.x < -swipeThreshold) {
      handleBack();
    } else {
      handleNext();
    }
  };


  const handleSlideElementClick = (index) => {
    setStopSlide(!stopslide)
  }
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
      <div className='flex items-center flex-col justify-around  min-h-[70vh] overflow-hidden w-full relative'>
        {awards.map((text, index) => (
          <motion.div
            key={index}
            className={`absolute md:w-[25%] w-[80%] rounded-[20px] ${
              colors[index]
            } py-12`}
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            onClick={()=>handleSlideElementClick(index)}
          >
            
            <p style={poppins.style} className='p-3 text-[18px] font-semibold'>
              {text}
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
