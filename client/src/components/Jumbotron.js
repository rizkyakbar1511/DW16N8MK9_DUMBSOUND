import React, { Component } from "react";
import "./assets/css/Jumbotron.css";

export class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid jumbotron-main">
        <div className="container-jumbotron">
          <h1 className="jumbotron-landing-title text-center">
            Connect On DumbSound
          </h1>
          <p className="lead text-center">
            Discovery, Stream, and share a constantly expanding mix of music
            from emerging and major artists around the world
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
