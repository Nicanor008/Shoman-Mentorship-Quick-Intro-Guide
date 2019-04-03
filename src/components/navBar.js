import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui justified">
        <Menu className="ui inverted menu">
          <div className="ui justified container">
            <Link to="/" >            
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/mentors" >            
            <Menu.Item
              name="Mentors"
              active={activeItem === "Mentors"}
              onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/career-advice" >            
            <Menu.Item
              name="Career Advice"
              active={activeItem === "Career Advice"}
              onClick={this.handleItemClick}
              />
              </Link>
            <Menu.Menu position="right">
              <Link to="/login" >
              <Menu.Item
                name="Get Started"
                active={activeItem === "Get Started"}
                onClick={this.handleItemClick}
                />
              </Link>
            </Menu.Menu>
          </div>
        </Menu>
      </div>
    );
  }
}
