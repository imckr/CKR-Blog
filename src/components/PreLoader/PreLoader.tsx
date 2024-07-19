import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SideImg from "../../assets/sideImage.svg";

const PreLoader: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    let count = 0;
    const counts = setInterval(update, 30);
    function update() {
      setPercent(++count);
      if (count === 100) {
        clearInterval(counts);
      }
    }
  }, [setPercent]);

  useGSAP(() => {
    gsap.to(".preloader", {
      duration: 0.5,
      ease: "linear",
      opacity: 0,
      delay: 4,
    });
  });

  return (
    <>
      <div className="preloader font-Jet text-3xl font-medium w-full h-screen flex content-center">
        <img src={SideImg} alt="" />
        <div className="flex gap-8 absolute top-1/2 right-1/3">
          <h1 className="">{percent}%</h1>
          <h1 className="">INSPIRING.....</h1>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
