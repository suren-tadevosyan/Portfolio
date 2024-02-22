"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full z-1  overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center lg:flex-row-reverse px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 w-full lg:h-2/3 lg:mb-40 lg:w-1/2 lg:mg-r-20 relative">
          <Image src="/img.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 sm:gap-5 items-center justify-center">
          {/* TITLE */}
          <h1 className="xs:text-2xl sm:text-3xl lg:text-6xl lg:pb-5 md:text-4xl md:mb-5 font-bold overflow-y-hidden ">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 mb-4  justify-center lg:justify-start lg:mb-0">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white  hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
