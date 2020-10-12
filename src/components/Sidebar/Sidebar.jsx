import React from "react";
// import { FaPlus, FaHome } from "react-icons/fa";
import {
  Wrapper,
  List,
  ListItem,
  ListItemText,
  Button,
  LinkWrapper,
} from "./styles";

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
      <List>
        <ListItem>
          <Button>
            <LinkWrapper to="/">
              {/* <FaHome color="#ffffff" /> */}
              <ListItemText>home</ListItemText>
            </LinkWrapper>
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <LinkWrapper to="/skateparks/create">
              {/* <FaPlus color="#ffffff" /> */}
              <ListItemText>add new spot</ListItemText>
            </LinkWrapper>
          </Button>
        </ListItem>
        <ListItem>
          <LoginButton />
        </ListItem>
        <ListItem>
          <LogoutButton />
        </ListItem>
        <div
          style={{
            marginTop: `5em`,
            paddingTop: `2em`,
            borderTop: `2px solid #1e2225`,
          }}
        >
          <Profile />
        </div>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
