import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div.attrs({
  className: "col-lg-2 d-none d-lg-block",
})`
  background-color: #272c2e;
  padding: 0em;
  height: auto;
`;

export const List = styled.ul`
  list-style-type: none;
  height: 100%;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li`
  margin: 0.3em;
`;
export const ListItemText = styled.span`
  color: #ffffff;
  text-transform: capitalize;
  padding: 0 2em;
`;

export const Button = styled.button.attrs({
  className: "btn btn-primary btn-block btn-sm",
  type: "button",
})`
  border-radius: 3px;
  height: 2.5em;
  display: block;
  padding: 0;
  background-color: #404549;
  border-color: #404549;
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
