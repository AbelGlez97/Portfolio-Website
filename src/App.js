import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Abel Gonzalez",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Building ideas into real-life projects",
        subTitle: "Some of my latest work.",
      },
      about: {
        title: "About Me",
        subTitle: "Projects",
      },
      contact: {
        title: "Contact Me",
        subTitle: "I will be glad to answer your questions!",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom"
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand>Abel Gonzalez</Navbar.Brand>

            <Navbar.Toggle
              className="border-0 "
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse
              className="text-center "
              id="responsive-navbar-nav"
            >
              <Nav className="ml-auto ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link " to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>

                <a className="nav-link font-weight-bolder  "
                  href="https://www.linkedin.com/in/abel-gonzalez-6970501a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                  
                </a>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <About
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <Contact
                title={this.state.contact.title}
                subTitle={this.state.contact.subTitle}
              />
            )}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
