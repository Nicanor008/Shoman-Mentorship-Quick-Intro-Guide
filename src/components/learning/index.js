import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class Learning extends Component {
  render() {
    return (
      <div className="container">
        <center>
          <strong>
            <h1>Core Basics</h1>
          </strong>
        </center>
        <br />
        <div className="row">
          <div className="col-md-3">
            <Card
              style={{ backgroundColor: "#9c9fa5", color: "white" }}
              image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              header="HTML"
              description="Nicanor is a sound software engineer"
            />
          </div>
          <div className="col-md-3">
            <Card
              style={{ backgroundColor: "#9c9fa5", color: "white" }}
              image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              header="CSS"
              description="Nicanor is a sound software engineer"
            />
          </div>
          <div className="col-md-3">
            <Card
              style={{ backgroundColor: "#9c9fa5", color: "white" }}
              image="https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              header="Javascript"
              description="Nicanor is a sound software engineer"
            />
          </div>
          <div className="col-md-3">
            <Card
              style={{ backgroundColor: "#9c9fa5", color: "white" }}
              image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              header="Python"
              description="Nicanor is a sound software engineer"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <center>
          <b>
            <h2>Tracks</h2>
          </b>
        </center>
        <div className="row pt-4">
          <div className="col-md-3">
            <Card
              style={{ backgroundColor: "#9c9fa5", color: "white" }}
              image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              header="Web Development"
              description="Online accessible apps"
            />
          </div>
          <div className="col-md-3">
            <Card
              style={{ backgroundColor: "#9c9fa5", color: "white" }}
              image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              header="Mobile Development"
              description="Online accessible apps"
            />
          </div>
          <div className="col-md-3">
            <Card
              style={{ backgroundColor: "#9c9fa5", color: "white" }}
              image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              header="AI & Data"
              description="Online accessible apps"
            />
          </div>
          <div className="col-md-3">
            <Card
              style={{ backgroundColor: "#9c9fa5", color: "white" }}
              image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              header="VR & AR"
              description="Online accessible apps"
            />
          </div>
        </div>
      </div>
    );
  }
}
