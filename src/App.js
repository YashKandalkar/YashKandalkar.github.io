import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Footer, Landing, Projects, Volunteering, Quotes } from "./components";

const options = {
  rootMargin: "-90px 0px 0px 0px",
};

function App() {
  const [landingRef, landingInView] = useInView(options);
  const [projectsRef, projectsInView] = useInView(options);
  const [volunteeringRef, volunteeringInView] = useInView(options);
  const [aboutMeRef, aboutMeInView] = useInView(options);

  let inView = "landing";

  if (landingInView) {
    inView = "landing";
  } else if (projectsInView) {
    inView = "projects";
  } else if (volunteeringInView) {
    inView = "volunteering";
  } else if (aboutMeInView) {
    inView = "aboutMe";
  }

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className="App">
      <Quotes />
      <Landing ref={landingRef} inView={inView} fixNavbar={offset >= 60} />
      <Projects ref={projectsRef} />
      <Volunteering ref={volunteeringRef} />
      <Footer ref={aboutMeRef} />
    </div>
  );
}

export default App;
