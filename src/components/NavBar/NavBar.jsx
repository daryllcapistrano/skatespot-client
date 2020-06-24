import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";

const Container = styled.div.attrs({
  className: "container",
})`
  max-width: 100%;
  ${"" /* height: 150px; */}
  margin: 0;
  padding: 0;
`;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg",
})`
  margin-bottom: 20px;
  background: linear-gradient(90deg, #1f3d83 0%, #097bbf 100%);
`;

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo />
          <Links />
        </Nav>
      </Container>
    );
  }
}

export default NavBar;
