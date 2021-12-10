import { ExternalLink } from "@geist-ui/react-icons";

const OpenSourceItem = ({
  idx,
  logo,
  name,
  desc,
  repoLink,
  prDesc,
  prsLink,
  tags,
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay={idx * 200}>
      <div
        className="folder transition-all transform hover:-translate-y-2 shadow-lg sm:w-72 sm:h-72"
        style={{ fontFamily: "Inter" }}
      >
        <div className="folder-top" />
        <div className="h-full flex flex-col p-8 pt-4">
          <div className="flex items-center">
            <img
              src={logo}
              alt={name + " logo"}
              className="mr-3 w-7 rounded-md"
            />
            <a
              href={repoLink}
              rel="noreferrer"
              target="_blank"
              className="text-2xl text-accent font-bold"
            >
              {name}
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-1">{desc}</p>
          <p className="mt-6 text-gray-300">{prDesc}</p>
          <a
            href={prsLink}
            rel={"noreferrer"}
            target={"_blank"}
            className="text-accent text-sm mt-4 mb-2 flex items-center"
          >
            Pull Requests <ExternalLink size={20} className="ml-2" />
          </a>
          <div className="font-mono flex flex-wrap flex-grow items-end text-gray-500 text-sm">
            {tags.map((tag, index) => (
              <span key={index} className="mr-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceItem;
