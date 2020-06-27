import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

const BrandLink = styled(Link).attrs({
  className: "navbar-brand",
})`
  color: #ffffff;
  :hover {
    color: #ffcc66;
  }
`;

const HamburgerButton = styled.button.attrs((props) => ({
  className: "navbar-toggler",
  type: "button",
  dataToggle: "collapse",
  dataTarget: "#linkItems",
  ariaControls: "linkItems",
  ariaExpanded: "false",
  ariaLabel: "Toggle navigation",
}))``;

const Collapse = styled.div.attrs({
  className: "collapse navbar-collapse",
  id: "linkItems",
})``;

const List = styled.ul.attrs({
  className: "navbar-nav mr-auto mt-2 mt-lg-0",
})``;

const NavItem = styled.li.attrs({
  className: "nav-item",
})``;

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
        <HamburgerButton>
          <IconContext.Provider
            value={{
              color: "#000000",
              size: "2rem",
              // className: "global-class-name",
            }}
          >
            <GiHamburgerMenu />
          </IconContext.Provider>
        </HamburgerButton>
        <Collapse>
          <List>
            <NavItem>
              <NavLink to="/skateparks/list">List Skateparks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/skateparks/create">Create Skatepark</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/skateparks/SpotGrid">Spot Grid</NavLink>
            </NavItem>
          </List>
        </Collapse>
      </>
    );
  }
}

export default Links;
