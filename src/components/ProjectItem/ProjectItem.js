import { AlertTriangleFill, Code, ExternalLink } from "@geist-ui/react-icons";
import { createRef, useEffect, useState } from "react";
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
  const imgRef = createRef();
  const [imgDim, setImgDim] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const onResize = () => {
      imgRef.current &&
        setImgDim({
          width: imgRef.current.width,
          height: imgRef.current.height,
        });
    };

    window.addEventListener("resize", onResize);
    return () => {};
  }, [imgRef]);

  return (
    <div
      className={`flex w-full relative ${
        !(parity % 2) && "justify-end"
      } mt-8 mb-14 mdlg:mb-20`}
      data-aos={parity % 2 ? "fade-left" : "fade-right"}
    >
      <div
        className={`rounded-md flex mdlg:${
          parity % 2 ? "flex-row" : "flex-row-reverse"
        } flex-col`}
        style={{ fontFamily: "Inter" }}
      >
        <div
          className={`flex ml-auto relative ${
            !(parity % 2) && "ml-auto"
          } w-full`}
        >
          <img
            ref={imgRef}
            onLoad={() => {
              setImgDim({
                width: imgRef.current.width,
                height: imgRef.current.height,
              });
            }}
            src={img}
            alt={name + " thumbnail"}
            style={{
              WebkitFilter: "url('#sea')",
              filter: "url('#sea')",
              width: "40vw",
              minHeight: 400,
              objectFit: "cover",
            }}
            className={`rounded-sm z-10 mdlg:filter-none projectImg w-full mdlg:w-4/6 ${
              !(parity % 2) && "ml-auto"
            } h-auto`}
          />
          <div
            className={`absolute transition-all z-0 hidden mdlg:block top-6 ${
              parity % 2 ? "left-6 leftBorder" : "right-6 rightBorder"
            }  border-2 rounded-sm border-accent border-opacity-60`}
            style={{
              width: "40vw",
              height: imgDim.height,
            }}
          />
        </div>
        <div
          className={`flex bottomDiv sm:pt-4 mdlg:pt-0 h-full sm:h-auto absolute z-20
        bottom-0 mdlg:bottom-3 bg-primaryDarkBlue sm:items-center justify-center
        mdlg:items-start mdlg:bg-transparent flex-col 
        ${parity % 2 ? "right-0" : "left-0"}
        w-full mdlg:w-4/6
        `}
          style={{ backgroundColor: "rgba(10, 25, 47, 0.80)" }}
        >
          <div
            className={`${
              parity % 2 && "mdlg:ml-auto"
            } mr-2 mb-2 ml-8 sm:ml-0 mt-4 text-base text-gray-300`}
            style={{
              fontFamily: "Calibre",
              fontWeight: 100,
              lineHeight: 0.8,
            }}
          >
            {date}
          </div>
          <div
            className={`mdlg:${
              parity % 2 ? "ml-auto" : "ml-0"
            } mr-2 text-4xl ml-8 mb-2 sm:mb-0 sm:ml-0 text-gray-50 `}
            style={{
              fontFamily: "Calibre",
              fontWeight: 600,
              lineHeight: 0.8,
            }}
          >
            {name}
          </div>
          <div
            className={`mdlg:${
              parity % 2 ? "ml-auto" : "ml-0"
            } mb-2 sm:mb-0 mdlg:mb-1 ml-8 mx-0 sm:mx-auto mdlg:mx-0`}
          >
            <div className="flex flex-row flex-wrap justify-start">
              {languages.map((techName, index) => (
                <TechnologyBadge techName={techName} key={index} />
              ))}
            </div>
          </div>
          <div
            className={`flex description flex-col py-4 px-8
          max-w-3xl rounded-sm text-gray-100 mdlg:shadow-lg mdlg:hover:shadow-2xl transition-shadow
        `}
            style={{
              backgroundColor: "#112240",
            }}
          >
            <p>{description}</p>
            <div className="flex mt-4 xs:mt-8 mdlg:mt-2 flex-row sm:mt-2 items-center sm:ml-auto">
              {repoURL && (
                <>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={repoURL}
                    style={{ color: "#41b7bf" }}
                    className="text-gray-500 text-base cursor-pointer mr-2"
                  >
                    GitHub
                  </a>
                  <Code size={16} color="#41b7bf" className="mr-2" />
                </>
              )}

              {deployURL && (
                <>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={deployURL}
                    style={{ color: "#41b7bf" }}
                    className="text-gray-500 text-base cursor-pointer mr-2"
                  >
                    Deployment
                  </a>
                  <ExternalLink size={16} color="#41b7bf" />
                </>
              )}
            </div>
          </div>
        </div>
        {herokuWarning && (
          <div
            data-tip={
              "Sometimes, this project may load slowly,<br/>or not load at all due to Heroku's limited dyno hours!"
            }
            data-for={"tip-" + parity}
            className={`absolute mt-1 mx-2 z-20 top-0 ${
              parity % 2 ? "left-0" : "right-0"
            }`}
            style={{ background: "transparent !important" }}
          >
            <AlertTriangleFill
              size={20}
              color={"rgba(239, 68, 68, 1)"}
              stroke={"rgba(249, 250, 251, 1)"}
            />
          </div>
        )}
      </div>
      <ReactTooltip id={"tip-" + parity} multiline type={"error"} />
    </div>
  );
};

const TechnologyBadge = ({ techName }) => {
  return (
    <div className="flex items-center justify-center mr-2 mt-2 mdlg:my-2">
      <div
        className="rounded-sm techBadge py-1 px-2"
        style={{ backgroundColor: "#41b7bf" }}
      >
        <p className="text-xs whitespace-nowrap text-primaryDarkBlue">
          {techName}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
