import React from "react";
import Logo from "../Logo";
import { Rotate as Hamburger } from "hamburger-react";
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
        SickSpots
        <Logo />
      </Title>
      <BurgerButton
        data-toggle="collapse"
        data-target="#collapseMenu"
        aria-controls="collapseMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Hamburger
          label="Show menu"
          color="#4FD1C5"
          easing="ease-in"
          hideOutline={true}
          rounded
        />
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
