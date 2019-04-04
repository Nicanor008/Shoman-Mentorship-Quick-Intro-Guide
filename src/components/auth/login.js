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

class Login extends Component {
  render() {
    return (
      <div>
        <Grid columns="two" className="ui container" centered>
          <Grid.Column style={{ backgroundColor: "#585c63" }}>
            <Header as="h2" textAlign="center">
              Login
            </Header>
            <Segment style={{ backgroundColor: "#60656d" }}>
              <Form size="large">
                <Form.Input
                  fluid
                  icon="user"
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

                <Button color="blue" fluid size="large">
                    <Link to="/home">Login</Link>
                </Button>
              </Form>
            </Segment>
            <Message style={{ backgroundColor: "#fff" }}>
              Not registered yet? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
