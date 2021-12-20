import { forwardRef } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.css";
import geofencing from "../../assets/geofencing.png";
import trackYourDay from "../../assets/track-your-day.png";
import searchEngine from "../../assets/search-engine.png";

const projectsData = [
  {
    name: "GeoFencing",
    description: `An IoT based project that allows hospital admins to track patient's real-time location
    inside a facility and notified when the patient breaches the facility.`,
    languages: ["React Native", "FirebaseJS", "NodeJS", "IoT"],
    date: "Nov 2020 - Mar 2021",
    img: geofencing,
    repoURL: "https://github.com/YashKandalkar/GeoFencing",
  },
  {
    name: "Track Your Day",
    description: `A Progressive Web App to track your daily activities! Add your daily tasks and mark then as completed.
      Get a weekly analysis of the tasks you completed or abandoned.`,
    languages: ["React", "NodeJS", "ExpressJS", "PostgresSQL"],
    date: "July 2020",
    img: trackYourDay,
    repoURL: "https://github.com/YashKandalkar/track-your-day",
    deployURL: "https://yashkandalkar.github.io/track-your-day/ ",
    herokuWarning: true,
  },
  {
    name: "Dev Search",
    description: `A Miniature Search Engine, for developers! Crawler ran on StackOverflow and GeeksForGeeks.
    Over 90K links indexed in the database. UI is built using ReactJS and Ant Design components.`,
    languages: ["React", "Flask", "MongoDB"],
    date: "Feb 2021",
    img: searchEngine,
    repoURL: "https://github.com/YashKandalkar/search-engine",
    deployURL: "https://dev-search-31901.netlify.app/",
    herokuWarning: true,
  },
];

const Projects = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="projects-container"
      className="relative pt-8 bg-primaryDarkBlue mx-10 md:mx-16 lg:mx-40"
    >
      <div className="text-center mt-12 bg-primaryDarkBlue relative flex flex-row items-center">
        <h1
          style={{
            fontFamily: "Calibre",
          }}
          className="text-4xl text-gray-50 text-left"
        >
          <span className="text-accent text-2xl font-mono">01.</span>
          &nbsp;PROJECTS&nbsp;
        </h1>
        <div
          style={{
            width: "40vmax",
            height: 1,
          }}
          className="mb-3 bg-lightestNavy"
        />
      </div>
      <div className="px-2">
        {projectsData.map((project, index) => (
          <ProjectItem parity={index + 1} key={index} {...project} />
        ))}
      </div>

      <div
        style={{ fontFamily: "Inter" }}
        className="px-4 relative mt-4 mdlg:mt-12 flex justify-center text-gray-900"
      >
        <a
          style={{ color: "#41b7bf", borderWidth: 1, borderColor: "#41b7bf" }}
          rel="noreferrer"
          target="_blank"
          href="https://github.com/YashKandalkar"
          className="cursor-pointer shadow-sm accentButton transition-all duration-200 block bg-transparent border-2 px-4 mb-6 py-2 rounded-md whitespace-nowrap"
        >
          {"View my GitHub ->"}
        </a>
      </div>

      <svg
        id="svgfilters"
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter
            id="sea"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feColorMatrix
              type="matrix"
              values=".33 .33 .33 0 0
          .33 .33 .33 0 0
          .33 .33 .33 0 0
          0 0 0 1 0"
              in="SourceGraphic"
              result="colormatrix"
            />
            <feComponentTransfer in="colormatrix" result="componentTransfer">
              <feFuncR type="table" tableValues="0.02 0.13 0.8" />
              <feFuncG type="table" tableValues="0.02 0.47 0.97" />
              <feFuncB type="table" tableValues="0.26 0.52 0.48" />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
            <feBlend
              mode="normal"
              in="componentTransfer"
              in2="SourceGraphic"
              result="blend"
            />
          </filter>
        </defs>
      </svg>
    </section>
  );
});

export default Projects;
