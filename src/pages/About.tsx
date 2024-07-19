import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar/Navbar";
import myImage from "../assets/myImg1.svg";
import ButtonBg from "../assets/ButtonBg.svg";
import ButtonBg2 from "../assets/ButtonBg2.svg";
import Footer from "../components/Footer/Footer";

const About: React.FC = () => {

  useGSAP(() => {
    gsap.from(".Me", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(1.7)",
    });
    gsap.from(".About", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "back.inOut(1.7)",
    });
    gsap.from(".Para", {
      opacity: 0,
      duration: 2,
      ease: "back.inOut(1.7)",
    });
  });

  const handleEmailRedirect = () => {
    window.location.href = "mailto:chinturajwal@gmail.com";
  };

  return (
    <>
      <Navbar circleIndex={1} />
      <div className="flex flex-row justify-between w-full px-36 gap-32 my-40 max-[1050px]:px-16 max-[1440px]:gap-24 max-[900px]:flex-col">
        <div className="flex flex-col justify-around">
          <h1 className="Me text-8xl font-inter font-extrabold leading-normal mb-12 max-[1440px]:text-7xl max-[900px]:text-center">
            ABOUT <br />
            ME ?
          </h1>
          <img className="About" src={myImage} alt="" />
        </div>

        <div className="flex flex-col justify-between w-1/2 font-cabin font-bold text-xl leading-9 max-w-[45rem] max-[1441px]:text-xl max-[1080px]:text-base max-[900px]:w-full">
          <div className="Para flex flex-col gap-5">
            <p>
              I have a knack for creating stunning digital experiences and an
              equally impressive talent for forgetting where I put my phone five
              minutes ago. I’m Chandra, a Graphic and UI/UX Designer who’s also
              a programmer.
            </p>
            <p>
              My brain is a fascinating place: it’s like a high-powered computer
              with a memory card that’s always just a bit too full. I can design
              an intricate interface or debug a tricky code issue, but don’t ask
              me where I left my keys – they’ve probably embarked on an
              adventure of their own.
            </p>
            <p>
              With years of experience turning complex ideas into user-friendly
              designs, I’ve learned that a little forgetfulness can actually be
              a blessing. It keeps things interesting and ensures I’m always
              looking at problems with fresh eyes (since I rarely remember the
              first solution I came up with ).
            </p>
            <p>
              So, if you need someone who can deliver top-notch design and code,
              all while providing a good laugh about misplaced post-it notes and
              forgotten passwords, I’m your person. Let’s create something
              unforgettable – or at least, let’s hope I can remember where I
              saved the file !
            </p>
          </div>
          <div
            className="flex justify-end w-full my-20 cursor-pointer"
            onClick={handleEmailRedirect}
          >
            <img
              className="z-10 absolute w-48 mt-2 mr-2 max-[1080px]:w-32"
              src={ButtonBg}
              alt=""
            />
            <img
              className="z-10 max-[1080px]:w-32 absolute w-48 hover:mr-2 hover:mt-2 transition-all duration-200 ease-in"
              src={ButtonBg2}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer circleIndex={1}/>
    </>
  );
};

export default About;
