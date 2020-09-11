import React from "react";
import CardInformation from "./CardInformation";

const Card = (props) => {
  return (
    <div
      className="d-inline-block containerCard brightness"
      onClick = {() => props.onClick(props.item)}
    >
      
      <img className=" img-fluid cardImage " src={props.item.imageSource} alt=""/>
       
      {props.item.selected && (
        <CardInformation
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
