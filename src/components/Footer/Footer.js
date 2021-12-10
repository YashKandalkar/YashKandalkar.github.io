import { createRef, forwardRef, useEffect, useState } from "react";
import "./Footer.css";
import yash from "../../assets/yash.jpg";
import { Figma, Triangle } from "@geist-ui/react-icons";

const Accent = ({ children }) => (
  <span className="text-accent">{children}</span>
);

const Footer = forwardRef((_, ref) => {
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
    <>
      <section
        ref={ref}
        id="footer-container"
        className="px-2 sm:px-10 md:px-28 lg:px-40 mt-8 pt-8 pb-20 relative"
      >
        <div className="mt-12 mb-16 w-full relative flex flex-row items-center">
          <h1
            style={{
              fontFamily: "Calibre",
            }}
            className="text-4xl whitespace-nowrap text-gray-50 text-right"
          >
            <span className="text-accent text-2xl font-mono">04.&nbsp;</span>
            ABOUT ME&nbsp;&nbsp;
          </h1>
          <div
            style={{
              width: "100%",
              height: 1,
            }}
            className="mb-3 bg-lightestNavy"
          />
        </div>

        <h3
          style={{ fontFamily: "Inter" }}
          className="text-xl text-gray-50 sm:text-left "
        >
          Hey, hello there!
        </h3>
        <div
          className="flex flex-col lg:flex-row justify-between mr-4 text-gray-400"
          style={{ fontFamily: "Inter" }}
        >
          <div className="max-w-xl w-auto">
            <p className="text-left mt-2">
              I am <Accent>Yash Kandalkar</Accent>. I started coding when I was
              16. I started out with Python since it is very easy to learn for
              a beginner and also teaches many programming principles. I used
              to do problem solving with Python and participated in{" "}
              <Accent>IIT Bombay's</Accent> CoDecode twice. I also had my hands
              on <Accent>IoT</Accent>, out of curiosity. I have multiple
              microcontrollers I use every once in a while.
            </p>

            <p className="text-left mt-4">
              Currently, I am primarily a{" "}
              <Accent>Full Stack Web Developer</Accent> and I work with{" "}
              <Accent>ReactJS</Accent> for frontend. Along with{" "}
              <Accent>NodeJs</Accent>, <Accent>PostgresSQL</Accent>, and some
              serverless backends like <Accent>Firebase</Accent>,{" "}
              <Accent>Supabase</Accent>.
            </p>
            <p className="text-left mt-4">
              I have also learnt <Accent>React Native</Accent> and developed an
              application for a{" "}
              <a href="https://deepblue.co.in/" className="text-accent">
                3 month build-a-thon
              </a>
              . Apart from development, I also like solving problems and
              participating in rated competitive coding contest on{" "}
              <Accent>codechef</Accent> and other platforms.
            </p>
            <h3 className="mt-4">Technologies I have worked with:</h3>
            <div className="flex px-4 pt-4 flex-row gap-10">
              <ul className="font-mono flex flex-col gap-2 text-sm whitespace-nowrap text-gray-400">
                <li className="flex items-center">
                  <Triangle
                    size={8}
                    className="transform mr-2 rotate-90 text-accent"
                    color="rgb(65, 183, 191)"
                    strokeWidth={4}
                  />
                  ReactJS
                </li>
                <li className="flex items-center">
                  <Triangle
                    size={8}
                    className="transform mr-2 rotate-90 text-accent"
                    color="rgb(65, 183, 191)"
                    strokeWidth={4}
                  />
                  React Native
                </li>
                <li className="flex items-center">
                  <Triangle
                    size={8}
                    className="transform mr-2 rotate-90 text-accent"
                    color="rgb(65, 183, 191)"
                    strokeWidth={4}
                  />
                  Node.js
                </li>
                <li className="flex items-center">
                  <Triangle
                    size={8}
                    className="transform mr-2 rotate-90 text-accent"
                    color="rgb(65, 183, 191)"
                    strokeWidth={4}
                  />
                  Arduino
                </li>
              </ul>
              <ul className="font-mono flex flex-col gap-2 text-sm whitespace-nowrap text-gray-400">
                <li className="flex items-center">
                  <Triangle
                    size={8}
                    className="transform mr-2 rotate-90 text-accent"
                    color="rgb(65, 183, 191)"
                    strokeWidth={4}
                  />
                  Firebase
                </li>
                <li className="flex items-center">
                  <Triangle
                    size={8}
                    className="transform mr-2 rotate-90 text-accent"
                    color="rgb(65, 183, 191)"
                    strokeWidth={4}
                  />
                  Supabase
                </li>
                <li className="flex items-center">
                  <Triangle
                    size={8}
                    className="transform mr-2 rotate-90 text-accent"
                    color="rgb(65, 183, 191)"
                    strokeWidth={4}
                  />
                  Python
                </li>
                <li className="flex items-center">
                  <Triangle
                    size={8}
                    className="transform mr-2 rotate-90 text-accent"
                    color="rgb(65, 183, 191)"
                    strokeWidth={4}
                  />
                  C/C++
                </li>
              </ul>
            </div>
          </div>
          <div className="w-80 mx-auto mt-8 lg:mt-0 lg:mx-0 relative h-80 lg:h-0">
            <img
              src={yash}
              ref={imgRef}
              onLoad={() => {
                setImgDim({
                  width: imgRef.current.width,
                  height: imgRef.current.height,
                });
              }}
              alt="yash"
              className={"absolute m-3 w-full profileImg z-10"}
              style={{
                WebkitFilter: "url('#sea')",
                filter: "url('#sea')",
              }}
            />
            <div
              className={`absolute z-0 profileBorderDiv transition-all top-8 left-8 border-2 rounded-sm`}
              style={{
                width: imgDim.width,
                height: imgDim.height,
                borderColor: "#6c82b9",
              }}
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center text-center font-mono text-xs mb-12 text-gray-400">
        <p>
          Design inspired by{" "}
          <Accent>
            <a
              rel="noreferrer"
              target={"_blank"}
              href={"https://brittanychiang.com/"}
            >
              Brittany Chiang's portfolio.
            </a>
          </Accent>
        </p>
      </div>
    </>
  );
});

export default Footer;
