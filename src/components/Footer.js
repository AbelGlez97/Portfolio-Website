import React from 'react';
import Container  from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

const Footer = () =>{
    return(
        <footer className = "mt-3 bg-light text-black-50"  >
            <Container fluid = {true} >
                <Row className = "border-top justify-content-between p-3"  >
                    <Col className = "p-0" md = {3} sm = {12}>
                        Abel Gonzalez
                    </Col>
                    <Col className = "p-0 d-flex justify-content-center " md = {3}>
                        Email: agonz943@fiu.edu
                    </Col>
                    <Col className = "p-0 d-flex justify-content-end " md = {3} >
                        Phone: 786-380-8549
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;