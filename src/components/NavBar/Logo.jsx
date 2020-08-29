import React from "react";
import { Wrapper } from "./styles";

import { IconContext } from "react-icons";
import { FaMapPin } from "react-icons/fa";

function Logo() {
  return (
    <Wrapper href="/">
      <IconContext.Provider
        value={{
          color: "#ffffff",
          size: "1.25em",
        }}
      >
        <FaMapPin />
      </IconContext.Provider>
    </Wrapper>
  );
}

export default Logo;
