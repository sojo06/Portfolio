import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { arrow01, arrow02,  lines } from "@/constants/assets";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "@/constants/motion";
import SplineScene from "./magicui/Spline";
function Hero() {
  return (
    <section className="pl-20  pr-20 flex min-h-screen items-center bg-gradient-to-b from-[#1f2937] to-black ">
      <div className="container flex flex-col-reverse items-center justify-between gap-y-12 md:flex-row ">
        <BackgroundBeams />
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center gap-y-7 text-center md:w-1/2 md:items-start md:text-start"
        >
          <img
            src={arrow01}
            className="absolute right-0 top-0 hidden w-16 -translate-y-full sm:block lg:w-20"
          />
          <div className="flex flex-col gap-y-4">
            <h1 className="text-[clamp(2.25rem,4vw,3.75rem)] leading-normal font-bold text-white">
              Hi Iam <span className="text-[#FFB514]">Soham Joshi</span>
            </h1>
            <h2 className="text-[clamp(2rem,4vw,3rem)] leading-normal font-bold text-white">
              Iam
              <span className="text-[#1465FF]">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1300}
                  deleteSpeed={25}
                  typeSpeed={80}
                  loop={0}
                  words={[" Full Stack Developer", " backend Developer"]}
                />
              </span>
            </h2>
            <p className="text-lg font-normal text-[#71717A]">
              I am deeply passionate about exploring and understanding various
              technologies within the realm of computer science.
            </p>
          </div>
          <Link to={"/contact"}>
            <InteractiveHoverButton className="bg-[#1465FF] text-white">
              Contact
            </InteractiveHoverButton>
          </Link>
          <img
            src={arrow02}
            alt=""
            className="absolute -bottom-4 left-0 hidden w-12 translate-y-full md:block lg:w-16"
          />
        </motion.div>
        {/* {photo} */}
        <motion.div variants={rightSideVariants} initial="hidden" animate="visible" className="relative flex  justify-center md:w-1/2 ">
          {/* <img src={photo} alt="" /> */}
          {/* <CardContainer className="inter-var h-[400px] w-[400px] flex justify-center items-center">
            <CardItem translateZ="100" className="w-full h-full flex">
              <img
                src={profilepicture}
                className="w-full h-full object-contain rounded-full  border-transparent ring-4 ring-blue-500 shadow-md shadow-blue-500/50"
                alt="thumbnail"
              />
              <BorderBeam duration={8} size={300} />
            </CardItem>
          </CardContainer> */}
          <div className=" hidden md:block md:overflow-hidden md:h-[800px] md:w-[800px]">
          <SplineScene/>

          </div>
          <img src={lines} className="absolute  w-10 md:w-14 left-100" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
