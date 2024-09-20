import React from "react";
// import Header from "./Header";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="h-screen place-content-center px-10">
        <h1 className="font-bold text-3xl">Hey, i'm Preeti</h1>
        <div className="text-2xl">
          I'm a passionate software engineer with extensive experience in
          React.js, Redux, JavaScript, Tailwind, and jQuery.
        </div>
      </div>
    </div>
  );
    /* <ReactTyped strings={[``]} typeSpeed={80} className="text-3xl " />
        <br />
        <ReactTyped className="text-2xl"
          strings=
          {[
            "I'm a passionate software engineer with extensive experience in React.js, Redux, JavaScript, Tailwind, and jQuery. I thrive on solving complex problems and bringing innovative solutions to life. My journey in tech is driven by curiosity and a relentless pursuit of excellence. When I'm not coding, you'll find me strumming my ukulele, lost in a good book, or painting a canvas with my latest inspiration. I love solving problems, whether it's debugging code or concocting the perfect coffee brew. Long walks fuel my creativity, and cooking is my way of bringing art to the table. Let's create something amazing together!",
          ]} typeSpeed={80}>
        </ReactTyped> */
};

export default Hero;
