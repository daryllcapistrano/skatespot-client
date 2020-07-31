import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaListUl, FaHome } from "react-icons/fa";
import { Wrapper, List, ListItem, ListItemText } from "./styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <div id="navigation">
        <List>
          <ListItem>
            <Link to="/">
              <FaHome />
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/skateparks/create">
              <FaPlus />
              <ListItemText>Add New Spot</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/skateparks/list">
              <FaListUl />
              <ListItemText>List All Spots</ListItemText>
            </Link>
          </ListItem>
        </List>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
