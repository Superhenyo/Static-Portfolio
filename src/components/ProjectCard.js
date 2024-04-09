import React, { useEffect, useState } from "react";
import { Card, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProjectsCard({ projectProps }) {

    const { name, description, picture, Tools, link, repoLink } = projectProps;

    // Define state to store project technologies
    const [projectTech, setProjectTech] = useState([]);

    useEffect(() => {
        const techButtons = Tools.map((tech, index) => (
            <button key={index} className="projCardButton">
                {tech}
            </button>
        ));
        setProjectTech(techButtons);
    }, [Tools]);

    return (
        <Container fluid>
            <Row>
                <Card className="projectCard bg-black border-warning-subtle">
                    <img src={picture} alt="Landing" className="projectImages img-fluid" />
                    <Card.Body>
                        <a href={link} target="_blank" rel="noreferrer">
                            <Card.Title className="cardTitle">{name}</Card.Title>
                        </a>
                        <Card.Text className="allParagraph m-0">{description}</Card.Text>
                        <div>
                            {projectTech}
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-center m-0">
                        <a href={repoLink} rel="noopener noreferrer" target="_blank">
                            <img src={require("../images/Tools/github.png")} alt="contacts Icon" className="gitIcon" />
                        </a>

                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    );
}

ProjectsCard.propTypes = {
    projectProps: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        picture: PropTypes.string,
        Tools: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure Tools is an array of strings
        repoLink: PropTypes.string
    })
};
