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

const BrandLink = styled(Link).attrs({
  className: "navbar-brand",
})`
  color: #ffffff;
  :hover {
    color: #ffcc66;
  }
`;

const NavLink = styled(Link).attrs({
  className: "nav-link",
})`
  color: #ffffff;
  :hover {
    color: #ffcc66;
  }
`;

class Links extends Component {
  render() {
    return (
      <>
        <BrandLink to="/">Skatepark and Spot Directory</BrandLink>
        <Collapse>
          <List>
            <Item>
              <NavLink to="/skateparks/list">List Skateparks</NavLink>
            </Item>
            <Item>
              <NavLink to="/skateparks/create">Create Skatepark</NavLink>
            </Item>
            <Item>
              <NavLink to="/skateparks/SpotGrid">Spot Grid</NavLink>
            </Item>
          </List>
        </Collapse>
      </>
    );
  }
}

export default Links;
