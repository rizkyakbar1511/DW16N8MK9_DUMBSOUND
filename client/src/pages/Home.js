import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import AllMusics from "../components//AllMusics";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <AllMusics />
      </React.Fragment>
    );
  }
}

export default Home;
