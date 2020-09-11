import React from "react";
import HomePresentation from "../components/HomePresentation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import emailjs from "emailjs-com";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      emailSent: null,
      disabled: false,
    };
  }

  handleChangeText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";

    if (
      !(this.state.email === "") &&
      this.state.email.includes("@") &&
      !(this.state.message === "")
    ) {
      emailjs
        .sendForm(
          "gmail",
          "",
          event.target,
          ""
        )
        .then(
          (result) => {
            if (result) {
              this.setState({
                disabled: true,
                emailSent: true,
                name: "",
                email: "",
                message: "",
              });
            } else {
              this.setState({
                disabled: false,
                emailSent: false,
              });
            }
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            this.setState({
              disabled: false,
              emailSent: false,
            });
          }
        );
    }
  };

  render() {
    return (
      <div>
        <HomePresentation title={this.props.title} />
        <Container fluid={true}>
          <Row className="justify-content-center">
            <Col md={7}>
              <Form
                className="needs-validation"
                noValidate
                onSubmit={this.handleSubmit}
              >
                <Form.Group>
                  <Form.Label htmlFor="full-name">Name</Form.Label>
                  <Form.Control
                    id="full-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={this.state.name}
                    onChange={this.handleChangeText}
                    required
                  />
                  <div className="invalid-feedback">
                    Name cannot be left Empty.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email"> Your Email</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={this.state.email}
                    onChange={this.handleChangeText}
                    required
                  />
                  <div className="invalid-feedback">
                    Enter an appropiate email.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                  <Form.Text className="text-muted">
                    Your email will never be share.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    as="textarea"
                    rows="3"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChangeText}
                    required
                  />
                  <div className="invalid-feedback">
                    Please, provide a message
                  </div>
                </Form.Group>

                <div
                  aria-live="polite"
                  aria-atomic="true"
                  style={{
                    position: "relative",
                    minHeight: "100px",
                  }}
                >
                  <Button
                    className="d-inline-block"
                    disabled={this.state.disabled}
                    variant="primary"
                    type="submit"
                    value="Submit"
                    required
                    onClick={() => this.setState({ show: true })}
                  >
                    Submit
                  </Button>
                  {this.state.emailSent === true && (
                    <Toast
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 100,
                      }}
                      onClose={() => this.setState({ show: false })}
                      show={this.state.show}
                      delay={5500}
                      autohide
                    >
                      <Toast.Header>
                        <img
                          src="holder.js/20x20?text=%20"
                          className="rounded mr-2"
                          alt=""
                        />
                        <strong className="mr-auto successMessage">
                          Message Sent
                        </strong>
                      </Toast.Header>
                      <Toast.Body>
                        Thank you for getting in touch!, I will reply by email
                        as soon as possible.
                      </Toast.Body>
                    </Toast>
                  )}
                  {this.state.emailSent === false && (
                    <Toast
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 100,
                      }}
                      onClose={() => this.setState({ show: false })}
                      show={this.state.show}
                      delay={5500}
                      autohide
                    >
                      <Toast.Header>
                        <img
                          src="holder.js/20x20?text=%20"
                          className="rounded mr-2"
                          alt=""
                        />
                        <strong className="mr-auto errorMessage">
                          Message Not Sent
                        </strong>
                      </Toast.Header>
                      <Toast.Body>Please, try again!</Toast.Body>
                    </Toast>
                  )}
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
