import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Grid columns="two" className="ui container" centered>
          <Grid.Column style={{ backgroundColor: "#585c63" }}>
            <Header as="h2" textAlign="center">
              Sign Up
            </Header>
            <Segment style={{ backgroundColor: "#60656d" }}>
              <Form size="large">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Your Name"
                />
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="won"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="th"
                  iconPosition="left"
                  placeholder="What's your interest"
                  type="text"
                />
                <Button color="blue" fluid size="large">
                  Sign Up
                </Button>
              </Form>
            </Segment>
            <Message style={{ backgroundColor: "#fff" }}>
              Got an account, <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignUp;
