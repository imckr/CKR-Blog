import React, {useRef} from "react";
import circleMarkAbout from "../assets/circleMarkAbout.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


interface AboutL {
  value: number;
}

const AboutLink: React.FC<AboutL> = (props) => {

  const circleRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.from(circleRef.current, { opacity:0, duration:0.5, ease: "power1.inOut"});
  });

  return (
    <div className="flex content-center">
      <img
        ref={circleRef}
        className="circle2 absolute"
        src={props.value ? circleMarkAbout : ""}
        alt=""
      />
      <p
        style={{ color: props.value ? "#000000" : "#444444" }}
        className="font-amiko text-sm mx-6 my-4 font-extrabold"
      >
        About Me
      </p>
    </div>
  );
};

export default AboutLink;
