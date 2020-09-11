import React from 'react';
import Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

const Footer = () =>{
    return(
        <footer className = "mt-3 bg-light text-black-50"  >
            <Container fluid = {true} >
                <Row className = "border-top justify-content-center p-3"  >
                    <Col className = " d-flex justify-content-center p-1" md = {3} sm = {12}>
                    This site was made by Abel Gonzalez-2020
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;