import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "./Logo";

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg",
})`
  justify-content: space-between;
  background: linear-gradient(90deg, #1f3d83 0%, #097bbf 100%);
`;

const TitleLink = styled(Link).attrs({
  className: "navbar-brand",
})`
  color: #ffffff;
  max-width: 100%;
  margin: 0;
  padding: 0;
  :hover {
    color: #ffcc66;
  }
`;

const HamburgerButton = styled.button.attrs({
  className: "navbar-toggler",
})``;

const Collapse = styled.div.attrs({
  className: "collapse navbar-collapse",
})`
  transition: none !important;
`;

const NavList = styled.ul.attrs({
  className: "navbar-nav my-2 my-lg-0",
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

class NavBar extends Component {
  render() {
    return (
      // <Container>
      <Nav>
        <Logo />
        <TitleLink to="/">SkateHereApp</TitleLink>

        <HamburgerButton
          type="button"
          data-toggle="collapse"
          data-target="#collapseThis"
          aria-controls="collapseThis"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IconContext.Provider
            value={{
              color: "#000000",
              size: "2rem",
            }}
          >
            <GiHamburgerMenu />
          </IconContext.Provider>
        </HamburgerButton>
        <Collapse id="collapseThis">
          <NavList>
            <NavItem>
              <NavLink to="/skateparks/create">Add A New Spot</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/skateparks/list">List Skateparks</NavLink>
            </NavItem>
          </NavList>
        </Collapse>
      </Nav>
      // </Container>
    );
  }
}

export default NavBar;
