import { forwardRef, useRef } from "react";
import { Github, Instagram, Twitter, Linkedin } from "@geist-ui/react-icons";

import { Link } from "react-scroll";
import NavBar from "../NavBar/NavBar";
import "./Landing.css";

const Landing = forwardRef(({ fixNavbar, inView }, ref) => {
  const roleRef = useRef();
  return (
    <div id="landing-container" ref={ref} className={"relative "}>
      <NavBar fixNavbar={fixNavbar} inView={inView} />

      <section
        ref={ref}
        style={{ marginTop: fixNavbar ? "0" : 0 }}
        className="pt-36 px-2"
      >
        <div className="flex landingItems flex-col text-center items-center mb-4 sm:mb-0">
          <h1
            style={{
              fontFamily: "Calibre",
              letterSpacing: 1,
              color: "#ccd6f6",
              fontWeight: 600,
            }}
            className="mb-6 sm:mb-3 mt-12 sm:mt-0 text-gray-900 leading-none text-5xl sm:text-6xl md:text-8xl"
          >
            Yash Kandalkar
          </h1>
          <p
            ref={roleRef}
            className="mb-3 text-center text-3xl sm:text-4xl md:text-2xl text-gray-600 changing-line"
            style={{
              color: "#6c82b9",
              fontFamily: "Calibre",
            }}
          >
            {"Web Developer ~ Open Source"}
          </p>
          <p
            ref={roleRef}
            className="mb-3 mt-2 text-center max-w-sm text-xl text-gray-600 changing-line"
            style={{
              fontFamily: "Calibre",
            }}
          >
            I am a student developer, interested in
            <br /> Web Development, Open Source and
            <br /> Competitive programming
          </p>
          <div className="flex items-center flex-row mt-7">
            <a
              className="mr-3 text-gray-50"
              rel="noreferrer"
              target="_blank"
              href={"https://github.com/YashKandalkar"}
            >
              <Github color={"#6c82b9"} />
            </a>
            <a
              className="mr-3 text-gray-50"
              rel="noreferrer"
              target="_blank"
              href={"https://twitter.com/Yash__Kandalkar"}
            >
              <Twitter color={"#6c82b9"} />
            </a>
            <a
              className="mr-3 text-gray-50"
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/yash__kandalkar/"}
            >
              <Instagram color={"#6c82b9"} />
            </a>
            <a
              className=" text-gray-50"
              rel="noreferrer"
              target="_blank"
              href={"https://www.linkedin.com/in/yash-kandalkar-b5890b1aa/"}
            >
              <Linkedin color={"#6c82b9"} />
            </a>
          </div>
          <Link
            className="cursor-pointer"
            to="footer-container"
            smooth={true}
            duration={700}
          >
            <div
              id={"aboutMeButton"}
              data-aos="fade-up"
              data-aos-delay="12600"
            >
              <div
                style={{
                  fontFamily: "'Inter'",
                  color: "#41b7bf",
                  borderWidth: 1,
                  borderColor: "#41b7bf",
                }}
                className="px-4 relative accentButton py-2 rounded-sm mb-10 mt-12 bg-transparent border-2 text-gray-900  transition-all duration-300 ease-in-out"
              >
                About Me
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className="fixed bottom-0 left-6 z-40 hidden md:flex flex-col items-center">
        <div className="flex flex-col">
          <a
            className=""
            rel="noreferrer"
            target="_blank"
            href={"https://github.com/YashKandalkar"}
          >
            <Github color={"#6c82b9"} className="mb-6" strokeWidth={2} />
          </a>
          <a
            className=""
            rel="noreferrer"
            target="_blank"
            href={"https://twitter.com/Yash__Kandalkar"}
          >
            <Twitter color={"#6c82b9"} className="mb-6" strokeWidth={2} />
          </a>
          <a
            className=""
            rel="noreferrer"
            target="_blank"
            href={"https://www.instagram.com/yash__kandalkar/"}
          >
            <Instagram color={"#6c82b9"} className="mb-6" strokeWidth={2} />
          </a>
          <a
            className=""
            rel="noreferrer"
            target="_blank"
            href={"https://www.linkedin.com/in/yash-kandalkar-b5890b1aa/"}
          >
            <Linkedin color={"#6c82b9"} className="mb-6" strokeWidth={2} />
          </a>
        </div>
        <div
          style={{ height: "30vh", width: 2, backgroundColor: "#6c82b9" }}
        />
      </div>

      <div className="fixed bottom-0 right-6 z-40 hidden md:flex flex-col items-center">
        <div
          className="flex flex-col mb-6"
          style={{
            writingMode: "vertical-rl",
            letterSpacing: 2,
            color: "#6c82b9",
          }}
        >
          <a href={"mailto:yashsk.yk@gmail.com"}>yashsk.yk@gmail.com</a>
        </div>
        <div
          style={{ height: "20vh", width: 2, backgroundColor: "#6c82b9" }}
        />
      </div>
    </div>
  );
});

export default Landing;
