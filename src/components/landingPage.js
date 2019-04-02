import React from "react";
import { Grid, Image } from "semantic-ui-react";

const LandingPage = () => (
  <Grid columns="two" className="ui container">
    <Grid.Row>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <br />
        <br />
        <center>
          <h2>Know where to begin</h2>
        </center>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row style={{ marginTop: "10%" }}>
      <Grid.Column>
        <br />
        <br />
        <center>
          <h2>Access The Right Materials</h2>
        </center>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row style={{ marginTop: "10%" }}>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <br />
        <br />
        <center>
          <h2>
            Pair up with a <strong>Mentor</strong>
          </h2>
        </center>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row style={{ marginTop: "10%" }}>
      <Grid.Column>
        <br />
        <br />
        <center>
          <h2>Share With the World</h2>
        </center>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default LandingPage;
