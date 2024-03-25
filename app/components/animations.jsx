import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Anim from "../../public/programmer.json";

export const WelcAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const responsiveDimensions = {
    height: windowWidth < 600 ? 300 : 500,
    width: windowWidth < 600 ? 300 : 500,
  };

  return <Lottie options={defaultOptions} {...responsiveDimensions} />;
};
