import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

const ProjectItem = ({
  parity,
  img,
  name,
  description,
  languages,
  date,
  repoURL,
  deployURL,
  herokuWarning,
}) => {
  return (
    <div
      className={"flex w-full justify-center mt-8"}
      data-aos={parity % 2 ? "fade-left" : "fade-right"}
    >
      <div
        className={
          "border-2 shadow-lg rounded-md flex relative flex-col md:" +
          (parity % 2 ? "flex-row" : "flex-row-reverse")
        }
        style={{ fontFamily: "'Inter'" }}
      >
        <div className="z-10 flex items-center justify-center h-full">
          <img
            src={img}
            alt={name + " thumbnail"}
            className={
              "rounded-md w-64 h-40 my-0 md:my-auto md:h-auto mx-auto md:w-80 md:" +
              (parity % 2
                ? "rounded-br-none md:rounded-tr-none"
                : "rounded-bl-none md:rounded-tl-none")
            }
          />
        </div>
        {herokuWarning && (
          <div
            data-tip={
              "Sometimes, this project may load slowly,<br/>or not load at all due to Heroku's limited dyno hours!"
            }
            data-for={"tip-" + parity}
            class={
              "absolute mt-1 mx-2 z-20 text-red-500 top-0" +
              (parity % 2 ? " left-0" : " right-0")
            }
          >
            <FontAwesomeIcon icon={faExclamationCircle} />
          </div>
        )}
        <div
          className="flex flex-col flex-grow text-left py-2 px-4 sm:w-96"
          style={{ maxWidth: 400, backdropFilter: "blur(3px)" }}
        >
          <span className="flex flex-col sm:flex-row justify-between">
            <a
              href={repoURL}
              className="font-bold cursor-pointer text-gray-900 text-lg"
            >
              {name}
            </a>
            <h3 className={"text-gray-400 text-sm sm:text-base md:text-lg"}>
              {date}
            </h3>
          </span>
          <div className="flex flex-row flex-wrap justify-center sm:justify-start">
            {languages.map((techName, index) => (
              <TechnologyBadge techName={techName} key={index} />
            ))}
          </div>
          <p>{description}</p>
          <div className="flex flex-row mt-auto ml-auto">
            {repoURL && (
              <a
                rel="noreferrer"
                target="_blank"
                href={repoURL}
                className="text-gray-500 text-sm cursor-pointer mr-2"
              >
                GitHub
              </a>
            )}
            {repoURL && deployURL && (
              <p className="text-gray-500 text-sm cursor-pointer mr-2">
                {"~"}
              </p>
            )}
            {deployURL && (
              <a
                rel="noreferrer"
                target="_blank"
                href={deployURL}
                className="text-gray-500 text-sm cursor-pointer"
              >
                Deployment
              </a>
            )}
          </div>
        </div>
      </div>
      <ReactTooltip id={"tip-" + parity} multiline type={"error"} />
    </div>
  );
};

const TechnologyBadge = ({ techName }) => {
  return (
    <div className="flex items-center justify-center mr-2 mt-2 md:my-2">
      <div className="rounded-full bg-blue-200 py-1 px-2">
        <p className="text-xs whitespace-nowrap text-gray-700">{techName}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
