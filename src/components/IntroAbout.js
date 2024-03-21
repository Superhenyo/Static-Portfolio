import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import landingPhotos from "../images/landingPage/landingPage.png";
import contacts from "../data/contacts";
import ParticleBackground from "./ParticleBackground";

function Intro() {
  return (
    <>
      <ParticleBackground />
      <Container className="introAbout"  >
        <Row>
          <Col className="d-flex flex-column justify-content-end col-12 col-md-6">
            <img src={landingPhotos} alt="Landing" className="person" />
          </Col>
          <Col className="d-flex flex-column mt-5 col-12 col-md-6">
            <h1 className="my-5">Hello there!</h1>
            <div>
              <p className="allParagraph">
                I am Emil a Computer Engineering graduate with practical experience as
                an intern at Nueva Vizcaya State University Management Information
                System (MIS), where I contributed to maintaining and improving
                their computer system. This experience enhanced not only my
                technical abilities but also improved my communication and
                collaboration skills.
              </p>
              <p className="allParagraph">
                I'm also a graduate of Zuitt Coding Bootcamp, I have expertise in
                developing functional and visually appealing websites using HTML5,
                CSS3, Bootstrap, MongoDB, Express, React, and Node.js. Recently, I
                completed the Main Course Package (MERN) at Zuitt.
              </p>
              <div className="social-icons-row">
                <Row >
                  <Col className="d-flex justify-content-evenly mb-5">
                    {contacts.map((cont, index) => (
                      <a href={cont.link} key={index} rel="noopener noreferrer" target="_blank">
                        <img src={cont.icon} alt="contacts Icon" className="contacts-icon" />
                      </a>
                    ))}
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Intro;
