import { useState, forwardRef, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../NavBar/NavBar";
import arrowsDown from "../../assets/arrows-down.svg";
import "./Landing.css";

const roles = [
  "Web Developer",
  "Open Source Contributor",
  "Competitive Programmer",
];

const Landing = forwardRef(({ fixNavbar, inView }, ref) => {
  const roleRef = useRef();
  const [currentRoleLine, setCurrentRoleLine] = useState(0);

  useEffect(() => {
    let startTimer, iterationTimer;
    roleRef.current.onanimationstart = () => {
      startTimer = setTimeout(
        () =>
          setCurrentRoleLine((state) => {
            return state + 1;
          }),
        4500
      );
    };
    roleRef.current.onanimationiteration = () => {
      iterationTimer = setTimeout(
        () =>
          setCurrentRoleLine((state) => {
            return state + 1;
          }),
        4500
      );
    };

    return () => {
      clearTimeout(startTimer);
      clearTimeout(iterationTimer);
    };
  }, []);

  return (
    <div
      id="landing-container"
      ref={ref}
      style={{
        paddingTop: fixNavbar ? "5.5rem" : "2rem",
      }}
      className={"relative "}
    >
      <NavBar fixNavbar={fixNavbar} inView={inView} />

      <section ref={ref} style={{ marginTop: fixNavbar ? "10rem" : 0 }}>
        <div
          data-aos="fade-up"
          className="flex flex-col mt-20 text-center items-center mb-4 sm:mb-0"
        >
          <h1
            style={{
              fontFamily: "'Valorant'",
            }}
            className="mb-3 text-gray-900 font-bold leading-none text-4xl  pr-4 sm:text-6xl lg:text-8xl"
          >
            Yash Kandalkar
          </h1>
          <p
            ref={roleRef}
            className="mb-3 text-center text-2xl sm:text-4xl text-gray-600 changing-line"
            style={{ fontFamily: "'Valorant'" }}
          >
            {roles[currentRoleLine % roles.length]}
          </p>
          <div className="flex items-center flex-row mt-8">
            <a
              className="mr-2"
              rel="noreferrer"
              target="_blank"
              href={"https://github.com/YashKandalkar"}
            >
              <FontAwesomeIcon
                className="text-gray-900"
                icon={faGithub}
                size="2x"
              />
            </a>
            <a
              className="mr-2"
              rel="noreferrer"
              target="_blank"
              href={"https://twitter.com/Yash__Kandalkar"}
            >
              <FontAwesomeIcon
                className="text-gray-900"
                icon={faTwitter}
                size="2x"
              />
            </a>
            <a
              className="mr-2"
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/yash__kandalkar/"}
            >
              <FontAwesomeIcon
                className="text-gray-900"
                icon={faInstagram}
                size="2x"
              />
            </a>
            <a
              className=""
              rel="noreferrer"
              target="_blank"
              href={"mailto:yashsk.yk@gmail.com"}
            >
              <FontAwesomeIcon
                className="text-gray-900"
                icon={faEnvelope}
                size="2x"
              />
            </a>
          </div>
          <Link
            className=" cursor-pointer"
            to="footer-container"
            smooth={true}
            duration={700}
          >
            <div
              id="about-me-button"
              style={{ fontFamily: "'Inter'" }}
              className="px-4 relative py-2 mb-10 mt-12 bg-gray-900 text-gray-300  transition-all duration-300 ease-in-out"
            >
              About Me
            </div>
          </Link>
          <div className="flex flex-col my-2 items-center">
            <img src={arrowsDown} alt="arrows-down" style={{ width: 60 }} />
          </div>
        </div>
      </section>

      <svg
        viewBox="0 0 500 20"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-16 sm:mt-10 lg:mt-0"
      >
        <defs></defs>
        <path
          d="M 72.079 287.105 L 83.681 579.81 L 60.477 579.81 L 72.079 287.105 Z"
          shapeRendering="triangle 60.477 287.105 23.204 292.705 0.5 0 1@b71a4cbc"
          style={{ fill: "#e5e7eb" }}
          transform="matrix(-0.065796, 0.997833, -0.999849, -0.035227, 584.230286, -40.04438)"
        ></path>
        <path
          d="M 71.969 261.633 L 83.553 528.371 L 60.385 528.371 L 71.969 261.633 Z"
          shapeRendering="triangle 60.385 261.633 23.168 266.738 0.5 0 1@1fbeb5ec"
          style={{ fill: "#e5e7eb" }}
          transform="matrix(0.065796, 0.997833, 0.999849, -0.035227, -27.173695, -42.730399)"
        ></path>
      </svg>
    </div>
  );
});

export default Landing;
