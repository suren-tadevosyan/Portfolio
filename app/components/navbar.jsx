"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topBar = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerBar = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomBar = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-20 flex items-center justify-between px-4 sm:px-12 lg:px-20 xl:px-48 text-xl ">
      <div className="hidden md:flex gap-3 xl:w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo  */}
      <div className=" h-20 py-2 z-50 items-ccenter md:hidden lg:flex xl:w-1/3 xl:justify-center ">
        <Link
          href="/"
          className="w-25 h-12 relative flex justify-center items-center pt-2"
        >
          <Image src="/logo1.png" alt="linkedin" width={65} height={10} />
        </Link>
      </div>

      {/* Social  */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link
          href="https://www.linkedin.com/in/suren-tadevosyan-964447279/"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="https://github.com/suren-tadevosyan" target="_blank">
          <Image src="/github.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="#" target="_blank">
          <Image src="/facebook.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="#" target="_blank">
          <Image src="/instagram.png" alt="linkedin" width={24} height={24} />
        </Link>
      </div>

      {/* // Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 o relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topBar}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerBar}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomBar}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute z-40 top-0 left-0 w-screen h-full bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl "
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariant}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
