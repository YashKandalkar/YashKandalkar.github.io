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
    description: "A Progressive Web App to track your daily activities!",
    languages: ["React", "NodeJS", "ExpressJS", "PostgresSQL"],
    date: "July 2020",
    img: trackYourDay,
    repoURL: "https://github.com/YashKandalkar/track-your-day",
    deployURL: "https://yashkandalkar.github.io/track-your-day/ ",
    herokuWarning: true,
  },
  {
    name: "Dev Search",
    description: "A Miniature Search Engine, for developers!",
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
    <section ref={ref} id="projects-container" className="relative pt-40">
      {/* vertical */}
      <h1
        style={{
          fontFamily: "'Valorant'",
          left: "5%",
          top: "50%",
          transform: "translate(-50%,-50%) rotate(180deg)",
          writingMode: "vertical-rl",
        }}
        className="text-4xl text-gray-900 text-center absolute hidden md:block"
      >
        PROJECTS
      </h1>
      <div className="text-center mt-12 relative">
        <h1
          style={{
            fontFamily: "'Valorant'",
            left: "50%",
            top: "-6rem",
            transform: "translate(-50%,-50%)",
            zIndex: 2,
          }}
          className="text-4xl text-gray-900 text-center absolute"
        >
          PROJECTS
        </h1>
        <h1
          style={{
            fontFamily: "'Valorant'",
            left: "50%",
            top: "-5.9rem",
            transform: "translate(-50%,-50%)",
            zIndex: 1,
            letterSpacing: 8,
          }}
          className="text-6xl text-gray-300 space-x-9 text-center absolute"
        >
          PROJECTS
        </h1>
      </div>
      <div className="px-2">
        {projectsData.map((project, index) => (
          <ProjectItem parity={index + 1} key={index} {...project} />
        ))}
      </div>

      <div
        id="view-all"
        style={{ fontFamily: "'Inter'" }}
        className="px-4 relative mt-12 flex  justify-center text-gray-900"
      >
        <div />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/YashKandalkar"
          className="cursor-pointer block bg-gray-300 px-4 py-2 whitespace-nowrap"
        >
          {"View my GitHub ->"}
        </a>
        <div />
      </div>
    </section>
  );
});

export default Projects;
