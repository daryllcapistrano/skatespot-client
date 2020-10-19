import React from "react";
import { LogoWrapper } from "./styles";
import { IconContext } from "react-icons";
import { IoMdPin } from "react-icons/io";

function Logo() {
  return (
    <LogoWrapper href="/">
      <IconContext.Provider
        value={{
          color: "#FF0605",
          size: "1.75rem",
        }}
      >
        <IoMdPin />
      </IconContext.Provider>
    </LogoWrapper>
  );
}

export default Logo;
