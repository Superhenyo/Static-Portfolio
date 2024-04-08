import { Container } from "react-bootstrap";
import TechAndProjects from "./TechStackandProjects";
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Components
function Projects() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView] = useInView({ threshold: .1 });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  return (
    <>
      <Container className="projectPageSize" ref={ref}>
        <div className={`animated-paragraph ${isAnimated ? 'animate' : ''}`}>
          < TechAndProjects />
        </div>
      </Container>
    </>

  );
}

export default Projects;
