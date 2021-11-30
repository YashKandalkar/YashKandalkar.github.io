import React, { forwardRef } from "react";
import "./Footer.css";
import yash from "../../assets/yash.jpg";

const Footer = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      id="footer-container"
      className="text-center mt-8 pt-48 relative"
    >
      <h1
        style={{
          fontFamily: "'Valorant'",
          left: "50%",
          top: "10%",
          transform: "translate(-50%,-50%)",
          zIndex: 2,
        }}
        className="text-3xl sm:text-4xl text-gray-900 text-center absolute"
      >
        ABOUT ME
      </h1>
      <h1
        style={{
          fontFamily: "'Valorant'",
          left: "50%",
          top: "10.5%",
          transform: "translate(-50%,-50%)",
          zIndex: 1,
          letterSpacing: 8,
        }}
        className="text-4xl sm:text-6xl text-gray-300 space-x-9 text-center absolute"
      >
        ABOUT ME
      </h1>
      {/* left vertical text */}
      <h1
        style={{
          fontFamily: "'Valorant'",
          left: "5%",
          top: "50%",
          transform: "translate(-50%,-50%) rotate(180deg)",
          writingMode: "vertical-rl",
        }}
        className="text-4xl md:block hidden text-gray-900 text-center absolute"
      >
        ABOUT ME
      </h1>
      <div className="flex flex-col justify-center mx-2 lg:mx-28 ">
        <div
          data-aos="zoom-in"
          className=" p-4 rounded-lg shadow-xl mb-60"
          style={{
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
          }}
        >
          <h3 className="text-xl sm:text-left text-center font-bold">
            Hey, hello there!
          </h3>
          <div className="block mr-4 text-gray-900">
            <img
              src={yash}
              alt="yash"
              className={"m-3 imgimg box-border"}
              style={{}}
            />
            <p className="box-border text-justify">
              I am Yash Kandalkar. I started coding when I was 16. I started
              out with Python since it is very easy to learn for a beginner and
              also teaches many programming principles. Now, I am primarily a
              Web Developer and I work with ReactJS. I have also learnt React
              Native and developed an application for a 3 month hackathon. I
              also contribute to open source whenever I get time, I completed
              last year's Hacktoberfest. I've contributed to projects with huge
              codebases like SkiftOS which is an open source Linux based
              operating system written in C/C++ and other projects like
              Supabase which is an open source serverless backend, and
              GitHub-profile-readme-generator, a tool to generate your GitHub
              profile readme. Apart from development, I also like solving
              problems and participating in rated competitive coding contest on
              codechef. I was an executive member of our college's codechef
              chapter, in which we had to take sessions turn by turn to teach
              other students some Competitive Programming concepts and conduct
              activities in our college to increase the coding culture in our
              college. And for this academic year I have been selected as the
              Competitive Programming Lead, where we will conduct more such
              sessions. I am also a part of our college's recently created
              Google Developer Student Club and various other development
              communities like EddieHub, SidHacks, etc. I always copy-paste
              this quote whenever I have a chance-
            </p>
            <p className="text-center italic">
              Don’t let schooling interfere with your education.
              <br />- Mark Twain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
