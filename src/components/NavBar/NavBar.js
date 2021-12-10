import React from "react";
import { Link } from "react-scroll";
import ykLogo from "../../assets/yk-logo.svg";
import "./NavBar.css";
import { Menu, X } from "@geist-ui/react-icons";

const NavBar = ({ inView, fixNavbar }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      id="navbar"
      className={`flex flex-wrap fixed
    items-center justify-between 
    lg:px-6 px-6 sm:px-10
    py-3 ml-0 w-full z-30 ${fixNavbar && "shadow-lg"} 
   `}
      style={{
        backgroundColor: fixNavbar
          ? "rgb(10, 25, 47, 0.9)"
          : "rgb(10, 25, 47)",
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <img src={ykLogo} alt={"logo"} style={{ width: 50 }} />

          <button
            className="text-gray-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <X className="mx-1" /> : <Menu className="mx-1" />}
          </button>
        </div>
        <div
          className={`md:flex flex-grow items-center ${
            navbarOpen ? "flex" : "hidden"
          }`}
        >
          <ul
            style={{ fontFamily: "Inter" }}
            className="flex navList flex-col w-full items-center md:flex-row list-none md:ml-auto md:justify-end"
          >
            <li
              style={{
                animationDelay: window.innerWidth <= 768 ? "100ms" : "11.1s",
              }}
              className={`nav-item ${
                inView === "landing" && "navbar-item-in-view"
              }`}
            >
              <Link
                to="landing-container"
                className="px-2 py-2 flex items-center text-xs   leading-snug text-gray-300 hover:opacity-75"
                smooth={true}
                duration={300}
              >
                <span className="mx-2 text-sm">Home</span>
              </Link>
            </li>
            <li
              style={{
                animationDelay: window.innerWidth <= 768 ? "300ms" : "11.3s",
              }}
              className={`nav-item 
                ${inView === "projects" && "navbar-item-in-view"}`}
            >
              <Link
                className="px-2 py-2 flex items-center text-xs   leading-snug text-gray-300 hover:opacity-75"
                to="projects-container"
                smooth={true}
                duration={500}
              >
                <span className="mx-2 text-sm">Projects</span>
              </Link>
            </li>
            <li
              style={{
                animationDelay: window.innerWidth <= 768 ? "500ms" : "11.5s",
              }}
              className={`nav-item 
                ${inView === "volunteering" && "navbar-item-in-view"}`}
            >
              <Link
                className="px-2 py-2 flex items-center text-xs   leading-snug text-gray-300 hover:opacity-75"
                to="skills-container"
                smooth={true}
                duration={600}
              >
                <span className="mx-2 text-sm">Volunteering</span>
              </Link>
            </li>
            <li
              style={{
                animationDelay: window.innerWidth <= 768 ? "700ms" : "11.7s",
              }}
              className={`nav-item 
                ${inView === "aboutMe" && "navbar-item-in-view"}`}
            >
              <Link
                className="px-2 py-2 flex items-center text-xs   leading-snug text-gray-300 hover:opacity-75"
                to="footer-container"
                smooth={true}
                duration={700}
              >
                <span className="mx-2 text-sm">About Me</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
