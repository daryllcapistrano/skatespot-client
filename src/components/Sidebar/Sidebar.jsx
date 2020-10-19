import React from "react";
import Profile from "../Users/profile";
import { LoginButton, LogoutButton } from "../Auth0/";
import { Wrapper, LogoWrapper, InnerWrapper, Button } from "./styles";
import { ReactComponent as MySVG } from "../../assets/images/Map_light_Undraw.svg";

const Sidebar = () => {
  return (
    <Wrapper id="navigation">
      <LogoWrapper>
        <MySVG width={200} height={100} />
      </LogoWrapper>
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
