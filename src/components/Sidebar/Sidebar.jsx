import React from "react";
import { FaPlus, FaHome } from "react-icons/fa";
import {
  Wrapper,
  List,
  ListItem,
  ListItemText,
  Button,
  LinkWrapper,
} from "./styles";

import { ReactComponent as MySVG } from "../../assets/images/Map_light_Undraw.svg";

const Sidebar = () => {
  return (
    <Wrapper id="navigation">
      <List>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            padding: `0.25em`,
          }}
        >
          <MySVG width={200} height={200} />
        </div>
        <ListItem>
          <Button>
            <LinkWrapper to="/">
              <div>
                <div>
                  <FaHome color="#ffffff" />
                </div>
                <div>
                  <ListItemText>home</ListItemText>
                </div>
              </div>
            </LinkWrapper>
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <LinkWrapper to="/skateparks/create">
              <div>
                <div>
                  <FaPlus color="#ffffff" />
                </div>
                <div>
                  <ListItemText>add new spot</ListItemText>
                </div>
              </div>
            </LinkWrapper>
          </Button>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
