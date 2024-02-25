"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Get in Touch";

  const form = useRef();

  const sendEmail = (e) => {
    console.log("semnd");
    e.preventDefault();
    setError(false);

    emailjs
      .sendForm(
        "service_e70w192",
        "template_p5dbs1o",
        form.current,
        "Y1RGY__W2p18lTs7r"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full z-1000 flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 xs:justify-between  ">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 xs:h-1/6 lg:h-full xs:text-4xl lg:w-1/2 flex items-center justify-center lg:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 xs:h-3/4 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 relative "
        >
          <span>Dear Suren,</span>
          <textarea
            rows={3}
            className="bg-transparent z-100 border-b-2 border-b-black outline-none resize-none s:py-2 xs:py-6 "
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-black">
            Send
          </button>
          {success && (
            <motion.div
              initial={{ y: "200vh" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.4 }}
              className="   md:relative bottom-0 left-0 w-full text-center lg:absolute lg:bottom-20 lg:bg-transparent md:bg-transparent py-0  xs:bg-black xs:py-5  rounded  xs:absolute"
            >
              <span className=" text-green-600  lg:font-semibold    ">
                Your message has been sent successfully!
              </span>
            </motion.div>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
