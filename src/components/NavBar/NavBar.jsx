import React from "react";
import Logo from "../Logo";
import { IconContext } from "react-icons";
import { FcMenu } from "react-icons/fc";

import {
  Nav,
  Title,
  Menu,
  MobileMenu,
  InnerWrapper,
  NavItem,
  NavLink,
} from "./styles";

function NavBar() {
  return (
    <Nav>
      <Title to="/">
        Sick Spot
        <Logo />
      </Title>
      {/*  add media query to change positioning of burger button */}
      <div style={{ width: `100%`, textAlign: `center` }}>
        <Menu
          type="button"
          data-toggle="collapse"
          data-target="#collapseThis"
          aria-controls="collapseThis"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IconContext.Provider
            value={{
              size: "1.25rem",
            }}
          >
            <FcMenu />
          </IconContext.Provider>
        </Menu>
      </div>
      <MobileMenu id="collapseThis">
        <InnerWrapper>
          <NavItem>
            <NavLink to="/skateparks/create">Add A New Spot</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/skateparks/list">List Skateparks</NavLink>
          </NavItem>
        </InnerWrapper>
      </MobileMenu>
    </Nav>
  );
}

export default NavBar;
