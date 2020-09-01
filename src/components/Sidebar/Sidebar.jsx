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

const Sidebar = () => {
  return (
    <Wrapper id="navigation">
      <List>
        <ListItem>
          <Button>
            <LinkWrapper to="/">
              <div>
                <div>
                  <FaHome color="#ffffff" />
                </div>
                <div>
                  <ListItemText>Home</ListItemText>
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
                  <ListItemText>Add New Spot</ListItemText>
                </div>
              </div>
            </LinkWrapper>
          </Button>
        </ListItem>
        {/* <ListItem>
          <Button>
            <LinkWrapper to="/skateparks/list">
              <div>
                <div>
                  <FaListUl color="#ffffff" />
                </div>
                <div>
                  <ListItemText>List All Spots</ListItemText>
                </div>
              </div>
            </LinkWrapper>
          </Button>
        </ListItem> */}
      </List>
    </Wrapper>
  );
};

export default Sidebar;
