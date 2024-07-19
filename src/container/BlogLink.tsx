import React, { useRef } from "react";
import circleMarkBlog from "../assets/circleMarkBlog.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BlogPProps {
  value: number;
}

const BlogLink: React.FC<BlogPProps> = (props) => {

  const circleRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.from(circleRef.current, { opacity: 0, duration: 0.5, ease: "power1.inOut" });
  });

  return (
    <>
      <div className="flex content-center">
        <img
          ref={circleRef}
          className="absolute"
          src={!props.value ? circleMarkBlog : ""}
          alt=""
        />
        <p
          style={{ color: !props.value ? "#000000" : "#444444" }}
          className="amiko text-sm px-6 py-3 font-extrabold"
        >
          Blog
        </p>
      </div>
    </>
  );
};

export default BlogLink;
