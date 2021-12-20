import { forwardRef } from "react";
import "./Volunteering.css";
import gdscdmce from "../../assets/gdscdmce.jpeg";
import codechefdmce from "../../assets/codechefdmce.jpeg";
import supabase from "../../assets/supabase.jpg";
import skift from "../../assets/skift.png";
import oppia from "../../assets/oppia.png";
import { OpenSourceItem } from "..";

const Accent = ({ children }) => (
  <span className="text-accent">{children}</span>
);

const openSourceItems = [
  {
    logo: supabase,
    name: "Supabase",
    desc: "Open-Source serverless backend",
    repoLink: "https://github.com/supabase/supabase",
    prDesc: (
      <>
        Developed a <Accent>full-stack</Accent> To-Do web app using Supabase as
        an example <Accent>create-react-app</Accent> project.
      </>
    ),
    prsLink:
      "https://github.com/supabase/supabase/pulls?q=is%3Apr+author%3AYashKandalkar+archived%3Afalse",
    tags: ["React", "Serverless", "Supabase"],
  },
  {
    logo: supabase,
    name: "supabase/ui",
    desc: "Open-Source component library",
    repoLink: "https://github.com/supabase/ui",
    prDesc: (
      <>
        Refactored old code. Added new <Accent>unit tests</Accent> for
        components. Fix old <Accent>test</Accent> issues.
      </>
    ),
    prsLink:
      "https://github.com/supabase/ui/pulls?q=is%3Apr+author%3AYashKandalkar+",
    tags: ["React", "Unit-Testing", ""],
  },
  {
    logo: skift,
    name: "SkiftOS",
    desc: "An OS built in modern C++",
    repoLink: "https://github.com/skiftOS/skift",
    prDesc: (
      <>
        Implemented <Accent>coreutils</Accent> (terminal commands) for the
        command line interface like <Accent>rmdir</Accent> and{" "}
        <Accent>mkdir</Accent>.
      </>
    ),
    prsLink:
      "https://github.com/skiftOS/skift/pulls?q=is%3Apr+author%3AYashKandalkar",
    tags: ["C++", "coreutils", "OS"],
  },
  {
    logo: oppia,
    name: "Oppia",
    desc: "A free, online learning platform",
    repoLink: "https://github.com/oppia/oppia",
    prDesc: (
      <>
        Enabled strict <Accent>TypeScript</Accent> check for some files,
        creating necessary <Accent>types</Accent> / <Accent>interfaces</Accent>
        . Refactored old code.
      </>
    ),
    prsLink:
      "https://github.com/oppia/oppia/pulls?q=is%3Apr+author%3AYashKandalkar",
    tags: ["TypeScript", "Angular", ""],
  },
];

const Volunteering = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="skills-container"
      className="mt-8 px-10 md:px-16 lg:px-40  pt-8 relative"
    >
      <div className="mt-12 mb-16 w-full relative flex flex-row items-center">
        <h1
          style={{
            fontFamily: "Calibre",
          }}
          className="text-4xl text-gray-50 text-right"
        >
          <span className="text-accent text-2xl font-mono">02.</span>
          &nbsp;VOLUNTEERING&nbsp;&nbsp;
        </h1>
        <div
          style={{
            width: "100%",
            height: 1,
          }}
          className="mb-3 bg-lightestNavy"
        />
      </div>

      <div className="flex flex-row gap-4 flex-wrap justify-center mx-2">
        <VolunteeringItem
          idx={1}
          imgSrc={gdscdmce}
          role={"Web Development Lead"}
          company={"Google Developer Student Club DMCE"}
          date={"Aug 2021 - Current"}
          listItems={[
            "Conduct sessions, workshops, activities and work on projects related to Web Development. Collaborate with other domains.",
          ]}
        />
        <VolunteeringItem
          idx={2}
          imgSrc={codechefdmce}
          role={`Comp. Programming Lead`}
          company={"CodeChef DMCE"}
          date={"July 2021 - Current"}
          listItems={[
            "Plan long term goals for the committee, conduct various technical to uplift the coding culture in college.",
          ]}
        />
      </div>

      <div className="mt-20 mb-16 w-full relative flex flex-row items-center">
        <div
          style={{
            width: "100%",
            height: 1,
          }}
          className="mb-3 bg-lightestNavy"
        />
        <h1
          style={{
            fontFamily: "Calibre",
          }}
          className="text-4xl text-gray-50 whitespace-nowrap text-right"
        >
          &nbsp;&nbsp;
          <span className="text-accent text-2xl font-mono">03.&nbsp;</span>OPEN
          SOURCE&nbsp;
        </h1>
      </div>

      <div className="flex flex-row gap-x-8 flex-wrap justify-center items-center mx-2 sm:mx-16">
        {openSourceItems.map((el, ind) => (
          <OpenSourceItem key={ind} idx={ind} {...el} />
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
          className={`cursor-pointer accentButton transition-all duration-200
          block bg-transparent border-2 px-4 shadow-sm
          mb-6 py-2 rounded-md whitespace-nowrap mt-8 md:mt-2`}
        >
          {"More on GitHub ->"}
        </a>
      </div>
    </section>
  );
});

const VolunteeringItem = ({ idx, role, company, date, listItems, imgSrc }) => (
  <div data-aos={"fade-up"} data-aos-delay={idx * 200}>
    <div
      style={{ fontFamily: "Inter", backgroundColor: "#112240" }}
      className={`mb-4 transition-all transform hover:-translate-y-2
     rounded-sm relative shadow-lg`}
    >
      <div
        className={`md:w-72 md:h-72 text-left rounded-sm`}
        style={{
          background: `url(${imgSrc}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(10, 25, 47, 0.85)" }}
          className="w-full xs:w-72 h-full p-4 flex  flex-col"
        >
          <h3 className="text-gray-400 text-right mb-6">{date}</h3>
          <h3 className="text-gray-50 text-lg text-center md:text-xl font-bold">
            {role}
          </h3>
          <h3 className="text-gray-400 mb-4 text-center text-sm">{company}</h3>
          <ul className="text-base mb-8  mt-2 list-none text-gray-200">
            {listItems.map((el, ind) => (
              <li key={ind}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Volunteering;
