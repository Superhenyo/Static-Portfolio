import React from "react";
import PropTypes from 'prop-types';
import { Container, Card, Row, Col } from "react-bootstrap";

export default function EducationAndCertificateCard({ eduCertProps }) {
    console.log(eduCertProps)
    const { Institution, Level, Start, End, Course, CertLinke, Logo } = eduCertProps


    return (
        <Container fluid className="m-2 EducationCard">
            <Row>
                <Col className="col-lg-9">
                    <Card className="bg-black m-4 EduCerCardfontcolor">
                        <Card.Title>{Institution}</Card.Title>
                        <Card.Header>{Level}</Card.Header>
                        <Card.Header>{Course} {Start}{"-"}{End}</Card.Header>
                        <Card.Footer>
                            <a href={CertLinke}>
                                {CertLinke}
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-end align-items-center col-lg-3">
                    <img src={Logo} alt="icon" className="eduCardLogo mx-5" />
                </Col>
            </Row>

        </Container>
    )
}

EducationAndCertificateCard.propTypes = {
    eduCertProps: PropTypes.shape({
        Institution: PropTypes.string.isRequired,
        Level: PropTypes.string.isRequired,
        Status: PropTypes.string.isRequired,
        Start: PropTypes.string.isRequired,
        End: PropTypes.string.isRequired,
        Course: PropTypes.string.isRequired,
        CertLinke: PropTypes.string
    })

}