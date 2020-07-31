import React from "react";
import { Wrapper } from "./styles";

import { IconContext } from "react-icons";
import { FaHubspot } from "react-icons/fa";

function Logo() {
  return (
    <Wrapper href="/">
      <IconContext.Provider
        value={{
          color: "#8693AB",
          size: "2rem",
        }}
      >
        <FaHubspot />
      </IconContext.Provider>
    </Wrapper>
  );
}

export default Logo;
