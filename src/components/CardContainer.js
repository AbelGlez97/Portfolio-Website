import React from "react";
import { PROJECTS } from "./data/projectsData";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: PROJECTS,
    };
  }

  handleCardSelected = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around ">
          {this.state.items.map((item) => {
            return (
              <Card
                item={item}
                key={item.id}
                onClick={() => this.handleCardSelected(item.id)}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default CardContainer;
