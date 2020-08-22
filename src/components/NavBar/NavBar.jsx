import React from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "../NavBar";

import {
  Nav,
  TitleLink,
  HamburgerButton,
  Collapse,
  NavList,
  NavItem,
  NavLink,
} from "./styles";

function NavBar() {
  return (
    <Nav>
      <div style={{ display: `inline-flex` }}>
        <Logo />
        <TitleLink to="/">Brand Name</TitleLink>

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
      </div>
    </Nav>
  );
}

export default NavBar;
