import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collapse navbar-collapse",
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="navbar-brand">
          Skatepark and Spot Directory
        </Link>
        <Collapse>
          <List>
            <Item>
              <Link to="/skateparks/list" className="nav-link">
                List Skateparks
              </Link>
            </Item>
            <Item>
              <Link to="/skateparks/create" className="nav-link">
                Create Skatepark
              </Link>
            </Item>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Links;
