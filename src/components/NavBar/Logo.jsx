import React, { Component } from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { FaHubspot } from "react-icons/fa";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper href="/">
        <IconContext.Provider
          value={{
            color: "#000000",
            size: "2rem",
            // className: "global-class-name",
          }}
        >
          <FaHubspot />
        </IconContext.Provider>
      </Wrapper>
    );
  }
}

export default Logo;
