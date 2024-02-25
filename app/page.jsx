"use client";

import Image from "next/image";
import Link from "next/link";

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
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col lg:gap-8 sm:gap-5 items-center lg:justify-center md:justify-center sm:justify-center xs:justify-between">
          {/* TITLE */}
          <h1 className="xs:text-xl xs:mt-5  sm:text-2xl lg:text-6xl lg:pb-5 md:text-3xl md:mb-5 font-bold overflow-y-hidden text-center mt-10">
            Step Inside My Digital Showcase!{" "}
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-center">
            Step into a realm where pixels dance and user experiences mesmerize.
            Greetings, visitor! I&apos;m thrilled to have you here. As a
            passionate front-end developer, I&apos;ve sculpted this digital
            haven to showcase my journey and creations.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 mb-4 md:justify-center lg:justify-center xs:justify-center lg:mb-0">
            <Link
              href="/projects"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-lg ring-1 ring-black hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
            >
              {" "}
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
