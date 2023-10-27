import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Button } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-yellow-600 font-semibold ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Arpit Singh
        </h1>

        <div className="text-4xl flex gap-3 sm:7xl  pt-2">
          <h2 className=" font-bold text-[#8892b0]">I'm a </h2>
          <p className="text-yellow-600">
            <Typewriter
              options={{
                strings: ["Front End developer", "Coder", "Student"],
                autoStart: true,
                delay: "200",
                loop: true,
                skipAddStyles: true,
              }}
            />
          </p>
        </div>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a front end developer specializing in building (and ocasionally
          designing) exceptional digital experiences, Currently, I'm focused on
          building responsive web applications
        </p>

        <div>
          <Button
            to="work"
            smooth="true "
            className="text-white group border-2  px-6 py-3 my-2 flex items-center font-semibold hover:bg-yellow-600 hover:border-yellow-600 "
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
