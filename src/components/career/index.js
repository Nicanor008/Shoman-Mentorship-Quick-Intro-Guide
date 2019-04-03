import React, { Component } from "react";
import { Header, Grid, List, Card, Message } from "semantic-ui-react";

export default class Career extends Component {
  render() {
    return (
      <Grid columns={2} className="ui container">
        <Grid.Row>
          <Grid.Column>
            <Message>
              <Header as="h1">
                <u>Blogs Worth looking into</u>
              </Header>
              <List>
                <List.Item icon="users" content="Semantic UI" />
                <List.Item icon="marker" content="New York, NY" />
                <List.Item
                  icon="mail"
                  content={
                    <a href="mailto:jack@semantic-ui.com">
                      jack@semantic-ui.com
                    </a>
                  }
                />
                <List.Item
                  icon="linkify"
                  content={
                    <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                  }
                />
              </List>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message>
              <Header as="h1">
                <u>Amazing people to check out</u>
              </Header>
              <List>
                <List.Item icon="users" content="Semantic UI" />
                <List.Item icon="marker" content="New York, NY" />
                <List.Item
                  icon="mail"
                  content={
                    <a href="mailto:jack@semantic-ui.com">
                      jack@semantic-ui.com
                    </a>
                  }
                />
                <List.Item
                  icon="linkify"
                  content={
                    <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                  }
                />
              </List>
            </Message>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Message>
              <Header as="h1">
                <u>When to Stop</u>
              </Header>
              <List>
                <List.Item icon="users" content="Semantic UI" />
                <List.Item icon="marker" content="New York, NY" />
                <List.Item
                  icon="mail"
                  content={
                    <a href="mailto:jack@semantic-ui.com">
                      jack@semantic-ui.com
                    </a>
                  }
                />
                <List.Item
                  icon="linkify"
                  content={
                    <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                  }
                />
              </List>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message>
              <Header as="h1">
                <u>NewBies Nostalgia</u>
              </Header>
              <List>
                <List.Item icon="users" content="Semantic UI" />
                <List.Item icon="marker" content="New York, NY" />
                <List.Item
                  icon="mail"
                  content={
                    <a href="mailto:jack@semantic-ui.com">
                      jack@semantic-ui.com
                    </a>
                  }
                />
                <List.Item
                  icon="linkify"
                  content={
                    <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                  }
                />
              </List>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
