import React, { useEffect, useState } from "react";
import { Card, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProjectsCard({ projectProps }) {

    const { name, description, picture, Tools, link} = projectProps;

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
        <Container className="img-fluid">
            <Row>
                <Card className="projectCard bg-black border-warning-subtle">
                    <img src={picture} alt="Landing" className="projectImages img-fluid" />
                    <Card.Body>
                        <a href={link} target="_blank" rel="noreferrer">
                            <Card.Title className="cardTitle">{name}</Card.Title>
                        </a>
                        <Card.Text className="allParagraph">{description}</Card.Text>
                        <div>
                            {projectTech} {/* Render the project technologies */}
                        </div>
                    </Card.Body>
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
        Tools: PropTypes.arrayOf(PropTypes.string).isRequired // Ensure Tools is an array of strings
    })
};
