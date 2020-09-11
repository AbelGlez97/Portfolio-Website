import React from "react";
import HomePresentation from "../components/HomePresentation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = (props) => {
  return (
    <div>
      <HomePresentation title={props.title} />
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={7}>
            <p>
              Ever since I was a little kid I always wanted to create and bring
              ideas in my imagination to real life projects. I remember building
              my first android application while in high school using a friendly
              beginner’s software to learn how to program with predefined blocks
              of code. The experience and excitement of building something with
              your own hands, be it a video game or a software product and see
              it come to life, while transforming the lives of people around the
              word it’s the reason I decided to become a software engineer and
              pursue a bachelor’s degree in Computer Science. Throughout my
              college years I have studied several programming languages such as
              C# Java, C++, C, JavaScript, F# and Python. In addition, due to
              software engineering courses, I developed a deep understanding of
              the Scrum framework by creating a production level-software using
              the agile methodology. I familiarized myself with the full stack
              framework including, ASP .net core, for building database models
              and using entity framework to create controllers and connections
              to the database, PostgreSQL and React js. Moreover, projects in
              Advanced Windows Programming were beneficial to improve my
              software development skills by collaborating through GitHub. Along
              with that, I mastered several libraries of the .Net Framework by
              creating various Windows Form application projects such as a
              Multi-SDI application that implemented features like Inherited
              menu, multithreaded Programming, drag and drop, document printing,
              and .NET serialization. Apart from coursework, I have been
              developing video games using the Unity engine and the programming
              language C# in my free time. Today I work as a contractor in the
              Developer Engagement Team at Roblox managing internal application
              processes, which include international Developer Forum moderation
              and localization of technical announcements. I proactively
              document new bugs & features posted on the Developer Forum and use
              internal tools to submit these while keeping developers up to date
              in their bug report & feature request threads. This work has
              helped me improve my ability to communicate not only in English
              but also in Spanish. It has also allowed me to have certain
              knowledge in Lua and Roblox Studio, programs that the platform
              provides as tools to enhance developer’s productivity and
              facilitate the development of games
            </p>
            <p>
              Programming languages: Java, F#, C#,C, C++, Python, SQL,
              PostgreSQL, React js
            </p>
            <p>
              Technologies/Environment: NetBeans, GitHub, Unity, Visual Studio,
              Windows, Unix, Asp.Net Core
            </p>
          </Col>
          <Col className="ImageProfile" md={4}>
            <img
              className=" img-fluid"
              src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-15/e35/51279167_415551999233126_725206317257788755_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=e8Mg-fm0OaoAX9yArZr&oh=c1d8cd9786dd3a4aaaa70c1387285d31&oe=5F7F1B66"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
