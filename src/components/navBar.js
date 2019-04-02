import React, { Component } from "react";
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
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Mentors"
              active={activeItem === "Mentors"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Career Advice"
              active={activeItem === "Career Advice"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item
                name="Get Access"
                active={activeItem === "Get Access"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </div>
        </Menu>
      </div>
    );
  }
}
