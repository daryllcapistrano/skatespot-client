import React from "react";
import { LogoWrapper } from "./styles";

import { IconContext } from "react-icons";
import { FaMapPin } from "react-icons/fa";

function Logo() {
  return (
    <LogoWrapper href="/">
      <IconContext.Provider
        value={{
          color: "#ffffff",
          size: "1.75rem",
        }}
      >
        <FaMapPin />
      </IconContext.Provider>
    </LogoWrapper>
  );
}

export default Logo;
