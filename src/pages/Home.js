import React from "react";
import HomePresentation from "../components/HomePresentation";
import CardContainer from "../components/CardContainer";

const Home =(props) => {
  return (
    <div>
      <HomePresentation title={props.title} subTitle={props.subTitle} />
      <CardContainer />
    </div>
  );
}

export default Home;
