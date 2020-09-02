import React from "react";
import Logo from "../Logo";
import { IconContext } from "react-icons";
import { FcMenu } from "react-icons/fc";
// import { RiMapPinAddFill } from "react-icons/ri";

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
      <MobileMenu id="collapseThis">
        <InnerWrapper>
          <NavItem>
            <NavLink to="/skateparks/create">
              {/* <IconContext.Provider
                value={{
                  size: "1.25rem",
                }}
              >
                <RiMapPinAddFill />
              </IconContext.Provider> */}
              Add A New Spot
            </NavLink>
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
