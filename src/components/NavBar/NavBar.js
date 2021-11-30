import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import ykLogo from "../../assets/yk-logo.svg";
import "./NavBar.css";

const NavBar = ({ inView, fixNavbar }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      id="navbar"
      className={`flex flex-wrap
    items-center justify-between 
    lg:px-6 px-6 sm:px-10
    py-3 ml-0 bg-gray-900 
    transition-all nav-left-triangle
    ${fixNavbar ? " fixed top-0 z-50 w-full" : " relative xl:mx-36"}`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img src={ykLogo} alt={"logo"} style={{ width: 50 }} />

          <button
            className="text-gray-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <FontAwesomeIcon icon={faTimes} className="mx-1" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="mx-1" />
            )}
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center ${
            navbarOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col w-full items-center lg:flex-row list-none lg:ml-auto lg:justify-end">
            <li
              className={`nav-item ${
                inView === "landing" && "navbar-item-in-view"
              }`}
            >
              <Link
                to="landing-container"
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                smooth={true}
                duration={300}
              >
                <span className="mx-2 text-lg">HOME</span>
              </Link>
            </li>
            <li
              className={`nav-item 
                ${inView === "projects" && "navbar-item-in-view"}`}
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="projects-container"
                smooth={true}
                duration={500}
              >
                <span className="mx-2 text-lg">PROJECTS</span>
              </Link>
            </li>
            <li
              className={`nav-item 
                ${inView === "volunteering" && "navbar-item-in-view"}`}
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="skills-container"
                smooth={true}
                duration={600}
              >
                <span className="mx-2 text-lg">VOLUNTEERING</span>
              </Link>
            </li>
            <li
              className={`nav-item 
                ${inView === "aboutMe" && "navbar-item-in-view"}`}
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="footer-container"
                smooth={true}
                duration={700}
              >
                <span className="mx-2 text-lg">CONTACT</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
