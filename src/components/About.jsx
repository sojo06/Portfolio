import React from 'react'
import { AnimatedGridPattern } from './magicui/animated-grid-pattern'
import { cn } from "@/lib/utils";
import Sectiontitle from './Sectiontitle';
import { rhombus } from '@/constants/assets';
import { motion } from 'framer-motion';
import { centerVariants } from '@/constants/motion';
import { profilepicture } from "@/constants/assets";

function About() {
  return (
    <div className="relative flex h-auto w-full items-center justify-center overflow-hidden rounded-lg bg-black p-6 md:p-20">
  <AnimatedGridPattern
    numSquares={500}
    maxOpacity={1}
    duration={3}
    repeatDelay={0.2}
    className={cn(
      "[mask-image:radial-gradient(500px_circle_at_center,black,transparent)]",
      "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
    )}
  />

  <motion.div
    variants={centerVariants}
    initial="hidden"
    whileInView="visible"
    className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-y-9 mt-10"
  >
    {/* Decorative rhombus image */}
    <img
      src={rhombus}
      alt=""
      className="absolute right-[10%] top-10 w-10 sm:w-12 md:w-16 lg:w-20"
    />

    {/* Section title */}
    <Sectiontitle title="ABOUT ME" sub="Who I Am" />

    {/* Responsive content container */}
    <div className="flex flex-col md:flex-row items-center md:justify-center gap-10 md:gap-20 text-white px-4">
      {/* Text */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-10 font-medium lg:font-bold max-w-full md:max-w-[60%] text-white">
  I'm a passionate Computer Engineering student with a deep curiosity for technology and software development. My core expertise lies in building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js), along with other modern tools and frameworks. I take pride in crafting clean, efficient, and user-focused solutions that solve real-world problems. Whether it’s developing responsive interfaces or architecting robust backends, I thrive on transforming ideas into impactful digital experiences. I'm always eager to learn, push boundaries, and evolve as a developer in this ever-changing tech landscape.
</p>

      {/* Profile Image */}
      <img
        src={profilepicture}
        alt="Profile"
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover rounded-full"
      />
    </div>
  </motion.div>
</div>

  )
}

export default About