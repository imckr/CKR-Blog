import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Rain from "../assets/rainwater.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer/Footer";

const BlogPage: React.FC = () => {
  useGSAP(() => {
    gsap.from(".Blog-Heading", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(1.7)",
    });
    gsap.from(".Blog-Date", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(1.7)",
    });
    gsap.from(".Blog-Para", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(1.7)",
    });
    gsap.from(".Blogs-Link", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "back.inOut(1.7)",
    });
  });

  return (
    <>
      <Navbar circleIndex={0} />
      <h1 className="Blog-Heading pt-20 px-32 pb-8 font-cabin font-semibold text-5xl">
        The hug of homecoming: Hedonism in the natural world
      </h1>
      <div className="Blog-Date flex flex-col">
        <p className="text-right text-secondary mx-32 pb-4 font-cabin font-semibold">
          Feb 23, 2024
        </p>
        <div className="mx-32 h-60 overflow-hidden">
          <img className="w-full" src={Rain} alt="" />
        </div>
        <hr className="mt-8 mx-32 h-[2px] bg-primary" />
      </div>
      <div className="Blog-Para px-32 py-10">
        <pre className="leading-7 tracking-normal text-primary font-cabin font-semibold text-xl whitespace-pre-wrap">
          {`“Nature is not a place to visit. It is home.”

– Gary Snyder

In a very real sense, mountains and valleys, the seas and the skies, the sun and the earth, the trees and the flowers constitute our home, our natural habitat.

Growing up in the modern developed world we can easily come to believe that towns and cities – the urban and artificial environment – is where we naturally belong. But our brains and bodies, which evolved over thousands of years, were designed by and designed for an environment very different to the one we live in now.
Throughout our evolutionary history we lived in very close connection to the land, with a very close kinship with other creatures. Our physiological system evolved to survive in wild, natural environments and developed a love and kinship for these places that lives on in our DNA.

This connection with the land combined with the kinship we would have felt with other living things that shared the land as their home has hardwired in us a strong sense of the natural world as ‘home’, and the importance of connection with all of life as being essential to our well-being.

This ‘love for life’ or biophilia, is a basic need in human beings. But unfortunately, because of the increasingly urbanised nature of the modern world, many of us have become disconnected from nature and suffer from what Richard Louv calls ‘Nature-deficit disorder’. We have been left deprived of something that was a source of so much spiritual sustenance and nourishment since we first walked the earth, a loss which has undoubtedly effected our collective health and well-being.

Science is now backing up what most of us who have spent any amount of time in the outdoors intuitively know: Nature is good for us. Spending time in nature has been shown to decrease stress, alleviate depression and anxiety, improve memory, creativity, and cognitive functioning, as well as increase energy levels, boost immunity, and decrease inflammation.

The fact that so many of us are being deprived of something which is so essential for our well-being is a major health concern.

All of this is not to suggest that there is anything wrong with cities or that we should all go back to living off the land – far from it. Cities and towns are wonderful places to live and by and large filled with nature – if we take the time to explore.

But if we care about our own health and well-being (not to mention the healthy development of our children) it is essential that we take the time to make an effort to connect with the natural world on a regular basis.
This is not another health ‘should’. Our bodies and minds crave the return of this connection. Contact with the wild is a purely pleasurable experience. It is intrinsically rewarding. Consider the cornucopia of sensual experiences involved in this healthy hedonism which we are all familiar with:

The warmth of the sun against the skin; a gentle summer breeze; birds singing on a quiet spring morning; the calming sounds of waves lapping against the shore; a beautiful sunset; a grand mountain vista; the broad sweep of lush green valleys; clear blue skies; the stars and the moon at night; the scent of ripe fruit or roses in bloom; the glimmer of light on the ocean; the feel of sand or soil under foot; finding shade in the solidity of a tree; watching birds in flight with their great patterns of movement; the joy of dogs running and playing…

In the practice of nature connection there is none of the coercion often involved in other healthy habits like exercise and diets, nor the hangover of other pleasurable experiences like food and drink. Yet nature connection provides the health benefits of the former and the intoxication and bliss of the latter.
Think of it as the hug of homecoming.`}
        </pre>
      </div>
      <hr className="my-4 mx-32 h-[2px] bg-primary" />

      <div className="Blogs-link px-32 pb-4">
        <h1>Coming soon....</h1>
        <h1>Coming soon....</h1>
        <h1>Coming soon....</h1>
      </div>
      <Footer circleIndex={0}/>
    </>
  );
};

export default BlogPage;
