import React from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo";

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
      <div style={{ width: `100%` }}>
        <div style={{ width: `100%` }}>
          {/* <Logo /> */}
          <TitleLink to="/">
            Sick Spot
            <Logo />
          </TitleLink>
        </div>
        <div style={{ width: `100%`, textAlign: `center` }}>
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
                color: "#ffffff",
                size: "1.25rem",
              }}
            >
              <GiHamburgerMenu />
            </IconContext.Provider>
          </HamburgerButton>
        </div>
      </div>
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
  );
}

export default NavBar;
