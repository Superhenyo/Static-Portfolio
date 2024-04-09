import React from "react";
import { Container } from "react-bootstrap"
import Intro from "../components/IntroAbout";
import TechAndProjects from "../components/TechStackandProjects";
import ParticleBackground from '../components/ParticleBackground';
import EduCert from "../components/EduCert";
// import MorphingBackground from "../components/MorphingBackground";

export default function Home() {
  return (
    <>
      <Container className="PageSize" id="Home">
        <ParticleBackground />
        <Intro />
      </Container >

      <Container className="PageSize">
        <h1 className="text-center mt-5" id="Projects">Projects</h1>
        <TechAndProjects />
      </Container >

      <Container>
        <EduCert />
      </Container>
    </>
  )
}