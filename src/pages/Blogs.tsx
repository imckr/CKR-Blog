import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Read from "../assets/Read.svg";
import ReadB from "../assets/ReadB.svg";
import BlogBox from "../container/BlogBox";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Datas from "../MOCK_DATA_ARTICLE.json";
import Footer from "../components/Footer/Footer";

const Blogs: React.FC = () => {
  useGSAP(() => {
    gsap.from(".firstBlog", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(1.7)",
    });
    gsap.from(".OtherBlog", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(1.7)",
    });
  });

  return (
    <>
      <Navbar circleIndex={0} />
      <div className="firstBlog font-cabin flex gap-12 mx-32 my-12">
        <div className="flex flex-col flex-1 gap-8">
          <h1 className=" font-semibold text-5xl">
            The hug of homecoming: Hedonism in the natural world
          </h1>
          <p className="font-cabin font-semibold text-secondary">
            Feb 23, 2024
          </p>
        </div>
        <div className="flex-1 gap-8">
          <p className="text-xl font-medium ">
            Growing up in the modern developed world we can easily come to
            believe that towns and cities – the urban and artificial environment
            – is where we naturally belong. But our brains and bodies, which
            evolved over thousands of years, were designed by and designed for
            an environment very different to the one we live in now.
          </p>
          <Link to={`/BlogPage?id=0`}>
            <div className="flex justify-end my-4">
              <img className="absolute" src={ReadB} alt="" />
              <img
                className="absolute rotate-[-6deg] hover:rotate-0 transition-all duration-200 ease-in"
                src={Read}
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
      <hr className="my-4 mx-32 h-[2px] bg-primary" />
      <div className="OtherBlog grid grid-cols-2 justify-end mx-32 my-9 gap-16">
        {Datas.slice(0)
          .reverse()
          .map((data) => (
            <BlogBox
              key={data.id}
              id={data.id}
              headline={data.headline}
              paragraph={data.paragraph}
              date={data.date}
              image={data.image}
            />
          ))}
      </div>
      <p className="font-amiko text-center p-4">More coming soon....</p>
      <Footer circleIndex={0} />
    </>
  );
};

export default Blogs;
