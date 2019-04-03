import React from "react";
import { Grid, Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    Software Engineer
  </a>
);

const Mentors = () => (
  <Grid columns={3} className="ui container">
    <Grid.Row>
      <Grid.Column>
        <Card
          image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          header="Nicanor Korir"
          description="Nicanor is a sound software engineer"
          extra={extra}
        />
      </Grid.Column>
      <Grid.Column>
        <Card
          image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          header="Nicanor"
          description="Elliot is a sound software engineer"
          extra={extra}
        />
      </Grid.Column>
      <Grid.Column>
        <Card
          image="https://images.unsplash.com/photo-1495558761807-e324eceafffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          header="Nicanor"
          description="Elliot is a sound software engineer"
          extra={extra}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Mentors;
