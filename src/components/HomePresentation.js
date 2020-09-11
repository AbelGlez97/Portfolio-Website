import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePresentation =(props) => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-4 text-center">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-4 font-weight-bolder">{props.title}</h1>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="" fluid={true}>
        <Row className="justify-content-center pt-4 text-center ">
          <Col md={8} sm={12}>
            {props.subTitle && (
              <h3 className="display-10 font-weight-light border-bottom">
                {props.subTitle}
              </h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomePresentation;
