"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const items = [
  {
    id: 1,

    title: "React Blog app",
    desc: "Welcome to Space BLog App, a blog platform enabling users to share posts, comment, and connect via private messaging. Express yourself, engage with others, and dive into meaningful discussions effortlessly.",
    img: "/proj1.PNG",
    link: "https://activeusers--space-blog-project.netlify.app/",
    gitHub: "https://github.com/suren-tadevosyan/BlogProject",
  },
  {
    id: 2,

    title: "React Messenger(soon)",
    desc: "Experience instant communication with real-time updates. Messages are delivered and displayed to recipients without delay, enabling fluid conversations.",
    img: "/messenger.png",
    link: "https://react-messenger-st.netlify.app",
    gitHub: "https://github.com/suren-tadevosyan/Messenger",
  },

  // {
  //   id: 3,
  //   color: "from-violet-300 to-purple-300",
  //   title: "Vanilla Book App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "/proj1.PNG",
  //   link: "https://lama.dev",
  // },
  // {
  //   id: 4,
  //   color: "from-purple-300 to-red-300",
  //   title: "Spotify Music App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "/proj1.PNG",
  //   link: "https://lama.dev",
  // },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <motion.div
      className="h-full  "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center">
          My Works
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>

        <div
          style={{ background: "linear-gradient(to bottom, #536976, #292e49)" }}
          className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden"
        >
          <motion.div style={{ x }} className="flex">
            <div
              style={{
                background: "linear-gradient(to bottom, #536976, #292e49)",
              }}
              className="h-screen w-screen flex items-center justify-center overflow-x-normal "
            />
            {items.map((item) => (
              <div
                style={{
                  background: "linear-gradient(to bottom, #536976, #292e49)",
                }}
                className={`h-screen w-screen  flex items-center justify-center `}
                key={item.id}
              >
                <div className=" flex flex-col gap-5 text-white">
                  <h1 className="text-xl font-bold md:text-4xl  xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative rounded w-80 h-56 md:w-96 md:h-64  xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} className="rounded" alt="" fill />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-90 rounded">
                      <div className="text-white">
                        <Link href={item.gitHub} target="_blank">
                          <button className="p-10 mr-20  rounded hover:bg-gray-700">
                            <GitHubIcon
                              style={{
                                fontSize:
                                  window.innerWidth >= 800 ? "60px" : "30px",
                              }}
                            />
                          </button>
                        </Link>

                        <Link href={item.link} target="_blank">
                          <button className="p-10  rounded hover:bg-gray-700">
                            <RemoveRedEyeOutlinedIcon
                              style={{
                                fontSize:
                                  window.innerWidth >= 800 ? "60px" : "30px",
                              }}
                            />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-4">
        <h1 className="text-8xl">Do you need a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer SoftwareEngineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
