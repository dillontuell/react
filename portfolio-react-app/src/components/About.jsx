import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello, it's a pleasure to meet you. Please feel free to have a
              look around.
            </p>
          </div>
          <div>
            <p>
              The world of programming ignited something inside me that I knew I
              had to pursue. I had caught fire coding. That is when I realized;
              the spark I was missing ignited the instant I clicked play on my
              first coding tutorial video. Since then, I have continued to learn
              and grow my skills and understanding of current technologies. Web
              development allows me to incorporate creativity and logic to
              create something new. The satisfaction of seeing something you
              created is part of what drives my passion and pushes me to try new
              ideas (in a separate Git branch, of course).{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
