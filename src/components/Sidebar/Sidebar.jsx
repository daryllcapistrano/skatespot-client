import React from "react";
// import { FaPlus, FaHome } from "react-icons/fa";
import { Wrapper, InnerWrapper, Button } from "./styles";

import Profile from "../Users/profile";
import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";

import { ReactComponent as MySVG } from "../../assets/images/Map_light_Undraw.svg";

const Sidebar = () => {
  return (
    <Wrapper id="navigation">
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          padding: `1.25em`,
        }}
      >
        <MySVG width={200} height={100} />
      </div>
      <InnerWrapper>
        <Button to="/">home</Button>
        <Button to="/skateparks/create">add spot</Button>
        <Profile />
        <LoginButton />
        <LogoutButton />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Sidebar;
