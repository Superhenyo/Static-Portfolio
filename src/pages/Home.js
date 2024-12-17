import React from "react";
import { Container } from "react-bootstrap";
import Intro from "../components/IntroAbout";
import TechAndProjects from "../components/TechStackandProjects";
import ParticleBackground from "../components/ParticleBackground";
import EduCert from "../components/EduCert";

export default function Home() {
  return (
    <>
      <Container fluid className="PageSize" id="Home">
        <br />
        <ParticleBackground />
        <Intro />
      </Container>

      <Container className="PageSize" id="Projects">
        <br />
        <h1 className="text-center mt-5">Projects</h1>
        <TechAndProjects />
      </Container>

      <Container className="PageSize" id="Education">
        <br />
        <EduCert />
      </Container>
    </>
  );
}
