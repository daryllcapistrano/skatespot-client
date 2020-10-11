import React from "react";
import Logo from "../Logo";
import { IconContext } from "react-icons";
import { FcMenu } from "react-icons/fc";
import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";

import {
  Nav,
  Title,
  Menu,
  MobileMenu,
  MobileWrapper,
  NavItem,
  NavLink,
  LinkWrapper,
} from "./styles";

function NavBar() {
  return (
    <Nav>
      <Title to="/">
        Sick SpotS
        <Logo />
      </Title>
      <LinkWrapper>
        <NavLink to="/signup">
          <button className="btn btn-outline-dark" type="button">
            Sign Up
          </button>
        </NavLink>
        <LoginButton />
        <LogoutButton />
      </LinkWrapper>
      <div>
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
        <MobileWrapper>
          <NavItem>
            <NavLink to="/">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/skateparks/create">Add A Spot</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup">Sign Up</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        </MobileWrapper>
      </MobileMenu>
    </Nav>
  );
}

export default NavBar;
