import { forwardRef } from "react";
import "./Volunteering.css";
import gdscdmce from "../../assets/gdscdmce.jpeg";
import codechefdmce from "../../assets/codechefdmce.jpeg";

const Volunteering = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      id="skills-container"
      className="text-center mt-8 pt-48 pb-48 relative"
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
        VOLUNTEERING
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
        VOLUNTEERING
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
        VOLUNTEERING
      </h1>
      <div className="flex flex-col justify-center mx-2">
        <VolunteeringItem
          idx={1}
          imgSrc={gdscdmce}
          role={"Web Development Lead"}
          company={"Google Developer Student Club DMCE"}
          date={"Aug 2021 - Current"}
          listItems={[
            "Work on Web Development projects while collaborating with other domains",
            "Conduct sessions, workshops, activities related to Web Development",
          ]}
        />
        <VolunteeringItem
          idx={2}
          imgSrc={codechefdmce}
          role={"Competitive Programming Lead"}
          company={"CodeChef DMCE"}
          date={"July 2021 - Current"}
          listItems={[
            "Plan long term goals for the committee.",
            "Conduct various technical or non-technical events to uplift the coding culture in college.",
            "Conduct informal problem solving sessions.",
          ]}
        />
        <VolunteeringItem
          idx={3}
          imgSrc={codechefdmce}
          role={"Executive Team Member"}
          company={"CodeChef DMCE"}
          date={"July 2021 - Current"}
          listItems={[
            "Plan long term goals for the committee.",
            "Conduct various technical or non-technical events to uplift the coding culture in college.",
            "Conduct informal problem solving sessions.",
          ]}
        />
      </div>
      <svg
        viewBox="0 0 500 20"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        style={{ bottom: -3, left: -12 }}
      >
        <defs></defs>
        <path
          d="M 252.689 0.398 L 507.169 19.215 L -1.791 19.215 L 252.689 0.398 Z"
          style={{ fill: "#e5e7eb" }}
          shapeRendering="triangle -1.791 0.398 508.96 18.817 0.5 0 1@dfa731ec"
        ></path>
      </svg>
    </div>
  );
});

const VolunteeringItem = ({ idx, role, company, date, listItems, imgSrc }) => (
  <div
    data-aos={idx % 2 ? "fade-down-right" : "fade-down-left"}
    className="flex mb-4 sm:flex-row flex-col justify-center bg-gray-200 mx-4 sm:mx-auto px-3 py-2 rounded-md shadow-md"
  >
    <div className="flex justify-center items-center mr-2">
      <img
        src={imgSrc}
        alt="logo"
        className="rounded-md  sm:w-40 w-24 border-2 border-gray-50"
      />
    </div>
    <div className="max-w-md text-left p-2">
      <span className="flex flex-row justify-between">
        <h3 className="text-gray-900 text-base md:text-lg font-bold">
          {role}
        </h3>
        <h3 className="text-gray-500 sm:block hidden">{date}</h3>
      </span>
      <h3 className="text-gray-500 text-sm">{company}</h3>
      <ul className="list-disc ml-4 text-sm sm:text-base mt-2 text-gray-900">
        {listItems.map((el, ind) => (
          <li key={ind}>{el}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Volunteering;
