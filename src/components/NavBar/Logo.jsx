import React from "react";
import { Wrapper } from "./styles";

import { IconContext } from "react-icons";
import { FaHubspot } from "react-icons/fa";

function Logo() {
  return (
    <Wrapper href="/">
      <IconContext.Provider
        value={{
          color: "#000000",
          size: "2rem",
        }}
      >
        <FaHubspot />
      </IconContext.Provider>
    </Wrapper>
  );
}

export default Logo;
