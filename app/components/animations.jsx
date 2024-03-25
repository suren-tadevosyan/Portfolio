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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveDimensions = {
    height: windowWidth < 600 ? 300 : 500,
    width: windowWidth < 600 ? 300 : 500,
  };

  return <Lottie options={defaultOptions} {...responsiveDimensions} />;
};

export const ByAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: byAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={500} width={500} />;
};
