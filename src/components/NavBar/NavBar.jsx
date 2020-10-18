import React from "react";
import Logo from "../Logo";
import { IconContext } from "react-icons";
import { FcMenu } from "react-icons/fc";
import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";

import {
  Nav,
  Title,
  BurgerButton,
  MobileMenu,
  MobileWrapper,
  Button,
} from "./styles";

function NavBar() {
  return (
    <Nav>
      <Title to="/">
        Sick Spots
        <Logo />
      </Title>
      <BurgerButton
        data-toggle="collapse"
        data-target="#collapseMenu"
        aria-controls="collapseMenu"
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
      </BurgerButton>
      <MobileMenu id="collapseMenu">
        <MobileWrapper>
          <Button to="/">Dashboard</Button>
          <Button to="/skateparks/create">Add Spot</Button>
          <LoginButton />
          <LogoutButton />
        </MobileWrapper>
      </MobileMenu>
    </Nav>
  );
}

export default NavBar;
