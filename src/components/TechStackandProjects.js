import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

// Components
import ProjectsCard from "./ProjectCard";

// mock Database
import technology from "../data/techData";
import projectData from "../data/projectData";

function TechAndProjects() {
  const [projectsTech, setProjectsTech] = useState([]);
  const [projects, setProjects] = useState([]);
  const [clicked, setClicked] = useState(false);



  const handleClick = () => {
    setClicked(true);
  };
  useEffect(() => {
    const projTech = technology.map((tech, index) => (
      <button className="technology-button" onClick={handleClick} key={index}>
        <img src={tech.icon} alt={tech.name + " icon"} className="tech-icon" />
        {" " + tech.name}
      </button>
    ));
    setProjectsTech(projTech);

    // Ensure projectData is available before mapping
    if (projectData && projectData.length > 0) {
      const projectArr = projectData.map((project, index) => (
        <ProjectsCard projectProps={project} key={index} />
      ));
      setProjects(projectArr);
    }


  }, []);


  return (
    <>
      <Container className="PageSize">
        <h4 className="mt-1">Technologies:</h4>
        <div>{projectsTech}</div>
        <h4 className="mt-3">Projects: </h4>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} xxl={3} className="mb-2 pt-3">
              {project}
            </Col>
          ))}
        </Row>
      </Container>
    </>

  );
}

export default TechAndProjects;
