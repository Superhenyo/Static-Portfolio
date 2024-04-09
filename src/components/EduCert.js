import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import EducationAndCertificateCard from './EducationAndCertificateCard';
import educationAndCertificate from '../data/education';

function EduCert() {
    const [eduCert, setEduCert] = useState([])

    useEffect(() => {
        const eduAndCertArray = educationAndCertificate.map((data, index) => (
            < EducationAndCertificateCard eduCertProps={data} key={index} />
        ))
        setEduCert(eduAndCertArray)
    }, [])



    return (
        <>
            <h1 className='text-center'>Education</h1>
            <Container fluid>
                {eduCert.map((element, index) => (
                    <Row key={index}>
                        {element}
                    </Row>
                ))}
            </Container>

        </>
    );
}


export default EduCert;
