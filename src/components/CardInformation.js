import React from "react";
import { useSpring, animated } from "react-spring";

const CardInformation = (props) => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="cardInfo " style={style}>
      <p className="cardTitle">{props.title}</p>
      <p className="cardSubTitle">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.subTitle}
        </a>
      </p>
    </animated.div>
  );
}

export default CardInformation;
