import React from "react";
import Box from "../assets/Box.svg";
import { Link } from "react-router-dom";
import Read from "../assets/Read.svg";
import ReadB from "../assets/ReadB.svg";

interface BlogBoxProps {
  id: number;
  headline: string;
  paragraph: string;
  date: string;
  image: string;
}

const BlogBox: React.FC<BlogBoxProps> = (props) => {
  return (
    <>
      <div
        className="otherBlog flex flex-col justify-between bg-no-repeat gap-8 bg-cover p-12 font-cabin font-semibold"
        style={{ backgroundImage: `url(${Box})` }}
      >
        <h1 className="text-3xl">{props.headline}</h1>
        <img className="w-full" src={props.image} alt="" />
        <p className="whitespace-pre-wrap">{props.paragraph}</p>
        <Link to={`/BlogPage?id=${props.id}`}>
          <div className="flex justify-end mb-12">
            <img className="absolute" src={ReadB} alt="" />
            <img
              className="absolute rotate-[-6deg] hover:rotate-0 transition-all duration-200 ease-in"
              src={Read}
              alt=""
            />
          </div>
        </Link>

        {/* To be removed */ <p>will get update soon....</p>}
      </div>
    </>
  );
};

export default BlogBox;
