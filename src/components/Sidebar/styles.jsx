import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div.attrs({
  className: "col-md-2 d-none d-lg-block",
})`
  height: 100vh;
  background-color: #191d3a;
  padding: 0;
`;

export const List = styled.ul`
  list-style-type: none;
  height: 100%;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li`
  margin: 0.6em 0.3em;
`;
export const ListItemText = styled.span`
  color: #ffffff;
`;

export const Button = styled.button.attrs({
  className: "btn btn-primary btn-block",
  type: "button",
})`
  border-radius: 30px;
  height: 3.5em;
  display: block;
  padding: 0;
  background-color: #ee5f21;
  border-color: #ee5f21;
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
